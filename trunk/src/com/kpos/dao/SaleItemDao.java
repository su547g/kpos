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
}
