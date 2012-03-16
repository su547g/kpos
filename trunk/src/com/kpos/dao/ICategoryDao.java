package com.kpos.dao;

import com.kpos.domain.Category;

import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:54 PM
 */
public interface ICategoryDao {
    void insertCategory(Category aCategory);

    boolean deleteCategory(Category aCategory);

    Category updateCategory(Category aCategory);

    List<Category> listCategories();

    Category findCategory(long aId);
}
