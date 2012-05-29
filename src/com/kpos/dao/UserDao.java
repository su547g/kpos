package com.kpos.dao;

import com.kpos.domain.MenuCategory;
import com.kpos.domain.User;
import org.springframework.stereotype.Repository;

import javax.persistence.NoResultException;
import javax.persistence.Query;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 5/27/12 5:17 PM
 */
@Repository
public class UserDao extends AbstractJpaDao<User> implements IUserDao {
    @Override
    protected Class getEntityClass() {
        return User.class;
    }

    @Override
    public User findByPasscode(String aPasscode) {
        Query namedQuery = this.entityManager.createNamedQuery("findUserByPasscode");
        namedQuery.setParameter("aPasscode", aPasscode);
        try {
            Object obj = namedQuery.getSingleResult();

            if(obj != null) {
                return (User)obj;
            }
            return null;
        }catch (NoResultException exception) {
            return null;
        }
    }
}
