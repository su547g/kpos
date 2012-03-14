package com.kpos.dao;

import com.kpos.domain.Category;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:21 PM
 */
public class CategoryDao extends AbstractJpaDao<Category> implements ICategoryDao {
    @Override
    protected Class getEntityClass() {
        return Category.class;
    }
}
