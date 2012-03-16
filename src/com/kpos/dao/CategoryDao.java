package com.kpos.dao;

import com.kpos.domain.Category;
import com.kpos.service.CreateResult;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:21 PM
 */
@Repository
public class CategoryDao extends AbstractJpaDao<Category> implements ICategoryDao {
    @Override
    protected Class getEntityClass() {
        return Category.class;
    }

    public void insertCategory(Category aCategory) {
        this.insert(aCategory);
    }

    @Override
    public boolean deleteCategory(Category aCategory) {
        return this.delete(aCategory);
    }

    @Override
    public Category updateCategory(Category aCategory) {
        return this.update(aCategory);
    }

    @Override
    public List<Category> listCategories() {
        return this.findAll();
    }

    @Override
    public Category findCategory(long aId) {
        return this.findById(aId);
    }
}
