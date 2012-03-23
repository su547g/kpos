package com.kpos.dao;

import com.kpos.domain.SaleItemOption;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/21/12 11:39 PM
 */
public interface ISaleItemOptionDao {
    void insertSaleItemOption(SaleItemOption aItem);

    SaleItemOption findSaleItemOption(long id);

    SaleItemOption updateSaleItemOption(SaleItemOption aItem);

    boolean deleteSaleItemOption(SaleItemOption aItem);

    boolean deleteSaleItemOption(long aId);
}
