package com.kpos.service;

import com.kpos.dao.ICategoryDao;
import com.kpos.domain.Category;
import com.kpos.ws.app.CategoryType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:36 PM
 */
@Component
public class ContentManagementServiceImpl implements IContentManagementService {
    private final static Logger log = LoggerFactory.getLogger(ContentManagementServiceImpl.class);

    @Autowired
    private ICategoryDao categoryDao;

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public CreateResult<Category> createMenuCategory(Category aCategory) {
        try {
            CreateResult<Category> result = new CreateResult<Category>();
            categoryDao.insertCategory(aCategory);
            result.setCreated(aCategory);
            return result;
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            return new CreateResult<Category>(e);
        }
    }

    @Override
    public FetchResult<List<Category>> listAllCategories() {
        FetchResult<List<Category>> fetchResult = new FetchResult<List<Category>>();
        fetchResult.setTarget(categoryDao.listCategories());
        return fetchResult;
    }

    @Override
    public FetchResult<Category> fetchCategory(long aCategoryId) {
        FetchResult<Category> fetchResult = new FetchResult<Category>();
        Category category = categoryDao.findCategory(aCategoryId);
        fetchResult.setTarget(category);
        fetchResult.setSuccessful(true);
        return fetchResult;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public UpdateResult<Category> updateCategory(CategoryType aCategoryType) {
        UpdateResult<Category> updateResult = new UpdateResult<Category>();
        if(aCategoryType.getId() == null) {
            updateResult.setSuccessful(false);
        } else {
            Category aCategory = categoryDao.findCategory(aCategoryType.getId());
            aCategory.setAllowedHH(aCategoryType.getIsAllowedHappyHour());
            aCategory.setHhRate(aCategoryType.getHappyHourRate());
            aCategory.setName(aCategoryType.getName());
            aCategory.setNotes(aCategoryType.getNotes());

            Category category = categoryDao.updateCategory(aCategory);
            updateResult.setManagedObject(category);
            updateResult.setSuccessful(true);
        }
        return updateResult;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public DeleteResult deleteCategory(long aCategoryId) {
        DeleteResult deleteResult = new DeleteResult();
        Category category = categoryDao.findCategory(aCategoryId);
        if(category != null) {
            categoryDao.deleteCategory(category);
        } else {
            deleteResult.setSuccessful(false);
            log.warn("can't find category with id " + aCategoryId);
        }
        return deleteResult;
    }
}
