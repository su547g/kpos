package com.kpos.service;

import com.kpos.domain.Category;
import com.kpos.domain.Printer;
import com.kpos.domain.SaleItem;
import com.kpos.domain.SaleItemOption;
import com.kpos.ws.app.CategoryType;
import com.kpos.ws.app.PrinterType;
import com.kpos.ws.app.SaleItemOptionType;
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

    CreateResult<SaleItem> createSaleItem(SaleItemType aSaleItemType);

    FetchResult<SaleItem> fetchSaleItem(long aId);
    
    UpdateResult<SaleItem> updateSaleItem(SaleItemType aSaleItemType);
    
    DeleteResult deleteSaleItem(long aId);
    
    FetchResult<List<SaleItem>> listSaleItemsForCategory(long aCategoryId);
    
    CreateResult<SaleItemOption> addSaleItemOption(SaleItemOptionType soapType);

    UpdateResult<SaleItemOption> updateSaleItemOption(SaleItemOptionType soapType);

    DeleteResult deleteSaleItemOption(long aId);
    
    CreateResult<Printer> createPrinter(PrinterType soapType);
}
