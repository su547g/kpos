package com.kpos.dao;

import com.kpos.domain.SaleItemOption;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/21/12 11:39 PM
 */
public interface ISaleItemOptionDao {
    void insertSaleItem(SaleItemOption aItem);

    SaleItemOption findSaleItem(long id);

    SaleItemOption updateSaleItem(SaleItemOption aItem);

    boolean deleteSaleItem(SaleItemOption aItem);
}
