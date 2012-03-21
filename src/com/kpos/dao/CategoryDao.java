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
        if(aCategory.getId() == null) {
            this.insert(aCategory);
        } else {
            Category temp = this.findById(aCategory.getId());
            if(temp == null) {
                aCategory.setId(null);
                this.insert(aCategory);
            }
        }
    }

    @Override
    public boolean deleteCategory(Category aCategory) {
        if(aCategory.getId() != null) {
            return this.delete(aCategory);
        }
        return false;
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
