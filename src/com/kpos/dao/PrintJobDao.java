package com.kpos.dao;

import com.kpos.domain.PrintJob;
import com.kpos.domain.Printer;
import org.springframework.stereotype.Repository;

import javax.persistence.NoResultException;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/25/12 5:33 PM
 */
@Repository
public class PrintJobDao extends AbstractJpaDao<PrintJob> implements IPrintJobDao {

    @Override
    protected Class getEntityClass() {
        return PrintJob.class;
    }

    @Override
    public PrintJob findByName(String aName) {
        Query namedQuery = this.entityManager.createNamedQuery("findPrintJobByName");
        namedQuery.setParameter("aName", aName);
        try {
            Object obj = namedQuery.getSingleResult();

            if(obj != null) {
                return (PrintJob)obj;
            }
            return null;
        }catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public List<PrintJob> listByNameAsc() {
        Query namedQuery = this.entityManager.createNamedQuery("listPrintJobsByNameAsc");
        return (List<PrintJob>)namedQuery.getResultList();
    }

    @Override
    public PrintJob findById(String aId) {
        Query namedQuery = this.entityManager.createNamedQuery("findPrintJobById");
        namedQuery.setParameter("aId", aId);
        try {
            Object obj = namedQuery.getSingleResult();

            if(obj != null) {
                return (PrintJob)obj;
            }
            return null;
        }catch (NoResultException e) {
            return null;
        }
    }

}
