package com.kpos.service;

import com.kpos.dao.ICategoryDao;
import com.kpos.dao.IPrinterDao;
import com.kpos.dao.ISaleItemDao;
import com.kpos.dao.ISaleItemOptionDao;
import com.kpos.domain.Category;
import com.kpos.domain.Printer;
import com.kpos.domain.SaleItem;
import com.kpos.domain.SaleItemOption;
import com.kpos.ws.app.CategoryType;
import com.kpos.ws.app.PrinterType;
import com.kpos.ws.app.SaleItemOptionType;
import com.kpos.ws.app.SaleItemType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

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

    @Autowired
    private ISaleItemOptionDao saleItemOptionDao;
    
    @Autowired
    private IPrinterDao printerDao;

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
            aCategory.setThumbPath(aCategoryType.getThumbPath());
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

    private void convertSoapItemToSaleItem(SaleItem saleItem, SaleItemType aSaleItemType) {
        saleItem.setAllowedHH(aSaleItemType.getIsAllowedHH());
        saleItem.setHh_price(aSaleItemType.getHhPrice());
        saleItem.setHhRate(aSaleItemType.getHhRate());
        saleItem.setOutPrice(aSaleItemType.getTakeoutPrice());
        saleItem.setPrice(aSaleItemType.getNormalPrice());
        saleItem.setName(aSaleItemType.getName());
        saleItem.setDescription(aSaleItemType.getDescription());
        saleItem.setSingleOptionOnly(aSaleItemType.getIsSingleOption());
        saleItem.setThumbPath(aSaleItemType.getThumbPath());
        
        List<SaleItemOptionType> optionTypes = aSaleItemType.getOptions();
        List<SaleItemOption> options = saleItem.getOptionList();
        options.clear();
        for(SaleItemOptionType optionType : optionTypes) {
            SaleItemOption option = new SaleItemOption();
            option.setName(optionType.getName());
            option.setOutPrice(optionType.getTakeoutPrice());
            option.setPrice(optionType.getPrice());
            option.setRequired(optionType.getIsRequired());
            option.setSaleItem(saleItem);
            options.add(option);
        }
        
        List<PrinterType> printerTypes = aSaleItemType.getPrinters();
        Set<Printer> printers = saleItem.getPrinters();
        printers.clear();
        for(PrinterType printerType : printerTypes) {
            Printer printer = new Printer();
            printer.setIpAddress(printerType.getIpAddr());
            printer.setName(printerType.getName());
            printers.add(printer);
        }
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public CreateResult<SaleItem> createSaleItem(SaleItemType aSaleItemType) {
        CreateResult<SaleItem> result = new CreateResult<SaleItem>();
        Category category = categoryDao.findCategory(aSaleItemType.getCatId());
        if(category != null) {
            SaleItem saleItem = new SaleItem();
            convertSoapItemToSaleItem(saleItem, aSaleItemType);
            saleItem.setCategory(category);
            saleItemDao.insertSaleItem(saleItem);
            result.setCreated(saleItem);
        } else {
            result.setSuccessful(false);
            result.setException(new Exception("Category ["+aSaleItemType.getCatId()+"] can't be found!"));
        }
        return result;
    }
    
    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public UpdateResult<SaleItem> updateSaleItem(SaleItemType aSaleItemType) {
        UpdateResult<SaleItem> updateResult = new UpdateResult<SaleItem>();
        SaleItem saleItem = saleItemDao.findSaleItem(aSaleItemType.getId());
        if(saleItem != null) {
            convertSoapItemToSaleItem(saleItem, aSaleItemType);
            Category newCategory = categoryDao.findCategory(aSaleItemType.getCatId());
            if(newCategory != null) {
                saleItem.setCategory(newCategory);
            } else {
                log.debug("Failed to find category with id [" + aSaleItemType.getCatId() + "]");
            }
            saleItemDao.updateSaleItem(saleItem);
            updateResult.setSuccessful(true);
            updateResult.setManagedObject(saleItem);
        } else {
            log.warn("Failed to find sale item with id [" + aSaleItemType.getId() + "]");
            updateResult.setSuccessful(false);
        }
        return updateResult;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
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
        FetchResult<List<SaleItem>> fetchResult = new FetchResult<List<SaleItem>>();
        Category category = categoryDao.findCategory(aCategoryId);
        List<SaleItem> saleItems;
        if(category == null) {
            log.warn("Can't find category id [" + aCategoryId + "]");
            saleItems = new ArrayList<SaleItem>();
            fetchResult.setSuccessful(false);
            fetchResult.setFailure(1, "Category doesn't exist!");
        } else {
            saleItems = category.getSaleItems();
            fetchResult.setTarget(saleItems);
            fetchResult.setSuccessful(true);
        }

        return fetchResult;
    }

    private void convertSoapItemOptionToDomain(SaleItemOptionType soapType, SaleItemOption option) {
        option.setName(soapType.getName());
        option.setOutPrice(soapType.getTakeoutPrice());
        option.setPrice(soapType.getPrice());
        option.setRequired(soapType.getIsRequired());
        option.setDescription(soapType.getDescription());
        option.setThumPath(soapType.getThumbPath());
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public CreateResult<SaleItemOption> addSaleItemOption(SaleItemOptionType soapType) {
        CreateResult<SaleItemOption> result = new CreateResult<SaleItemOption>();
        long itemId = soapType.getSaleItemId();
        SaleItem item = saleItemDao.findSaleItem(itemId);
        if(item != null) {
            SaleItemOption option = new SaleItemOption();
            option.setSaleItem(item);
            convertSoapItemOptionToDomain(soapType, option);
            saleItemOptionDao.insertSaleItemOption(option);
            result.setCreated(option);
            result.setSuccessful(true);
        } else {
            result.setSuccessful(false);
            result.setException(new Exception("Can't find item [" + itemId + "]"));
        }
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public UpdateResult<SaleItemOption> updateSaleItemOption(SaleItemOptionType soapType) {
        UpdateResult<SaleItemOption> result = new UpdateResult<SaleItemOption>();
        long saleItemId = soapType.getSaleItemId();
        SaleItem saleItem = saleItemDao.findSaleItem(saleItemId);
        if(saleItem != null) {
            SaleItemOption option = saleItemOptionDao.findSaleItemOption(soapType.getId());
            if(option != null) {
                convertSoapItemOptionToDomain(soapType, option);
                saleItemOptionDao.updateSaleItemOption(option);
                result.setSuccessful(true);
                result.setManagedObject(option);
            } else {
                result.setSuccessful(false);
                result.setException(new Exception("can't find sale item option [" + soapType.getId() + "]"));
            }
        } else {
            result.setSuccessful(false);
            result.setException(new Exception("can't find sale item [" + soapType.getSaleItemId() + "]"));
        }
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public DeleteResult deleteSaleItemOption(long aId) {
        DeleteResult result = new DeleteResult();
        boolean isSuccessful = saleItemOptionDao.deleteSaleItemOption(aId);
        result.setId(aId);
        result.setSuccessful(isSuccessful);
        return result;
    }
    
    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public CreateResult<Printer> createPrinter(PrinterType soapType) {
        CreateResult<Printer> result = new CreateResult<Printer>();
        Printer printer = new Printer();
        printer.setIpAddress(soapType.getIpAddr());
        printer.setName(soapType.getName());
        Printer newPrinter = printerDao.insert(printer);
        if(newPrinter.getId() != null) {
            result.setCreated(newPrinter);
            result.setSuccessful(true);
        } else {
            result.setCreated(null);
            result.setSuccessful(false);
        }
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public DeleteResult deletePrinter(long aId) {
        DeleteResult result = new DeleteResult();
        boolean isSuccessful = printerDao.delete(aId);
        result.setSuccessful(isSuccessful);
        result.setId(aId);
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public UpdateResult<Printer> updatePrinter(PrinterType soapType) {
        UpdateResult<Printer> result = new UpdateResult<Printer>();
        Printer printer = printerDao.findById(soapType.getId());
        if(printer != null) {
            printer.setIpAddress(soapType.getIpAddr());
            printer.setName(soapType.getName());
        } else {
            result.setSuccessful(false);
            result.setManagedObject(null);
            result.setException(new Exception("Can't find printer ["+soapType.getId()+"]"));
        }
        return result;
    }

    @Override
    public FetchResult<List<Printer>> listPrinters() {
        FetchResult<List<Printer>> result = new FetchResult<List<Printer>>();
        List<Printer> printers = printerDao.findAll();
        result.setSuccessful(true);
        result.setTarget(printers);
        return result;
    }
}
