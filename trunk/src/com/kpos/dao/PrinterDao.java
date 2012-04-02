package com.kpos.dao;

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
public class PrinterDao extends AbstractJpaDao<Printer> implements IPrinterDao {

    @Override
    protected Class getEntityClass() {
        return Printer.class;
    }

    @Override
    public Printer findByName(String aName) {
        Query namedQuery = this.entityManager.createNamedQuery("findPrinterByName");
        namedQuery.setParameter("aName", aName);
        try {
            Object obj = namedQuery.getSingleResult();

            if(obj != null) {
                return (Printer)obj;
            }
            return null;
        }catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public List<Printer> listByNameAsc() {
        Query namedQuery = this.entityManager.createNamedQuery("listPrintersByNameAsc");
        return (List<Printer>)namedQuery.getResultList();
    }
}
