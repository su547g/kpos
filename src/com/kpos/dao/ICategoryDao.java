package com.kpos.dao;

import com.kpos.domain.Category;

import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:54 PM
 */
public interface ICategoryDao {
    Category findByName(String aName);

    List<Category> listCategoriesByNameAsc();

    void insertCategory(Category aCategory);

    boolean deleteCategory(Category aCategory);

    Category updateCategory(Category aCategory);

    List<Category> listCategories();

    Category findCategory(long aId);
}
