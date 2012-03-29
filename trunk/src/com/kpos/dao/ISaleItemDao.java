package com.kpos.dao;

import com.kpos.domain.SaleItem;

import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/18/12 12:27 AM
 */
public interface ISaleItemDao {
    SaleItem findByName(long aCategoryId, String aName);

    List<SaleItem> listSaleItemsForCategory(long aCatId);

    void insertSaleItem(SaleItem aItem);

    SaleItem findSaleItem(long id);

    SaleItem updateSaleItem(SaleItem aItem);

    boolean deleteSaleItem(SaleItem aItem);
}
