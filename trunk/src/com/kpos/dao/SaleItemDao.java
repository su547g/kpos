package com.kpos.dao;

import com.kpos.domain.SaleItem;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/18/12 12:26 AM
 */
@Repository
public class SaleItemDao extends AbstractJpaDao<SaleItem> implements ISaleItemDao {
    @Override
    protected Class getEntityClass() {
        return SaleItem.class;
    }

    @Override
    public SaleItem findByName(long aCategoryId, String aName) {
        Query namedQuery = this.entityManager.createNamedQuery("findBySaleItemName");
        namedQuery.setParameter("aCatId", aCategoryId);
        namedQuery.setParameter("aName", aName);
        Object obj = namedQuery.getSingleResult();
        if(obj != null) {
            return (SaleItem)obj;
        }
        return null;
    }

    @Override
    public List<SaleItem> listSaleItemsForCategory(long aCatId) {
        Query namedQuery = this.entityManager.createNamedQuery("listSaleItemsByCatNameAsc");
        namedQuery.setParameter("aCatId", aCatId);
        return (List<SaleItem>)namedQuery.getResultList();
    }

    @Override
    public void insertSaleItem(SaleItem aItem) {
        //Check if item already exists before inserting
        if(aItem.getId() == null) {
            super.insert(aItem);
        } else {
            SaleItem temp = super.findById(aItem.getId());
            if(temp == null) {
                aItem.setId(null);
                super.insert(aItem);
            }
        }
    }

    @Override
    public SaleItem findSaleItem(long id) {
        SaleItem item = this.findById(id);
        return item;
    }

    @Override
    public SaleItem updateSaleItem(SaleItem aItem) {
        SaleItem item = super.update(aItem);
        return item;
    }

    @Override
    public boolean deleteSaleItem(SaleItem aItem) {
        if(aItem.getId() != null) {
            return super.delete(aItem);
        }
        return false;
    }
}
