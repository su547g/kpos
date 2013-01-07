package com.kpos.dao;

import com.kpos.domain.CompanyDiscount;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 6/21/12 11:37 PM
 */
@Repository
public class DiscountDao extends AbstractJpaDao<CompanyDiscount> implements IDiscountDao {
    @Override
    protected Class getEntityClass() {
        return CompanyDiscount.class;
    }

    @Override
    public CompanyDiscount findDiscountByRate(double aRate) {
        Query namedQuery = this.entityManager.createNamedQuery("CompanyDiscount.findDiscountRate");
        namedQuery.setParameter("aRate", aRate);
        List results = namedQuery.getResultList();
        if(results.isEmpty()) {
            return null;
        } else {
            return (CompanyDiscount)results.get(0);
        }
    }

    @Override
    public CompanyDiscount findDiscountByName(String aName) {
        Query namedQuery = this.entityManager.createNamedQuery("CompanyDiscount.findDiscountByName");
        namedQuery.setParameter("aName", aName);
        List results = namedQuery.getResultList();
        if(results.isEmpty()) {
            return null;
        } else {
            return (CompanyDiscount)results.get(0);
        }
    }
}
