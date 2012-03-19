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
        //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public SaleItem findSaleItem(long id) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public SaleItem udpateSaleItem(SaleItem aItem) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public SaleItem deleteSaleItem(SaleItem aItem) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}
