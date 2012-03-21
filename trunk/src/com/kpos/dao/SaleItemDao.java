package com.kpos.dao;

import com.kpos.domain.SaleItem;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/18/12 12:26 AM
 */
public class SaleItemDao extends AbstractJpaDao<SaleItem> implements ISaleItemDao {
    @Override
    protected Class getEntityClass() {
        return SaleItem.class;
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
    public SaleItem udpateSaleItem(SaleItem aItem) {
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
