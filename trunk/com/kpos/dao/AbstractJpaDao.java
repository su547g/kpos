package com.kpos.dao;

import java.sql.SQLException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.ejb.HibernateEntityManagerFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;

/**
 * <p>abstract base class for JPA based DAOs</p>
 * Created by kpos.
 * Author: kkwang
 * Date: 3/9/12 10:14 PM
 */

public abstract class AbstractJpaDao<T> implements IDao<T> {
    private final static Logger log = LoggerFactory.getLogger(AbstractJpaDao.class);

    @PersistenceContext
    protected transient EntityManager entityManager;

    protected AbstractJpaDao() {
        log.debug("AbstractJpaDao constructor");
        log.debug("entityManager is null: " + (entityManager == null));
    }

    /**
     * @return should return the Class of the Entity for which this DAO provides
     *         data access (e.g. UserDao would return User.class).
     */
    @SuppressWarnings("rawtypes")
    protected abstract Class getEntityClass ();

    @Override
    public T insert (T anObject) {
        try {
            entityManager.persist(anObject);
        } catch(RuntimeException e) {
            log.error("Insert object failed " + anObject.getClass().getCanonicalName());
            throw e; // or display error message
        }
        return anObject;
    }

    @Override
    public T update (T anObject) {
        try {
            T mergedObject = entityManager.merge(anObject);
            return mergedObject;
        } catch(RuntimeException e) {
            log.error("Update object failed " + anObject.getClass().getCanonicalName());
            throw e; // or display error message
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public T findById (Long anId) {
        return (T) entityManager.find(this.getEntityClass(), anId);
    }

    @SuppressWarnings("unchecked")
    @Override
    public T findById (String anId) {
        return (T) entityManager.find(this.getEntityClass(), anId);
    }

    @Override
    public boolean delete (Long aTargetId) {
        log.debug("deleting instance of [" + getEntityClass() + "] identified by id [" + aTargetId + "]");

        T target = findById(aTargetId);
        if (target != null) {
            return delete(target);
        }

        log.debug("instance not found");
        return false;
    }

    @Override
    public boolean delete (T anObject) {
        try {
            entityManager.remove(anObject);
            return true;
        } catch(RuntimeException e) {
            log.error("Delete object failed " + anObject.getClass().getCanonicalName());
            throw e; // or display error message
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public List<T> findAll () {
        return (List<T>) entityManager.createQuery("from " + getEntityClass().getName()).getResultList();
    }

    @Override
    public T merge (T aDetachedObject) {
        try {
            T object = entityManager.merge(aDetachedObject);
            entityManager.flush();
            return object;
        } catch(RuntimeException e) {
            log.error("Merge object failed " + aDetachedObject.getClass().getCanonicalName());
            throw e; // or display error message
        }
    }

    /**
     * utility method for returning a single object from the supplied list.  This delegates to the
     * multi-arg version of the same method
     *
     * @param aResultList the result list
     * @return the first object in the result set, or null if there are none.
     */
    public T getSingleObject (@SuppressWarnings("rawtypes") List aResultList) {
        return getSingleObject(aResultList, false, false);
    }


    /**
     * utility method for returning a single object from the supplied list.  This delegates to the
     * multi-arg version of the same method
     *
     * @param aResultList              the result list
     * @param aFailIfZeroObjects       if true, an IllegalArgumentException will be thrown if the aResultList  parameter
     *                                 contains zero objects.  Otherwise, a null will be returned.
     * @param aFailIfMoreThanOneObject if true, an IllegalArgumentException will be thrown if the ResultList parameter
     *                                 contains MORE than one object.  Otherwise, the first Object in the ResultList will be returned.
     * @return the first object in the result set, or null if there are none (see notes on fail params).
     * @throws IllegalArgumentException
     */
    @SuppressWarnings({ "rawtypes", "unchecked" })
    public T getSingleObject (List aResultList, boolean aFailIfZeroObjects, boolean aFailIfMoreThanOneObject) {
        if (aResultList.size() == 1) {
            return (T) aResultList.get(0);
        }

        if (aResultList.size() == 0) {
            if (aFailIfZeroObjects) {
                throw new IllegalArgumentException("expected one object, but there were 0 (and the aFailIfZeroObjects parameter was set to true");
            }
            else {
                return null;
            }
        }

        if (aResultList.size() > 1) {
            if (aFailIfMoreThanOneObject) {
                throw new IllegalArgumentException("expected one object, but there were [" + aResultList.size() + "] and the aFailIfMoreThanOneObject parameter was set to true");
            }
            else {
                log.debug("Note - there was more than one object in the ResultSet, returning the first");
                return (T) aResultList.get(0);
            }
        }

        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    /**
     * Execute the delete HQL.  WARNING: When deleting via HQL, hibernate collection cascades
     * are NOT honored (unless they are backed by a cascading delete foreign key, which they usually
     * are not).
     *
     * @param aHql a single HQL delete statement
     * @return the number of rows deleted
     */
    protected int bulkDelete (final String aHql) {
        return bulkDelete(new String[] {aHql});
    }

    /**
     * Execute the delete HQL.  WARNING: When deleting via HQL, hibernate collection cascades
     * are NOT honored (unless they are backed by a cascading delete foreign key, which they usually
     * are not).
     *
     * @param aHql an array of HQL delete statement
     * @return the total number of rows deleted
     */
    protected int bulkDelete (final String[] aHql) {
        HibernateTemplate hibernateTemplate = getNewHibernateTemplate();

        Integer deleted = hibernateTemplate.execute(new HibernateCallback<Integer>() {
            @Override
            public Integer doInHibernate (Session session) throws HibernateException, SQLException {
                int itemsDeleted = 0;


                for (String eachHql : aHql) {
                    try {
                        itemsDeleted += session.createQuery(eachHql).executeUpdate();
                        if (log.isDebugEnabled()) {
                            log.debug("deleted [" + itemsDeleted + "] rows with the HQL [" + eachHql + "]");
                        }

                    }
                    catch (HibernateException e) {
                        log.error("error while executing hibernate bulk delete hql [" + eachHql + "], ex [" + e.getMessage() + "]", e);
                        throw e;
                    }
                }

                return itemsDeleted;
            }
        });

        return deleted;
    }

    protected HibernateTemplate getNewHibernateTemplate() {
        SessionFactory sessionFactory = ((HibernateEntityManagerFactory) entityManager.getEntityManagerFactory()).getSessionFactory();

        return new HibernateTemplate(sessionFactory);
    }


    public EntityManager getEntityManager () {
        return entityManager;
    }

    public void setEntityManager (EntityManager aEntityManager) {
        entityManager = aEntityManager;
    }
}