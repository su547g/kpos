package com.kpos.dao;

import com.kpos.domain.MenuCategory;
import org.springframework.stereotype.Repository;

import javax.persistence.NoResultException;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:21 PM
 */
@Repository
public class CategoryDao extends AbstractJpaDao<MenuCategory> implements ICategoryDao {
    @Override
    protected Class getEntityClass() {
        return MenuCategory.class;
    }

    @Override
    public MenuCategory findByName(String aName) {
        Query namedQuery = this.entityManager.createNamedQuery("findCategoryByName");
        namedQuery.setParameter("aName", aName);
        try {
            Object obj = namedQuery.getSingleResult();

            if(obj != null) {
                return (MenuCategory)obj;
            }
            return null;
        }catch (NoResultException exception) {
            return null;
        }
    }
    
    @Override
    public List<MenuCategory> listCategoriesByNameAsc() {
        Query namedQuery = this.entityManager.createNamedQuery("listCategoriesByNameAsc");
        return (List<MenuCategory>)namedQuery.getResultList();
    }

    @Override
    public List<MenuCategory> listCategoriesByNameAsc(int begin, int maxSize) {
        Query namedQuery = this.entityManager.createNamedQuery("listCategoriesByNameAsc");
        if(begin >= 0 && maxSize >= 0) {
            namedQuery.setFirstResult(begin);
            namedQuery.setMaxResults(maxSize);
        }
        return (List<MenuCategory>)namedQuery.getResultList();
    }

    public void insertCategory(MenuCategory aCategory) {
        if(aCategory.getId() == null) {
            this.insert(aCategory);
        } else {
            MenuCategory temp = this.findById(aCategory.getId());
            if(temp == null) {
                aCategory.setId(null);
                this.insert(aCategory);
            }
        }
    }

    @Override
    public boolean deleteCategory(MenuCategory aCategory) {
        if(aCategory.getId() != null) {
            return this.delete(aCategory);
        }
        return false;
    }

    @Override
    public MenuCategory updateCategory(MenuCategory aCategory) {
        return this.update(aCategory);
    }

    @Override
    public List<MenuCategory> listCategories() {
        return this.findAll();
    }

    @Override
    public MenuCategory findCategory(long aId) {
        return this.findById(aId);
    }

    @Override
    public List<MenuCategory> findCategoriesInGroup(long aGroupId) {
        Query namedQuery = this.entityManager.createNamedQuery("listCategoriesByGroup");
        namedQuery.setParameter("aGroupId", aGroupId);
        return (List<MenuCategory>)namedQuery.getResultList();
    }

    @Override
    public List<MenuCategory> findCategoriesInGroup(long aGroupId, int start, int maxSize) {
        Query namedQuery = this.entityManager.createNamedQuery("listCategoriesByGroup");
        namedQuery.setParameter("aGroupId", aGroupId);
        if(start >= 0) {
            namedQuery.setFirstResult(start);
        }
        if(maxSize >= 0) {
            namedQuery.setMaxResults(maxSize);
        }
        return (List<MenuCategory>)namedQuery.getResultList();
    }
}
