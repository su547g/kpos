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
        //TODO: Check if item already exists before inserting

    }

    @Override
    public SaleItem findSaleItem(long id) {
        //TODO:
        SaleItem item = this.findById(id);
        return item;
    }

    @Override
    public SaleItem udpateSaleItem(SaleItem aItem) {
        //TODO:
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public boolean deleteSaleItem(SaleItem aItem) {
        if(aItem.getId() != null) {
            return this.delete(aItem);
        }
        return false;
    }
}
