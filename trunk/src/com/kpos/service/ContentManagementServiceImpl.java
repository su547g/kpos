package com.kpos.service;

import com.kpos.dao.*;
import com.kpos.domain.*;
import com.kpos.ws.app.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
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
    private ICategoryOptionDao categoryOptionDao;

    @Autowired
    private ISaleItemDao saleItemDao;

    @Autowired
    private ISaleItemOptionDao saleItemOptionDao;
    
    @Autowired
    private IPrinterDao printerDao;
    
    @Autowired
    private ITableDao tableDao;

    @Autowired
    private IGlobalOptionDao globalOptionDao;
    
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public CreateResult<MenuCategory> createMenuCategory(MenuCategory aCategory, List<Long> printerIds) {
        try {
            CreateResult<MenuCategory> result = new CreateResult<MenuCategory>();
            aCategory.setCreatedOn(new Date());
            MenuCategory object = categoryDao.findByName(aCategory.getName());
            if(object != null) {
                result.setCreated(null);
                result.setSuccessful(false);
                result.setException(new Exception("MenuCategory name already exists!"));
            } else {
                categoryDao.insertCategory(aCategory);
                for(Long id : printerIds) {
                    Printer printer = printerDao.findById(id);
                    if(printer != null) {
                        aCategory.getPrinters().add(printer);
                    }
                }
                result.setCreated(aCategory);
            }
            return result;
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            return new CreateResult<MenuCategory>(e);
        }
    }
    /*
    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public boolean addPrintersToCategory(MenuCategory category,) {
        for(Long id : printerIds) {
            Printer printer = printerDao.findById(id);
            if(printer != null) {
                category.getPrinters().add(printer);
            }
        }
        return true;
    }  */
    
    @Override
    public FetchResult<List<MenuCategory>> listAllCategories() {
        FetchResult<List<MenuCategory>> fetchResult = new FetchResult<List<MenuCategory>>();
        fetchResult.setTarget(categoryDao.listCategoriesByNameAsc());
        return fetchResult;
    }

    @Override
    public FetchResult<MenuCategory> fetchCategory(long aCategoryId) {
        FetchResult<MenuCategory> fetchResult = new FetchResult<MenuCategory>();
        MenuCategory category = categoryDao.findCategory(aCategoryId);
        fetchResult.setTarget(category);
        fetchResult.setSuccessful(category != null);
        return fetchResult;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public UpdateResult<MenuCategory> updateCategory(CategoryType aCategoryType) {
        UpdateResult<MenuCategory> updateResult = new UpdateResult<MenuCategory>();
        if(aCategoryType.getId() == null) {
            updateResult.setSuccessful(false);
        } else {
            MenuCategory object = categoryDao.findByName(aCategoryType.getName());
            if(object != null) {
                updateResult.setSuccessful(false);
                updateResult.setException(new Exception("MenuCategory name already exists!"));
            } else {
                MenuCategory aCategory = categoryDao.findCategory(aCategoryType.getId());
                aCategory.setAllowedHH(aCategoryType.getIsAllowedHappyHour());
                aCategory.setHhRate(aCategoryType.getHappyHourRate());
                aCategory.setName(aCategoryType.getName());
                aCategory.setNotes(aCategoryType.getNotes());
                aCategory.setThumbPath(aCategoryType.getThumbPath());
                aCategory.setLastUpdated(new Date());
                MenuCategory category = categoryDao.updateCategory(aCategory);
                updateResult.setManagedObject(category);
                updateResult.setSuccessful(true);
            }
        }
        return updateResult;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public DeleteResult deleteCategory(long aCategoryId) {
        DeleteResult deleteResult = new DeleteResult();
        MenuCategory category = categoryDao.findCategory(aCategoryId);
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
        saleItem.setSeasonPrice(aSaleItemType.getSeasonPrice());
        saleItem.setOutPrice(aSaleItemType.getTakeoutPrice());
        saleItem.setOutPriceLarge(aSaleItemType.getOutPriceLarge());
        saleItem.setOutPriceMed(aSaleItemType.getOutPriceMedium());
        saleItem.setOutPriceSmall(aSaleItemType.getOutPriceSmall());
        saleItem.setPrice(aSaleItemType.getNormalPrice());
        saleItem.setPriceLarge(aSaleItemType.getPriceLarge());
        saleItem.setPriceMedium(aSaleItemType.getPriceLarge());
        saleItem.setPriceSmall(aSaleItemType.getPriceSmall());
        saleItem.setName(aSaleItemType.getName());
        saleItem.setDescription(aSaleItemType.getDescription());
        saleItem.setSingleOptionOnly(aSaleItemType.getIsSingleOption());
        saleItem.setTaxable(aSaleItemType.isIsTaxable());
        saleItem.setThumbPath(aSaleItemType.getThumbPath());
        saleItem.setLastUpdated(new Date());
        
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
        MenuCategory category = categoryDao.findCategory(aSaleItemType.getCatId());
        if(category != null) {
            SaleItem saleItem = new SaleItem();
            convertSoapItemToSaleItem(saleItem, aSaleItemType);
            saleItem.setMenuCategory(category);
            saleItem.setCreatedOn(new Date());
            saleItemDao.insertSaleItem(saleItem);
            result.setCreated(saleItem);
        } else {
            result.setSuccessful(false);
            result.setException(new Exception("MenuCategory ["+aSaleItemType.getCatId()+"] can't be found!"));
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
            MenuCategory newCategory = categoryDao.findCategory(aSaleItemType.getCatId());
            if(newCategory != null) {
                saleItem.setMenuCategory(newCategory);
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
        MenuCategory category = categoryDao.findCategory(aCategoryId);
        List<SaleItem> saleItems;
        if(category == null) {
            log.warn("Can't find category id [" + aCategoryId + "]");
            saleItems = new ArrayList<SaleItem>();
            fetchResult.setSuccessful(false);
            fetchResult.setFailure(1, "MenuCategory doesn't exist!");
        } else {
            saleItems = saleItemDao.listSaleItemsForCategory(aCategoryId);
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
        option.setLastUpdated(new Date());
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
            option.setCreatedOn(new Date());
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
        Printer obj = printerDao.findByName(soapType.getName());
        if(obj != null) {
            result.setCreated(null);
            result.setSuccessful(false);
            result.setException(new Exception("Printer name already exists!"));
        } else {
            Printer printer = new Printer();
            printer.setIpAddress(soapType.getIpAddr());
            printer.setName(soapType.getName());
            printer.setCreatedOn(new Date());
            printer.setLastUpdated(new Date());
            Printer newPrinter = printerDao.insert(printer);
            if(newPrinter.getId() != null) {
                result.setCreated(newPrinter);
                result.setSuccessful(true);
            } else {
                result.setCreated(null);
                result.setSuccessful(false);
            }
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
            Printer obj = printerDao.findByName(soapType.getName());
            if(obj != null) {
                result.setSuccessful(false);
                result.setException(new Exception("Printer name already exists!"));
                return result;
            }
            printer.setIpAddress(soapType.getIpAddr());
            printer.setName(soapType.getName());
            printer.setLastUpdated(new Date());
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
        List<Printer> printers = printerDao.listByNameAsc();
        result.setSuccessful(true);
        result.setTarget(printers);
        return result;
    }
    
    @Override
    public FetchResult<List<RestaurantTable>> listTables() {
        FetchResult<List<RestaurantTable>> result = new FetchResult<List<RestaurantTable>>();
        List<RestaurantTable> tables = tableDao.listTablesByNameAsc();
        result.setSuccessful(true);
        result.setTarget(tables);
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public CreateResult<RestaurantTable> createRestaurantTable(TableType soapType) {
        CreateResult<RestaurantTable> result = new CreateResult<RestaurantTable>();
        RestaurantTable object = tableDao.findTableByName(soapType.getName());
        if(object == null) {
            RestaurantTable table = new RestaurantTable();
            table.setCoordinate_x(soapType.getX());
            table.setCoordinate_y(soapType.getY());
            table.setName(soapType.getName());
            table.setCreatedOn(new Date());
            table.setLastUpdated(new Date());
            tableDao.insert(table);
            result.setCreated(table);
            result.setSuccessful(true);
        } else {
            result.setException(new Exception("Table with name [" + soapType.getName()+"] already exits!"));
            result.setSuccessful(false);
        }

        return  result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public UpdateResult<RestaurantTable> updateRestaurantTable(TableType soapType) {
        UpdateResult<RestaurantTable> result = new UpdateResult<RestaurantTable>();
        RestaurantTable table = tableDao.findById(soapType.getId());
        if(table != null) {
            table.setCoordinate_x(soapType.getX());
            table.setCoordinate_y(soapType.getY());
            table.setName(soapType.getName());
            table.setLastUpdated(new Date());
            result.setManagedObject(table);
            result.setSuccessful(true);
        } else {
            result.setException(new Exception("Table with id [" + soapType.getId()+"] doesn't exit!"));
            result.setSuccessful(false);
        }

        return  result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public DeleteResult deleteTable(long aId) {
        DeleteResult result = new DeleteResult();
        if(null == tableDao.findById(aId)) {
            result.setSuccessful(false);
            result.setException(new Exception("Table ["+aId+"] doesn't exist!"));
        } else {
            tableDao.delete(aId);
            result.setSuccessful(true);
        }
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public DeleteResult deleteCategoryOption(long aId) {
        DeleteResult result = new DeleteResult();
        if(null == categoryOptionDao.findById(aId)) {
            result.setSuccessful(false);
            result.setException(new Exception("Category Option [" + aId + "] doesn't exist!"));
        } else {
            categoryOptionDao.delete(aId);
            result.setSuccessful(true);
        }
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public CreateResult<CategoryOption> createCategoryOption(CategoryOptionType soapType) {
        CreateResult<CategoryOption> result = new CreateResult<CategoryOption>();
        MenuCategory category = categoryDao.findCategory(soapType.getCategoryId());
        if(null != category) {
            CategoryOption option = new CategoryOption();
            option.setMenuCategory(category);
            option.setDescription(soapType.getDescription());
            option.setName(soapType.getName());
            option.setPrice(soapType.getPrice());
            option.setCreatedOn(new Date());
            option.setLastUpdated(new Date());
            categoryOptionDao.insert(option);
            result.setSuccessful(true);
            result.setCreated(option);
        } else {
            result.setSuccessful(false);
            result.setException(new Exception("Category [" + soapType.getCategoryId()+"] doesn't exist!"));
        }
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public UpdateResult<CategoryOption> updateCategoryOption(CategoryOptionType soapType) {
        UpdateResult<CategoryOption> result = new UpdateResult<CategoryOption>();
        MenuCategory category = categoryDao.findCategory(soapType.getCategoryId());
        if(null != category) {
            CategoryOption option = categoryOptionDao.findById(soapType.getId());
            if(option != null) {
                option.setMenuCategory(category);
                option.setDescription(soapType.getDescription());
                option.setName(soapType.getName());
                option.setPrice(soapType.getPrice());
                option.setLastUpdated(new Date());
            }
        } else {
            result.setSuccessful(false);
            result.setException(new Exception("Category [" + soapType.getCategoryId()+"] doesn't exist!"));
        }
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public CreateResult<GlobalOption> createGlobalOption(GlobalOptionType soapType) {
        CreateResult<GlobalOption> result = new CreateResult<GlobalOption>();
        if(soapType.getName() == null || soapType.getName().isEmpty()) {
            result.setSuccessful(false);
            result.setException(new Exception("Option name can't be empty!"));
        } else {
            GlobalOption option = globalOptionDao.findByName(soapType.getName());
            if(option != null) {
                result.setSuccessful(false);
                result.setException(new Exception("Option with name [" + soapType.getName()+"] already exists!"));
            } else {
                option = new GlobalOption();
                option.setDineInPrice(soapType.getPrice());
                option.setName(soapType.getName());
                option.setTakeOutPrice(soapType.getOutPrice());
                option.setTaxable(false);
                option.setCreatedOn(new Date());
                option.setLastUpdated(new Date());
                globalOptionDao.insert(option);
                result.setSuccessful(true);
                result.setCreated(option);
            }
        }
        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public UpdateResult<GlobalOption> updateGlobalOption(GlobalOptionType soapType) {
        UpdateResult<GlobalOption> result = new UpdateResult<GlobalOption>();
        if(soapType.getId() != null) {
            GlobalOption option = globalOptionDao.findById(soapType.getId());
            if(option != null) {
                option.setDineInPrice(soapType.getPrice());
                option.setName(soapType.getName());
                option.setTakeOutPrice(soapType.getOutPrice());
                option.setTaxable(false);
                option.setLastUpdated(new Date());
                result.setSuccessful(true);
                result.setManagedObject(option);
            } else {
                result.setSuccessful(false);
                result.setException(new Exception("Global Option [" + soapType.getId() + "] doesn't exist!"));
            }
        } else {
            result.setSuccessful(false);
            result.setException(new Exception("ID can't be null!"));
        }

        return result;
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public DeleteResult deleteGlobalOption(long aId) {
        DeleteResult result = new DeleteResult();
        if(null != globalOptionDao.findById(aId)) {
            globalOptionDao.delete(aId);
            result.setSuccessful(true);
            result.setId(aId);
        } else {
            result.setSuccessful(false);
            result.setException(new Exception("Global option [" + aId + "] doesn't exist!"));
        }
        return result;
    }

    @Override
    public FetchResult<List<GlobalOption>> listGlobalOptions() {
        FetchResult<List<GlobalOption>> result = new FetchResult<List<GlobalOption>>();
        List<GlobalOption> options = globalOptionDao.findAll();
        result.setTarget(options);
        result.setSuccessful(true);
        return result;
    }
}
