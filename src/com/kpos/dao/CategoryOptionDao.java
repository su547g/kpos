package com.kpos.dao;

import com.kpos.domain.CategoryOption;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/2/12
 */
public class CategoryOptionDao extends AbstractJpaDao<CategoryOption> implements ICategoryOptionDao {
    @Override
    protected Class getEntityClass() {
        return CategoryOption.class;
    }
}
