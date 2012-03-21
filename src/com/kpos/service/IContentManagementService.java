package com.kpos.service;

import com.kpos.domain.Category;
import com.kpos.ws.app.CategoryType;

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
}
