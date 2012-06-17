package com.kpos.ws.impl;

import com.kpos.dao.IFunctionModuleDao;
import com.kpos.dao.IOrderDao;
import com.kpos.dao.IStaffMemberDao;
import com.kpos.dao.IUserDao;
import com.kpos.domain.*;
import com.kpos.domain.Order;
import com.kpos.domain.OrderItemOption;
import com.kpos.service.*;
import com.kpos.ws.app.*;
import com.kpos.ws.app.OrderItem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

import javax.jws.WebParam;
import javax.xml.ws.Holder;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/11/12 4:55 PM
 */
@Configurable
public class KPosPortImpl implements KPosPortType {
    private final static Logger log = LoggerFactory.getLogger(KPosServlet.class);

    public final static String NS = "http://ws.kpos.com/app";

    @Autowired
    private IContentManagementService contentManagementService;

    @Autowired
    private IStaffMemberDao staffMemberDao;
    
    @Autowired
    private IUserDao userDao;
    
    @Autowired
    private IFunctionModuleDao functionModuleDao;
    
    @Autowired
    private IOrderDao orderDao;
    
    /**
     * returns the soap ResultType for a BaseResult
     *
     * @param aBaseResult a base result
     * @return a soap result
     */
    protected ResultType getSoapResult (BaseResult aBaseResult) {
        ResultType resultType = new ResultType();

        //unconditional id sets
        if (aBaseResult instanceof UpdateResult) {
            UpdateResult castResult = (UpdateResult) aBaseResult;
            if (castResult.getManagedObject() != null) {
                resultType.setId(castResult.getManagedObject().getId());
            }
        }
        if (aBaseResult instanceof DeleteResult) {
            DeleteResult castResult = (DeleteResult) aBaseResult;
            if (castResult.getId() != null) {
                resultType.setId(castResult.getId());
            }
        }

        //successfull
        if (aBaseResult.isSuccessful()) {
            resultType.setSuccessful(true);
            if (aBaseResult instanceof CreateResult) {
                CreateResult castResult = (CreateResult) aBaseResult;
                if (castResult.getCreated() != null) {
                    resultType.setId(castResult.getCreated().getId());
                }
            }
        }
        //unsuccessfull
        else {
            resultType.setSuccessful(false);
            //noinspection ThrowableResultOfMethodCallIgnored
            if (aBaseResult.getException() != null) {
                resultType.setFailureReasonCode(FailureCodes.Generic.EXCEPTION);
                //noinspection ThrowableResultOfMethodCallIgnored
                resultType.setFailureReason(aBaseResult.getException().getLocalizedMessage());
            }
            else {
                resultType.setFailureReasonCode(aBaseResult.getFailureReasonCode());
                resultType.setFailureReason(aBaseResult.getFailureReason());
            }
        }

        if (log.isDebugEnabled()) {
            if (!resultType.isSuccessful()) {
                log.debug("returning failed soapResult, failureReason [" + resultType.getFailureReason() + "], failureCode [" + resultType.getFailureReasonCode() + "]");
            }

        }
        return resultType;
    }

    protected void setSoapFaultHolder (Holder<ResultType> holder, Throwable t) {
      holder.value = getSoapFaultResult(t);
    }

    protected ResultType getSoapFaultResult (Throwable t) {
      ResultType result = new ResultType();
      result.setFailureReason(t.getMessage());
      result.setSuccessful(false);
      result.setException(t.getClass().toString());
      return result;
    }
   
    private SaleItemType convertSaleItemToSoap(SaleItem item, boolean fetchOptions) {
        SaleItemType itemType = new SaleItemType();
        itemType.setHhPrice(item.getHh_price());
        itemType.setHhRate(item.getHhRate());
        itemType.setId(item.getId());
        itemType.setIsAllowedHH(item.isAllowedHH());
        itemType.setIsSingleOption(item.isSingleOptionOnly());
        itemType.setIsTaxable(item.isTaxable());
        itemType.setName(item.getName());
        itemType.setNormalPrice(item.getPrice());
        itemType.setPriceLarge(item.getPriceLarge());
        itemType.setPriceMed(item.getPriceMedium());
        itemType.setPriceSmall(item.getPriceSmall());
        itemType.setTakeoutPrice(item.getOutPrice());
        itemType.setOutPriceLarge(item.getOutPriceLarge());
        itemType.setOutPriceMedium(item.getOutPriceMed());
        itemType.setOutPriceSmall(item.getOutPriceSmall());
        itemType.setSeasonPrice(item.getSeasonPrice());
        itemType.setThumbPath(item.getThumbPath());
        itemType.setDescription(item.getDescription());
        //Load item options
        if(fetchOptions) {
            List<SaleItemOptionType> optionTypes = itemType.getOptions();
            List<SaleItemOption> options = item.getOptionList();
            for(SaleItemOption option : options) {
                SaleItemOptionType optionType = new SaleItemOptionType();
                optionType.setId(option.getId());
                optionType.setName(option.getName());
                optionType.setPrice(option.getPrice());
                optionType.setSaleItemId(item.getId());
                optionType.setTakeoutPrice(option.getOutPrice());
                optionType.setIsRequired(option.isRequired());
                optionType.setDescription(option.getDescription());
                optionType.setThumbPath(option.getThumbPath());
                optionType.setTaxable(option.getTaxable()==null?true:option.getTaxable());
                optionTypes.add(optionType);
            }
        }
        //Load printers
        List<Long> printerIds = itemType.getPrinterIds();
        Set<Printer> printers = item.getPrinters();
        for(Printer printer : printers) {
            printerIds.add(printer.getId());
        }
        return itemType;
    }

