package com.kpos.dao;

import com.kpos.domain.SaleItemOption;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/21/12 11:40 PM
 */
public class SaleItemOptionDao extends AbstractJpaDao<SaleItemOption> implements ISaleItemOptionDao {
    @Override
    protected Class getEntityClass() {
        return SaleItemOption.class;
    }

    @Override
    public void insertSaleItemOption(SaleItemOption aItem) {
        if(aItem.getId() == null) {
            super.insert(aItem);
        } else {
            SaleItemOption temp = super.findById(aItem.getId());
            if(temp == null) {
                aItem.setId(null);
                super.insert(aItem);
            }
        }
    }

    @Override
    public SaleItemOption findSaleItemOption(long id) {
        SaleItemOption item = this.findById(id);
        return item;
    }

    @Override
    public SaleItemOption updateSaleItemOption(SaleItemOption aItem) {
        SaleItemOption item = super.update(aItem);
        return item;
    }

    @Override
    public boolean deleteSaleItemOption(SaleItemOption aItem) {
        if(aItem.getId() != null) {
            return super.delete(aItem);
        }
        return false;
    }

    @Override
    public boolean deleteSaleItemOption(long aId) {
        return super.delete(aId);
    }
}
