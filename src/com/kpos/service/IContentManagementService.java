package com.kpos.service;

import com.kpos.domain.Category;
import com.kpos.domain.SaleItem;
import com.kpos.ws.app.CategoryType;
import com.kpos.ws.app.SaleItemType;

import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/14/12 11:08 PM
 */
public interface IContentManagementService {
    CreateResult<Category> createMenuCategory(Category aCategory);

    FetchResult<List<Category>> listAllCategories();

    FetchResult<Category> fetchCategory(long aCategoryId);

    UpdateResult<Category> updateCategory(CategoryType aCategoryType);

    DeleteResult deleteCategory(long aCategoryId);
    
    FetchResult<SaleItem> fetchSaleItem(long aId);
    
    UpdateResult<SaleItem> updateSaleItem(SaleItemType aSaleItemType);
    
    DeleteResult deleteSaleItem(long aId);
    
    FetchResult<List<SaleItem>> listSaleItemsForCategory(long aCategoryId);
}