    @Override
    public DeleteCategoryResponseType deleteCategory(
            @WebParam(partName = "parameters", name = "DeleteCategoryType", targetNamespace = NS) DeleteCategoryType parameters) {
        DeleteCategoryResponseType responseType = new DeleteCategoryResponseType();
        try {
            long categoryId = parameters.getCategoryId();
            DeleteResult result = contentManagementService.deleteCategory(categoryId);
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            log.error("Error in DeleteCategory: ", e);
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public DeleteSaleItemResponseType deleteSaleItem(
            @WebParam(partName = "parameters", name = "DeleteSaleItemType", targetNamespace = NS) DeleteSaleItemType parameters) {
        DeleteSaleItemResponseType responseType = new DeleteSaleItemResponseType();
        try {
            DeleteResult result = contentManagementService.deleteSaleItem(parameters.getItemId());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public ListCategoryResponseType listCategory(
            @WebParam(partName = "parameters", name = "ListCategoryType", targetNamespace = NS) ListCategoryType parameters) {
        ListCategoryResponseType responseType = new ListCategoryResponseType();
        try {
            FetchResult<List<MenuCategory>> fetchResult = contentManagementService.listAllCategories();
            List<MenuCategory> categoryList = fetchResult.getTarget();
            List<CategoryType> categoryTypes = responseType.getCategories();
            for(MenuCategory category : categoryList) {
                CategoryType type = new CategoryType();
                type.setHappyHourRate(category.getHhRate());
                type.setId(category.getId());
                type.setIsAllowedHappyHour(category.isAllowedHH());
                type.setName(category.getName());
                type.setNotes(category.getNotes());
                type.setThumbPath(category.getThumbPath());
                categoryTypes.add(type);
                for(Printer printer : category.getPrinters()) {
                    type.getPrinterIds().add(printer.getId());
                }
            }
            responseType.setTotal(categoryTypes.size());
            responseType.setResult(getSoapResult(fetchResult));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public CreateCategoryResponseType createCategory(
            @WebParam(partName = "parameters", name = "CreateCategoryType", targetNamespace = NS) CreateCategoryType soapCategory) {
        CreateCategoryResponseType responseType = new CreateCategoryResponseType();
        try {
            MenuCategory category = new MenuCategory();
            CategoryType soapType = soapCategory.getCategory();
            category.setName(soapType.getName());
            category.setNotes(soapType.getNotes());
            category.setThumbPath(soapType.getThumbPath());
            if(soapType.getIsAllowedHappyHour() != null) {
                category.setAllowedHH(soapType.getIsAllowedHappyHour());
            }
            if(soapType.getHappyHourRate() != null) {
                category.setHhRate(soapType.getHappyHourRate());
            }
            category.setCreatedOn(new Date());
            category.setLastUpdated(new Date());
            CreateResult<MenuCategory> result = contentManagementService.createMenuCategory(category, soapType.getPrinterIds());
            if(result.isSuccessful() && result.getCreated() != null) {
                responseType.setCategoryId(result.getCreated().getId());
            }
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public UpdateCategoryResponseType updateCategory(
            @WebParam(partName = "parameters", name = "UpdateCategoryType", targetNamespace = NS) UpdateCategoryType parameters) {
        UpdateCategoryResponseType responseType = new UpdateCategoryResponseType();
        try {
            UpdateResult<MenuCategory> result = contentManagementService.updateCategory(parameters.getCategory());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public ListSaleItemsForCategoryResponseType listSaleItemsForCategory(
            @WebParam(partName = "parameters", name = "ListSaleItemsForCategoryType", targetNamespace = NS) ListSaleItemsForCategoryType parameters) {
        ListSaleItemsForCategoryResponseType responseType = new ListSaleItemsForCategoryResponseType();
        try {
            long categoryId = parameters.getCategoryId();
            FetchResult<List<SaleItem>> fetchResult = contentManagementService.listSaleItemsForCategory(categoryId);
            if(fetchResult.isSuccessful()) {
                List<SaleItem> saleItems = fetchResult.getTarget();
                responseType.setTotal(saleItems.size());
                List<SaleItemType> saleItemTypes = responseType.getSaleItems();
                for(SaleItem item : saleItems) {
                    SaleItemType itemType = convertSaleItemToSoap(item, false);
                    itemType.setCatId(categoryId);
                    saleItemTypes.add(itemType);
                }
            } else {
                responseType.setTotal(0);
            }
            responseType.setCatId(categoryId);
            responseType.setResult(getSoapResult(fetchResult));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public UpdateSaleItemResponseType updateSaleItem(
            @WebParam(partName = "parameters", name = "UpdateSaleItemType", targetNamespace = NS) UpdateSaleItemType parameters) {
        UpdateSaleItemResponseType responseType = new UpdateSaleItemResponseType();
        try {
            UpdateResult<SaleItem> result = contentManagementService.updateSaleItem(parameters.getSaleItem());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public FetchSaleItemResponseType fetchSaleItem(
            @WebParam(partName = "parameters", name = "FetchSaleItemType", targetNamespace = NS) FetchSaleItemType parameters) {
        FetchSaleItemResponseType responseType = new FetchSaleItemResponseType();
        try {
            FetchResult<SaleItem> fetchResult = contentManagementService.fetchSaleItem(parameters.getItemId());
            SaleItem item = fetchResult.getTarget();
            if(item != null) {
                SaleItemType soapType = convertSaleItemToSoap(item, parameters.getFetchOptions());
                soapType.setCatId(item.getMenuCategory().getId());

                responseType.setSaleItem(soapType);
            }
            responseType.setResult(getSoapResult(fetchResult));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public CreateSaleItemResponseType createSaleItem(
            @WebParam(partName = "parameters", name = "CreateSaleItemType", targetNamespace = NS) CreateSaleItemType parameters) {
        CreateSaleItemResponseType responseType = new CreateSaleItemResponseType();
        try {
            SaleItemType soapType = parameters.getSaleItem();
            CreateResult<SaleItem> result = contentManagementService.createSaleItem(soapType);
            if(result.isSuccessful() && result.getCreated() != null) {
                responseType.setSaleItemId(result.getCreated().getId());
            }
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public CreateSaleItemOptionResponseType createSaleItemOption(
            @WebParam(partName = "parameters", name = "CreateSaleItemOptionType", targetNamespace = NS) CreateSaleItemOptionType parameters) {
        CreateSaleItemOptionResponseType responseType = new CreateSaleItemOptionResponseType();
        try {
            CreateResult<SaleItemOption> result = contentManagementService.addSaleItemOption(parameters.getItemOption());
            if(result.isSuccessful() && result.getCreated() != null) {
                responseType.setItemOptionId(result.getCreated().getId());
            } else {
                responseType.setItemOptionId(-1L);
            }
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public UpdateSaleItemOptionResponseType updateSaleItemOption(
            @WebParam(partName = "parameters", name = "UpdateSaleItemOptionType", targetNamespace = NS) UpdateSaleItemOptionType parameters) {
        UpdateSaleItemOptionResponseType responseType = new UpdateSaleItemOptionResponseType();
        try {
            UpdateResult<SaleItemOption> result = contentManagementService.updateSaleItemOption(parameters.getItemOption());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            ResultType result = this.getSoapFaultResult(e);
            responseType.setResult(result);
        }
        return responseType;
    }

    @Override
    public FetchSaleItemOptionResponseType fetchSaleItemOption(
            @WebParam(partName = "parameters", name = "FetchSaleItemOptionType", targetNamespace = NS) FetchSaleItemOptionType parameters) {
        FetchSaleItemOptionResponseType responseType = new FetchSaleItemOptionResponseType();
        try {
            FetchResult<SaleItemOption> result = contentManagementService.fetchSaleItemOption(parameters.getId());
            SaleItemOption option = result.getTarget();
            if(result.isSuccessful()) {
                SaleItemOptionType soapType = new SaleItemOptionType();
                soapType.setDescription(option.getDescription());
                soapType.setId(option.getId());
                soapType.setIsRequired(option.isRequired());
                soapType.setName(option.getName());
                soapType.setPrice(option.getPrice());
                soapType.setTakeoutPrice(option .getOutPrice());
                soapType.setSaleItemId(option.getSaleItem().getId());
                soapType.setTaxable(option.getTaxable());
                responseType.setItemOption(soapType);
            }
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            ResultType result = this.getSoapFaultResult(e);
            responseType.setResult(result);
        }
        return responseType;
    }

    @Override
    public DeleteSaleItemOptionResponseType deleteSaleItemOption(
            @WebParam(partName = "parameters", name = "DeleteSaleItemOptionType", targetNamespace = NS) DeleteSaleItemOptionType parameters) {
        DeleteSaleItemOptionResponseType responseType = new DeleteSaleItemOptionResponseType();
        try {
            DeleteResult result = contentManagementService.deleteSaleItemOption(parameters.getId());
            responseType.setResult(getSoapResult(result));
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public ListSaleItemOptionsResponseType listSaleItemOptions(
            @WebParam(partName = "parameters", name = "ListSaleItemOptionsType", targetNamespace = NS) ListSaleItemOptionsType parameters) {
        ListSaleItemOptionsResponseType responseType = new ListSaleItemOptionsResponseType();
        try {
            FetchResult<SaleItem> fetchResult = contentManagementService.fetchSaleItem(parameters.getItemId());
            if(fetchResult.isSuccessful()) {
                SaleItem item = fetchResult.getTarget();
                List<SaleItemOption> options = item.getOptionList();
                for(SaleItemOption option : options) {
                    SaleItemOptionType soapType = new SaleItemOptionType();
                    soapType.setId(option.getId());
                    soapType.setIsRequired(option.isRequired());
                    soapType.setName(option.getName());
                    soapType.setPrice(option.getPrice());
                    soapType.setTakeoutPrice(option.getOutPrice());
                    soapType.setTaxable(option.getTaxable());
                    soapType.setThumbPath(option.getThumbPath());
                    soapType.setDescription(option.getDescription());
                    responseType.getOptions().add(soapType);
                }
                responseType.setCount(options.size());
            }
            responseType.setItemId(parameters.getItemId());
            responseType.setResult(getSoapResult(fetchResult));
        } catch(Exception e) {
            e.printStackTrace();
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public CreatePrinterResponseType createPrinter(
            @WebParam(partName = "parameters", name = "CreatePrinterType", targetNamespace = NS) CreatePrinterType parameters) {
        CreatePrinterResponseType responseType = new CreatePrinterResponseType();
        try {
            CreateResult<Printer> result = contentManagementService.createPrinter(parameters.getPrinter());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public ListPrintersResponseType listPrinters(
            @WebParam(partName = "parameters", name = "ListPrintersType", targetNamespace = NS) ListPrintersType parameters) {
        ListPrintersResponseType responseType = new ListPrintersResponseType();
        try {
            List<PrinterType> soapTypes = responseType.getPrinters();
            FetchResult<List<Printer>> result = contentManagementService.listPrinters();
            List<Printer> printers = result.getTarget();
            for(Printer printer : printers) {
                PrinterType soapType = new PrinterType();
                soapType.setId(printer.getId());
                soapType.setIpAddr(printer.getIpAddress());
                soapType.setName(printer.getName());
                soapTypes.add(soapType);
            }
            responseType.setResult(getSoapResult(result));
        }catch (Exception e){
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public DeletePrinterResponseType deletePrinter(
            @WebParam(partName = "parameters", name = "DeletePrinterType", targetNamespace = NS) DeletePrinterType parameters) {
        DeletePrinterResponseType responseType = new DeletePrinterResponseType();
        try {
            DeleteResult result = contentManagementService.deletePrinter(parameters.getId());
            responseType.setId(parameters.getId());
            responseType.setResult(getSoapResult(result));
        }catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public UpdatePrinterResponseType updatePrinter(
            @WebParam(partName = "parameters", name = "UpdatePrinterType", targetNamespace = NS) UpdatePrinterType parameters) {
        UpdatePrinterResponseType responseType = new UpdatePrinterResponseType();
        try{
            UpdateResult<Printer> result = contentManagementService.updatePrinter(parameters.getPrinter());
            responseType.setResult(getSoapResult(result));
        }catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public ListTablesResponseType listTables(
            @WebParam(partName = "parameters", name = "ListTablesType", targetNamespace = NS) ListTablesType parameters) {
        ListTablesResponseType responseType = new ListTablesResponseType();
        try {
            FetchResult<List<RestaurantTable>> result = contentManagementService.listTables(parameters.getAreaId());
            List<RestaurantTable> tables = result.getTarget();
            for(RestaurantTable table : tables) {
                TableType soapTable = new TableType();
                soapTable.setId(table.getId());
                soapTable.setName(table.getName());
                soapTable.setX(table.getCoordinate_x());
                soapTable.setY(table.getCoordinate_y());
                responseType.getTable().add(soapTable);
            }
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public SaveTableResponseType saveTable(
            @WebParam(partName = "parameters", name = "SaveTableType", targetNamespace = NS) SaveTableType parameters) {
        SaveTableResponseType responseType = new SaveTableResponseType();
        TableType tableType = parameters.getTable();
        try {
            if(tableType.getId() == null || tableType.getId() == 0) {
                CreateResult<RestaurantTable> result = contentManagementService.createRestaurantTable(tableType);
                if(result.isSuccessful()) {
                    responseType.setTableId(result.getCreated().getId());
                }
                responseType.setResult(getSoapResult(result));
            } else {
                UpdateResult<RestaurantTable> result = contentManagementService.updateRestaurantTable(tableType);
                if(result.isSuccessful()) {
                    responseType.setTableId(result.getManagedObject().getId());
                }
                responseType.setResult(getSoapResult(result));
            }
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public DeleteTableResponseType deleteTable(
            @WebParam(partName = "parameters", name = "DeleteTableType", targetNamespace = NS) DeleteTableType parameters) {
        DeleteTableResponseType responseType = new DeleteTableResponseType();
        try {
            DeleteResult result = contentManagementService.deleteTable(parameters.getId());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }

        return responseType;
    }

    @Override
    public FetchTableResponseType fetchTable(
            @WebParam(partName = "parameters", name = "FetchTableType", targetNamespace = NS) FetchTableType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public DeleteCategoryOptionResponseType deleteCategoryOption(
            @WebParam(partName = "parameters", name = "DeleteCategoryOptionType", targetNamespace = NS) DeleteCategoryOptionType parameters) {
        DeleteCategoryOptionResponseType responseType = new DeleteCategoryOptionResponseType();
        try {
            DeleteResult result = contentManagementService.deleteCategoryOption(parameters.getId());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public CreateCategoryOptionResponseType createCategoryOption(
            @WebParam(partName = "parameters", name = "CreateCategoryOptionType", targetNamespace = NS) CreateCategoryOptionType parameters) {
        CreateCategoryOptionResponseType responseType = new CreateCategoryOptionResponseType();
        try {
            CreateResult<CategoryOption> result = contentManagementService.createCategoryOption(parameters.getCategoryOption());
            if(result.isSuccessful() && result.getCreated() != null) {
                responseType.setOptionId(result.getCreated().getId());
            }
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public UpdateCategoryOptionResponseType updateCategoryOption(
            @WebParam(partName = "parameters", name = "UpdateCategoryOptionType", targetNamespace = NS) UpdateCategoryOptionType parameters) {
        UpdateCategoryOptionResponseType responseType = new UpdateCategoryOptionResponseType();
        try {
            UpdateResult<CategoryOption> result = contentManagementService.updateCategoryOption(parameters.getCategoryOption());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public FetchCategoryOptionResponseType fetchCategoryOption(
            @WebParam(partName = "parameters", name = "FetchCategoryOptionType", targetNamespace = NS) FetchCategoryOptionType parameters) {
        FetchCategoryOptionResponseType responseType = new FetchCategoryOptionResponseType();
        try {
            FetchResult<CategoryOption> result = contentManagementService.fetchCategoryOption(parameters.getId());
            CategoryOptionType soapType = new CategoryOptionType();
            if(result.isSuccessful()) {
                CategoryOption option = result.getTarget() ;
                soapType.setCategoryId(option.getMenuCategory().getId());
                soapType.setDescription(option.getDescription());
                soapType.setId(option.getId());
                soapType.setName(option.getName());
                soapType.setPrice(option.getPrice());
                soapType.setThumb(option.getThumb());
                soapType.setTaxable(option.getTaxable());
                responseType.setOption(soapType);
            }
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public ListCategoryOptionResponseType listCategoryOption(
            @WebParam(partName = "parameters", name = "ListCategoryOptionType", targetNamespace = NS) ListCategoryOptionType parameters) {
        ListCategoryOptionResponseType responseType = new ListCategoryOptionResponseType();
        try {
            FetchResult<MenuCategory> fetchResult = contentManagementService.fetchCategory(parameters.getCategoryId());

            MenuCategory category = fetchResult.getTarget();
            if(category != null) {
                List<CategoryOption> options = category.getOptions();
                for(CategoryOption option : options) {
                    CategoryOptionType soapType = new CategoryOptionType();
                    soapType.setCategoryId(parameters.getCategoryId());
                    soapType.setDescription(option.getDescription());
                    soapType.setId(option.getId());
                    soapType.setName(option.getName());
                    soapType.setPrice(option.getPrice());
                    soapType.setTaxable(option.getTaxable());
                    soapType.setThumb(option.getThumb());
                    responseType.getOptions().add(soapType);
                }
                FetchResult<List<CategoryOption>> result = new FetchResult<List<CategoryOption>>();
                result.setTarget(options);
                result.setSuccessful(true);
                responseType.setResult(getSoapResult(result));
                responseType.setTotal(options.size());
                responseType.setCatId(parameters.getCategoryId());
            } else {
                responseType.setResult(getSoapFaultResult(new Exception("Category ["+parameters.getCategoryId()+"] doesn't exist")));
            }
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public UpdateGlobalOptionResponseType updateGlobalOption(
            @WebParam(partName = "parameters", name = "UpdateGlobalOptionType", targetNamespace = NS) UpdateGlobalOptionType parameters) {
        UpdateGlobalOptionResponseType responseType = new UpdateGlobalOptionResponseType();
        try {
            UpdateResult<GlobalOption> result = contentManagementService.updateGlobalOption(parameters.getGlobalOption());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public FetchGlobalOptionResponseType fetchGlobalOption(
            @WebParam(partName = "parameters", name = "FetchGlobalOptionType", targetNamespace = NS) FetchGlobalOptionType parameters) {
        FetchGlobalOptionResponseType responseType = new FetchGlobalOptionResponseType();
        try {
            FetchResult<GlobalOption> result = contentManagementService.fetchGlobalOption(parameters.getId());
            if(result.isSuccessful()) {
                GlobalOption option = result.getTarget();
                GlobalOptionType soapType = new GlobalOptionType();
                soapType.setId(option.getId());
                soapType.setName(option.getName());
                soapType.setPrice(option.getDineInPrice());
                soapType.setOutPrice(option.getTakeOutPrice());
                responseType.setGlobalOption(soapType);
            }
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public DeleteGlobalOptionResponseType deleteGlobalOption(
            @WebParam(partName = "parameters", name = "DeleteGlobalOptionType", targetNamespace = NS) DeleteGlobalOptionType parameters) {
        DeleteGlobalOptionResponseType responseType = new DeleteGlobalOptionResponseType();
        try {
          DeleteResult result = contentManagementService.deleteGlobalOption(parameters.getId());
          responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }

        return responseType;
    }

    @Override
    public CreateGlobalOptionResponseType createGlobalOption(
            @WebParam(partName = "parameters", name = "CreateGlobalOptionType", targetNamespace = NS) CreateGlobalOptionType parameters) {
        CreateGlobalOptionResponseType responseType = new CreateGlobalOptionResponseType();
        try {
            CreateResult<GlobalOption> result = contentManagementService.createGlobalOption(parameters.getGlobalOption());
            if(result.isSuccessful()) {
                responseType.setId(result.getCreated().getId());
            }
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        
        return responseType;
    }

    @Override
    public ListGlobalOptionResponseType listGlobalOption(
            @WebParam(partName = "parameters", name = "ListGlobalOptionType", targetNamespace = NS) ListGlobalOptionType parameters) {
        ListGlobalOptionResponseType responseType = new ListGlobalOptionResponseType();
        try {
            FetchResult<List<GlobalOption>> result = contentManagementService.listGlobalOptions();
            List<GlobalOption> globalOptions = result.getTarget();
            for(GlobalOption option : globalOptions) {
                GlobalOptionType soapType = new GlobalOptionType();
                soapType.setId(option.getId());
                soapType.setName(option.getName());
                soapType.setOutPrice(option.getTakeOutPrice());
                soapType.setPrice(option.getDineInPrice());
                responseType.getOptions().add(soapType);
            }
            responseType.setCount(globalOptions.size());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public SaveSeatingAreaResponseType saveSeatingArea(
            @WebParam(partName = "parameters", name = "SaveSeatingAreaType", targetNamespace = NS) SaveSeatingAreaType parameters) {
        SaveSeatingAreaResponseType responseType = new SaveSeatingAreaResponseType();
        try {
            if(!parameters.getAreaType().isEmpty()) {
                for(SeatingAreaType soapType : parameters.getAreaType()) {
                    if(soapType.getId() != null && soapType.getId() > 0) {
                        UpdateResult<SeatingArea> result = contentManagementService.updateSeatingArea(soapType);
                        if(result.isSuccessful()) {
                            responseType.setAreaId(result.getManagedObject().getId());
                        }
                        responseType.setResult(getSoapResult(result));
                    } else {
                        CreateResult<SeatingArea> result = contentManagementService.createSeatingArea(soapType);
                        if(result.isSuccessful()) {
                            responseType.setAreaId(result.getCreated().getId());
                        }
                        responseType.setResult(getSoapResult(result));
                    }
                }
            }
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public ListAreasResponseType listAreas(
            @WebParam(partName = "parameters", name = "ListAreasType", targetNamespace = NS) ListAreasType parameters) {
        ListAreasResponseType responseType = new ListAreasResponseType();
        try {
            FetchResult<List<SeatingArea>> result = contentManagementService.listSeatingAreas();
            if(result.isSuccessful()) {
                for(SeatingArea area : result.getTarget()) {
                    SeatingAreaType soapType = new SeatingAreaType();
                    soapType.setId(area.getId());
                    soapType.setName(area.getName());
                    List<RestaurantTable> tables = area.getTables();
                    for(RestaurantTable table : tables) {
                        TableType soapTable = new TableType();
                        soapTable.setAreaId(area.getId());
                        soapTable.setId(table.getId());
                        soapTable.setName(table.getName());
                        soapTable.setX(table.getCoordinate_x());
                        soapTable.setY(table.getCoordinate_y());
                        soapType.getTables().add(soapTable);
                    }
                    responseType.getAreas().add(soapType);
                }
            }
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public FetchSeatingAreaResponseType fetchSeatingArea(
            @WebParam(partName = "parameters", name = "FetchSeatingAreaType", targetNamespace = NS) FetchSeatingAreaType parameters) {
        FetchSeatingAreaResponseType responseType = new FetchSeatingAreaResponseType();
        try {
            FetchResult<SeatingArea> fetchResult = contentManagementService.fetchSeatingArea(parameters.getId());
            if(fetchResult.isSuccessful()) {
                SeatingArea area = fetchResult.getTarget();
                SeatingAreaType soapType = new SeatingAreaType();
                soapType.setId(area.getId());
                soapType.setName(area.getName());
                for(RestaurantTable table : area.getTables()) {
                    TableType tableType = new TableType();
                    tableType.setAreaId(area.getId());
                    tableType.setId(table.getId());
                    tableType.setName(table.getName());
                    tableType.setX(table.getCoordinate_x());
                    tableType.setY(table.getCoordinate_y());
                    soapType.getTables().add(tableType);
                }
                responseType.setAreaType(soapType);
            }
            responseType.setResult(getSoapResult(fetchResult));
        } catch (Exception e) {
            log.error("Error in fetchSeatingArea", e);
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public DeleteSeatingAreaResponseType deleteSeatingArea(
            @WebParam(partName = "parameters", name = "DeleteSeatingAreaType", targetNamespace = NS) DeleteSeatingAreaType parameters) {
        DeleteSeatingAreaResponseType responseType = new DeleteSeatingAreaResponseType();
        try {
            DeleteResult result = contentManagementService.deleteSeatingArea(parameters.getId());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e){
            log.error("Error in deleteSeatingArea", e);
            responseType.setResult(getSoapFaultResult(e));
        }

        return responseType;
    }

    @Override
    public SaveOrderResponseType saveOrder(
            @WebParam(partName = "parameters", name = "SaveOrderType", targetNamespace = NS) SaveOrderType parameters) {
        SaveOrderResponseType responseType = new SaveOrderResponseType();
        OrderType orderType = parameters.getOrder();
        try {
            if(orderType.getId() == null || orderType.getId() == 0) {
                CreateResult<Order> result = contentManagementService.createNewOrder(orderType);
                responseType.setResult(getSoapResult(result));
                if(result.isSuccessful()) {
                    responseType.setId(result.getCreated().getId());
                }
                responseType.setResult(getSoapResult(result));
            } else {
                ResultType resultType = new ResultType();
                contentManagementService.updateOrder(orderType);
                resultType.setSuccessful(true);
                responseType.setResult(resultType);
            }
        } catch(Exception e) {
            e.printStackTrace();
            log.error("Error in saveOrder", e);
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    private OrderType convertToOrderType(Order order) {
        OrderType soapType = new OrderType();
        SimpleDateFormat dateFormat = new SimpleDateFormat("hh:mm:ss yyyy-MM-dd");
        soapType.setCreateTime(dateFormat.format(order.getCreatedOn()));
        soapType.setId(order.getId());
        soapType.setNotes(order.getNotes());
        soapType.setNumOfGuests(order.getNumOfGuests());
        soapType.setStatus(order.getStatus().toString());
        if(order.getTable() != null) {
            soapType.setTableId(order.getTable().getId());
            soapType.setTableName(order.getTable().getName());
        }
        soapType.setTotalPrice(order.getTotalPrice());
        soapType.setTotalTax(order.getTax());
        soapType.setTotalTips(order.getGratuity());
        soapType.setType(order.getOrderType());
        soapType.setUserId(order.getCreatedBy().getId());
        for(com.kpos.domain.OrderItem item : order.getOrderItems()) {
            OrderItemType soapItem = new OrderItemType();
            soapItem.setId(item.getId());
            soapItem.setSaleItemId(item.getSaleItem().getId());
            soapItem.setOrderId(order.getId());
            soapItem.setPrice(item.getSalePrice());
            soapItem.setQuantity(item.getQuantity());
            soapItem.setDisplayText(item.getDisplayText());
            for(OrderItemOption option : item.getOptions()) {
                OrderItemOptionType optionType = new OrderItemOptionType();
                optionType.setDisplayText(option.getDisplayText());
                optionType.setId(option.getId());
                optionType.setOptionId(option.getOptionId());
                optionType.setPrice(option.getPrice());
                optionType.setDisplayText(option.getDisplayText());
                optionType.setOptionType(option.getOptionType());
                optionType.setQuantity(option.getQuantity());
                soapItem.getOptions().add(optionType);
            }
            soapType.getOrderItems().add(soapItem);
        }
        return soapType;
    }
    
    @Override
    public FetchOrderResponseType fetchOrder(
            @WebParam(partName = "parameters", name = "FetchOrderType", targetNamespace = NS) FetchOrderType parameters) {
        FetchOrderResponseType responseType = new FetchOrderResponseType();
        try {
            ResultType result = new ResultType();
            Order order = orderDao.findById(parameters.getOrderId());
            if(order != null) {
                OrderType soapType = convertToOrderType(order);
                responseType.setOrder(soapType);
                result.setSuccessful(true);
            } else {
                result.setSuccessful(false);
            }
            responseType.setResult(result);
        } catch(Exception e) {
            e.printStackTrace();
            log.error("Error in saveOrder", e);
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public DeleteOrderResponseType deleteOrder(
            @WebParam(partName = "parameters", name = "DeleteOrderType", targetNamespace = NS) DeleteOrderType parameters) {
        DeleteOrderResponseType responseType = new DeleteOrderResponseType();
        try {
            DeleteResult result = contentManagementService.deleteOrder(parameters.getUserId(), parameters.getOrderId());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            e.printStackTrace();
            log.error("deleteOrder failed!", e);
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public SettleOrderResponseType settleOrder(
            @WebParam(partName = "parameters", name = "SettleOrderType", targetNamespace = NS) SettleOrderType parameters) {
        SettleOrderResponseType responseType = new SettleOrderResponseType();
        try {
            UpdateResult<Order> result = contentManagementService.settleOrder(parameters.getUserId(), parameters.getOrderId(), parameters.getSaleAmt(),
                    parameters.getTax(), parameters.getTips(), parameters.getPayments());
            responseType.setResult(getSoapResult(result));
        } catch (Exception e) {
            e.printStackTrace();
            log.error("settleOrder failed!", e);
            responseType.setResult(getSoapFaultResult(e));
        }
        return responseType;
    }

    @Override
    public ListPrintersHTMLResponseType listPrintersHTML(
            @WebParam(partName = "parameters", name = "ListPrintersHTMLType", targetNamespace = NS) ListPrintersHTMLType parameters) {
        ListPrintersHTMLResponseType responseType = new ListPrintersHTMLResponseType();
        String prefix = parameters.getPrefix();
        StringBuilder html = new StringBuilder("");
        FetchResult<List<Printer>> result = this.contentManagementService.listPrinters();
        if(result.isSuccessful()) {
            for(Printer p : result.getTarget()) {
                html.append("<input type='checkbox' id='").append(prefix).append("'").append(" name='").append(prefix).append("'");
                html.append(" value='").append(p.getId()).append("'>");
                html.append(p.getName()).append("</input>");
            }
        }
        responseType.setHtml(html.toString());
        responseType.setResult(getSoapResult(result));
        return responseType;
    }
    
    private String listItemTableHTML(List<SaleItem> items, String tableId, String onclick) {
        StringBuilder htmlBuilder = new StringBuilder("<table><tbody>");
        int index = 0;
        for(SaleItem item : items) {
            //<tbody><tr id="menuItem_r0"><td onclick='selectItemRow("menuItem", "menuItem_r0");'>fasdfaf</td><td><a href='javascript:deleteItemRow("menuItem","menuItem_r0");'>X</a></td></tr></tbody>
            String id = "menuItem_r" + index;
            htmlBuilder.append("<tr id=\"").append(id).append(index).append("\">");
            htmlBuilder.append("<td ").append("onclick='javascript:").append(onclick).append("(\"").append(tableId).append("\", \"").append(id).append("\");'");
            htmlBuilder.append(item.getName()).append("</td><td><a href='javascript:deleteItemRow(\"").append(tableId).append("\", \"").append(id).append("\";'>X</a>");
            htmlBuilder.append("</td>");
            htmlBuilder.append("</tr>");
            index++;
        }
        htmlBuilder.append("</tbody></table>");
        return htmlBuilder.toString();
    }

    @Override
    public ListCategoryHTMLResponseType listCategoryHTML(
            @WebParam(partName = "parameters", name = "ListCategoryHTMLType", targetNamespace = NS) ListCategoryHTMLType parameters) {
        ListCategoryHTMLResponseType responseType = new ListCategoryHTMLResponseType();
        try {
            StringBuilder htmlBuilder = new StringBuilder();
            String onclick = parameters.getOnclick();
            FetchResult<List<MenuCategory>> fetchResult = contentManagementService.listAllCategories(parameters.getBegin(), parameters.getMaxSize());
            int rowSize = parameters.getRowSize() < 0 ? 1 : parameters.getRowSize();
            int i = 0;
            List<MenuCategory> categories = fetchResult.getTarget();
            for(MenuCategory category : categories) {
                if(i % rowSize == 0) htmlBuilder.append("<tr>");
                htmlBuilder.append("<td>").append("<input type=\"button\" class=\"groovybutton\" value=\"").append(category.getName()).append("\" onclick=\"");
                htmlBuilder.append(onclick).append("(").append(category.getId()).append(")").append("\"/>");
                htmlBuilder.append("</td>");
                if(i % rowSize == (rowSize-1)) htmlBuilder.append("</tr>");
                i++;
            }
            if(i % rowSize != 0) htmlBuilder.append("</tr>");
            responseType.setHtml(htmlBuilder.toString());
        } catch(Exception e) {
            e.printStackTrace();
            log.error("Error in listCategoryHTML", e);
        }

        return responseType;
    }

    @Override
    public ListGlobalOptionHTMLResponseType listGlobalOptionHTML(
            @WebParam(partName = "parameters", name = "ListGlobalOptionHTMLType", targetNamespace = NS) ListGlobalOptionHTMLType parameters) {
        ListGlobalOptionHTMLResponseType responseType = new ListGlobalOptionHTMLResponseType();
        try {
            StringBuilder htmlBuilder = new StringBuilder();
            String onclick = parameters.getOnclick();
            FetchResult<List<GlobalOption>> fetchResult = contentManagementService.listGlobalOptions(parameters.getBegin(), parameters.getMaxSize());
            int rowSize = parameters.getRowSize() < 0 ? 1 : parameters.getRowSize();
            int i = 0;
            if(fetchResult.isSuccessful()) {
                List<GlobalOption> options = fetchResult.getTarget();
                if(options != null) {
                    for(GlobalOption option : options) {
                        if(i % rowSize == 0) htmlBuilder.append("<tr><td width='100%'>");
                        htmlBuilder.append("").append("<input type=\"button\" class=\"optionbutton\" value=\"").append(option.getName()).append("\" onclick=\"");
                        htmlBuilder.append(onclick).append("(").append(option.getId()).append(", ");
                        htmlBuilder.append( parameters.isIsDineIn()? option.getDineInPrice():option.getTakeOutPrice());
                        htmlBuilder.append(", \\").append(option.getName()).append("\\").append(")").append("\"/> ");
                        //htmlBuilder.append("</td>");
                        if(i % rowSize == (rowSize-1)) htmlBuilder.append("</td></tr>");
                        i++;
                    }
                    if(i % rowSize != 0) htmlBuilder.append("</tr>");
                } else {
                    log.error("listGlobalOptionHTML - options is null");
                }
            }
            responseType.setHtml(htmlBuilder.toString());
        } catch(Exception e) {
            e.printStackTrace();
            log.error("Error in listGlobalOptionHTML", e);
        }
        return responseType;
    }

    @Override
    public ListCategoryOptionHTMLResponseType listCategoryOptionHTML(
            @WebParam(partName = "parameters", name = "ListCategoryOptionHTMLType", targetNamespace = NS) ListCategoryOptionHTMLType parameters) {
        ListCategoryOptionHTMLResponseType responseType = new ListCategoryOptionHTMLResponseType();
        try {
            StringBuilder htmlBuilder = new StringBuilder();
            String onclick = parameters.getOnclick();
            FetchResult<MenuCategory> fetchResult = contentManagementService.fetchCategory(parameters.getCategoryId());
            int rowSize = parameters.getRowSize() < 0 ? 1 : parameters.getRowSize();
            int i = 0;
            if(fetchResult.isSuccessful()) {
                List<CategoryOption> options = fetchResult.getTarget().getOptions();
                if(options != null) {
                    for(CategoryOption option : options) {
                        if(i % rowSize == 0) htmlBuilder.append("<tr><td width='100%'>");
                        htmlBuilder.append("").append("<input type=\"button\" class=\"optionbutton\" value=\"").append(option.getName()).append("\" onclick=\"");
                        htmlBuilder.append(onclick).append("(").append(option.getId()).append(", ");
                        htmlBuilder.append(option.getPrice());
                        htmlBuilder.append(", \\").append(option.getName()).append("\\").append(")").append("\"/> ");
                        if(i % rowSize == (rowSize-1)) htmlBuilder.append("</td></tr>");
                        i++;
                    }
                    if(i % rowSize != 0) htmlBuilder.append("</tr>");
                } else {
                    log.error("listCategoryOptionHTML - options is null for category " + parameters.getCategoryId());
                }
            }
            responseType.setHtml(htmlBuilder.toString());
        } catch(Exception e) {
            e.printStackTrace();
            log.error("Error in ListCategoryOptionHTMLResponseType", e);
        }
        return responseType;
    }

    @Override
    public ListSaleItemsForCategoryHTMLResponseType listSaleItemsForCategoryHTML(
            @WebParam(partName = "parameters", name = "ListSaleItemsForCategoryHTMLType", targetNamespace = NS) ListSaleItemsForCategoryHTMLType parameters) {
        ListSaleItemsForCategoryHTMLResponseType responseType = new ListSaleItemsForCategoryHTMLResponseType();
        try {
            StringBuilder htmlBuilder = new StringBuilder();
            String onclick = parameters.getOnclick();
            FetchResult<MenuCategory> fetchResult = contentManagementService.fetchCategory(parameters.getCategoryId());
            int rowSize = parameters.getRowSize() < 0 ? 1 : parameters.getRowSize();
            int i = 0;
            if(fetchResult.isSuccessful()) {
                List<SaleItem> items = fetchResult.getTarget().getSaleItems();
                if(items != null) {
                    for(SaleItem item : items) {
                        if(i % rowSize == 0) htmlBuilder.append("<tr><td width='100%'>");
                        htmlBuilder.append("").append("<input type=\"button\" class=\"itembutton\" value=\"").append(item.getName()).append("\" onclick=\"");
                        htmlBuilder.append(onclick).append("(").append(item.getId()).append(")").append("\"/> ");
                        if(i % rowSize == (rowSize-1)) htmlBuilder.append("</td></tr>");
                        i++;
                    }
                } else {
                    log.error("listSaleItemsForCategoryHTML - items is null for category " + parameters.getCategoryId());
                }
            }
            responseType.setHtml(htmlBuilder.toString());
        } catch(Exception e) {
            e.printStackTrace();
            log.error("Error in listSaleItemsForCategoryHTML", e);
        }
        return responseType;
    }

    @Override
    public ListStaffResponseType listStaff(
            @WebParam(partName = "parameters", name = "ListStaffType", targetNamespace = NS) ListStaffType parameters) {
        ListStaffResponseType responseType = new ListStaffResponseType();
        try {
            List<StaffMember> staffMembers = staffMemberDao.findAll();
            SimpleDateFormat format = new SimpleDateFormat("yyyy-mm-dd");
            for(StaffMember member : staffMembers) {
                StaffType soapType = new StaffType();
                soapType.setState(member.getState());
                soapType.setStreet(member.getStreet());
                soapType.setCity(member.getCity());
                soapType.setZipcode(member.getZipcode());
                soapType.setAge(member.getAge());
                soapType.setCellPhone(member.getCellPhone());
                soapType.setHomePhone(member.getHomePhone());
                soapType.setWage(member.getWage());
                soapType.setWageType(member.getWageType());
                soapType.setId(member.getId());
                try {
                    soapType.setJoinDate(member.getJoinDate()==null?"":format.format(member.getJoinDate()));
                }catch(Exception ex) {
                    log.error("Error formatting join date: ", ex);
                }
                soapType.setName(member.getName());
                User user = member.getUser();
                if(user != null) {
                    UserType userType = new UserType();
                    userType.setId(user.getId());
                    userType.setPasscode(user.getPasscode());
                    soapType.setUser(userType);
                    for(FunctionModule functionModule : user.getFunctions()) {
                        FunctionModuleType functionType = new FunctionModuleType();
                        functionType.setId(functionModule.getId());
                        functionType.setName(functionModule.getName());
                        userType.getFunctions().add(functionType);
                    }
                }
                responseType.getStaff().add(soapType);
            }
            responseType.setCount(staffMembers.size());
            ResultType result = new ResultType();
            result.setSuccessful(true);
            responseType.setResult(result);
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
            e.printStackTrace();
            log.error("Error in listStaff", e);
        }
        return responseType;
    }

    @Override
    public SaveStaffResponseType saveStaff(
            @WebParam(partName = "parameters", name = "SaveStaffType", targetNamespace = NS) SaveStaffType parameters) {
        SaveStaffResponseType responseType = new SaveStaffResponseType();
        try {
            if(parameters.getStaff().getId() != null && parameters.getStaff().getId() > 0) {
                UpdateResult<StaffMember> result = contentManagementService.updateStaffMember(parameters.getStaff());
                responseType.setResult(getSoapResult(result));
            } else {
                CreateResult<StaffMember> result = contentManagementService.createStaff(parameters.getStaff());
                responseType.setResult(getSoapResult(result));
            }
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
            e.printStackTrace();
            log.error("Error in deleteStaff", e);
        }
        return responseType;
    }

    @Override
    public DeleteStaffResponseType deleteStaff(
            @WebParam(partName = "parameters", name = "DeleteStaffType", targetNamespace = NS) DeleteStaffType parameters) {
        DeleteStaffResponseType responseType = new DeleteStaffResponseType();
        try {
            DeleteResult result = contentManagementService.deleteStaff(parameters.getStaffId());
            responseType.setResult(getSoapResult(result));
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
            e.printStackTrace();
            log.error("Error in deleteStaff", e);
        }
        return responseType;
    }

    @Override
    public CheckPrivilegeResponseType checkPrivilege(
            @WebParam(partName = "parameters", name = "CheckPrivilegeType", targetNamespace = NS) CheckPrivilegeType parameters) {
        CheckPrivilegeResponseType responseType = new CheckPrivilegeResponseType();
        try {
            ResultType result = new ResultType();
            result.setSuccessful(false);
            User user = userDao.findByPasscode(parameters.getPasscode());
            if(user != null) {
                for(FunctionModule functionModule : user.getFunctions()) {
                    if(functionModule.getId() == parameters.getFunctionId()) {
                        result.setSuccessful(true);
                    }
                }
                responseType.setUserId(user.getId());
            }
            responseType.setResult(result);
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
            e.printStackTrace();
            log.error("Error in checkPrivilege", e);
        }
        return responseType;
    }

    @Override
    public GetUserFunctionsHTMLResponseType getUserFunctionsHTML(
            @WebParam(partName = "parameters", name = "GetUserFunctionsHTMLType", targetNamespace = NS) GetUserFunctionsHTMLType parameters) {
        GetUserFunctionsHTMLResponseType responseType = new GetUserFunctionsHTMLResponseType();
        ResultType result = new ResultType();
        try {
            List<FunctionModule> functionModules = functionModuleDao.findAll();
            User user = userDao.findById(parameters.getUserId());
            Set<FunctionModule> functionSet = new HashSet<FunctionModule>();
            if(user != null) {
                functionSet = user.getFunctions();
            }
            StringBuilder html = new StringBuilder("");
            for(int i = 0; i < functionModules.size(); i++) {
                FunctionModule function = functionModules.get(i);
                if(i % 4 == 0) html.append("<tr>");
                html.append("<td><input type='checkbox' name='privileges' id='privileges' value=").append(function.getId());
                if(functionSet.contains(function)) html.append(" checked");
                html.append(">").append(function.getName());
                html.append("</td>");
                if(i % 4 == 3) html.append("</tr>");
            }
            responseType.setHtml(html.toString());

            result.setSuccessful(true);
            responseType.setResult(result);
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
            e.printStackTrace();
            log.error("Error in getUserFunctionsHTML", e);
        }
        
        return responseType;
    }

    @Override
    public AddAttendanceResponseType addAttendance(
            @WebParam(partName = "parameters", name = "AddAttendanceType", targetNamespace = NS) AddAttendanceType parameters) {
        AddAttendanceResponseType responseType = new AddAttendanceResponseType();
        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:MM:ss");
            SimpleDateFormat dateFormat2 = new SimpleDateFormat("yyyy-mm-dd");
            Date workDay = dateFormat2.parse(parameters.getAttendance().getStartTime());
            Date startTime = dateFormat.parse(parameters.getAttendance().getStartTime());
            Date endTime = dateFormat.parse(parameters.getAttendance().getEndTime());
            CreateResult<StaffAttendance> result = contentManagementService.addAttendance(parameters.getUserId(), parameters.getAttendance().getStaffId(), workDay, startTime, endTime);
            responseType.setResult(getSoapResult(result));
            responseType.setId(result.getCreated().getId());
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
            e.printStackTrace();
            log.error("Error in addAttendance", e);
        }
        return responseType;
    }

    @Override
    public DeleteAttendanceResponseType deleteAttendance(
            @WebParam(partName = "parameters", name = "DeleteAttendanceType", targetNamespace = NS) DeleteAttendanceType parameters) {
        DeleteAttendanceResponseType responseType = new DeleteAttendanceResponseType();

        return responseType;
    }

    @Override
    public UpdateAttendanceResponseType updateAttendance(
            @WebParam(partName = "parameters", name = "UpdateAttendanceType", targetNamespace = NS) UpdateAttendanceType parameters) {
        UpdateAttendanceResponseType responseType = new UpdateAttendanceResponseType();

        return responseType;
    }

    @Override
    public CalculateStaffPayResponseType calculateStaffPay(
            @WebParam(partName = "parameters", name = "CalculateStaffPayType", targetNamespace = NS) CalculateStaffPayType parameters) {
        CalculateStaffPayResponseType responseType = new CalculateStaffPayResponseType();

        return responseType;
    }

    @Override
    public FetchUnservedOrdersResponseType fetchUnservedOrders(
            @WebParam(partName = "parameters", name = "FetchUnservedOrdersType", targetNamespace = NS) FetchUnservedOrdersType parameters) {
        FetchUnservedOrdersResponseType responseType = new FetchUnservedOrdersResponseType();
        try {
            FetchResult<List<Order>> fetchResult = contentManagementService.fetchUnservedOrders(parameters.isIsAsc());
            if(fetchResult.isSuccessful()) {
                for(Order order : fetchResult.getTarget()) {
                    OrderType soapType = convertToOrderType(order);
                    responseType.getOrders().add(soapType);
                }
                responseType.setCount(fetchResult.getTarget().size());
            } else {
                responseType.setCount(0);
            }
            responseType.setResult(getSoapResult(fetchResult));
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
            e.printStackTrace();
            log.error("Error in fetchUnservedOrders", e);
        }
        return responseType;
    }

    @Override
    public DeleteRoleResponseType deleteRole(
            @WebParam(partName = "parameters", name = "DeleteRoleType", targetNamespace = NS) DeleteRoleType parameters) {
        DeleteRoleResponseType responseType = new DeleteRoleResponseType();
        try {
            DeleteResult result = contentManagementService.deleteRole(parameters.getRoleId());
            responseType.setResult(getSoapResult(result));
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
            e.printStackTrace();
            log.error("Error in deleteRole", e);
        }
        return responseType;
    }

    @Override
    public SaveRoleResponseType saveRole(
            @WebParam(partName = "parameters", name = "SaveRoleType", targetNamespace = NS) SaveRoleType parameters) {
        SaveRoleResponseType responseType = new SaveRoleResponseType();
        try {
            if(parameters.getRole().getId() == null || parameters.getRole().getId()==0) {
                CreateResult<Roles> result = contentManagementService.createNewRole(parameters.getRole());
                responseType.setId(result.getCreated().getId());
                responseType.setResult(getSoapResult(result));
            } else {
                UpdateResult<Roles> result = contentManagementService.updateRole(parameters.getRole());
                responseType.setId(result.getManagedObject().getId());
                responseType.setResult(getSoapResult(result));
            }
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
            e.printStackTrace();
            log.error("Error in saveRole", e);
        }
        return responseType;
    }

    @Override
    public ListRolesResponseType listRoles(
            @WebParam(partName = "parameters", name = "ListRolesType", targetNamespace = NS) ListRolesType parameters) {
        ListRolesResponseType responseType = new ListRolesResponseType();
        try {
            FetchResult<List<Roles>> result = contentManagementService.fetchAllRoles();
            List<Roles> rolesList = result.getTarget();
            for(Roles role : rolesList) {
                RoleType soapType = new RoleType();
                soapType.setName(role.getName());
                soapType.setId(role.getId());
                Set<FunctionModule> functions = role.getFunctions();
                for(FunctionModule functionModule : functions) {
                    FunctionModuleType functionType = new FunctionModuleType();
                    functionType.setId(functionModule.getId());
                    functionType.setName(functionModule.getName());
                    soapType.getFunction().add(functionType);
                }
                responseType.getRoles().add(soapType);
            }
            responseType.setResult(getSoapResult(result));
        } catch(Exception e) {
            responseType.setResult(getSoapFaultResult(e));
            e.printStackTrace();
            log.error("Error in listRoles", e);
        }
        return responseType;
    }
}
