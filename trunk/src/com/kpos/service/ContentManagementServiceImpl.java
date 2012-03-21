package com.kpos.service;

import com.kpos.dao.ICategoryDao;
import com.kpos.dao.ISaleItemDao;
import com.kpos.domain.Category;
import com.kpos.domain.SaleItem;
import com.kpos.ws.app.CategoryType;
import com.kpos.ws.app.SaleItemType;
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

    @Autowired
    private ISaleItemDao saleItemDao;

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
        fetchResult.setSuccessful(category != null);
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
            deleteResult.setSuccessful(true);
        } else {
            deleteResult.setSuccessful(false);
            log.warn("can't find category with id " + aCategoryId);
        }
        return deleteResult;
    }

    @Override
    public FetchResult<SaleItem> fetchSaleItem(long aId) {
        SaleItem saleItem = saleItemDao.findSaleItem(aId);
        FetchResult<SaleItem> fetchResult = new FetchResult<SaleItem>();
        fetchResult.setTarget(saleItem);
        fetchResult.setSuccessful(saleItem != null);
        return fetchResult;
    }

    @Override
    public UpdateResult<SaleItem> updateSaleItem(SaleItemType aSaleItemType) {
        //TODO:
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public DeleteResult deleteSaleItem(long aId) {
        DeleteResult deleteResult = new DeleteResult();
        SaleItem saleItem = saleItemDao.findSaleItem(aId);
        if(saleItem != null) {
            saleItemDao.deleteSaleItem(saleItem);
            deleteResult.setSuccessful(true);
        } else {
            deleteResult.setSuccessful(false);
        }
        return deleteResult;
    }

    @Override
    public FetchResult<List<SaleItem>> listSaleItemsForCategory(long aCategoryId) {
        //TODO:
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}
