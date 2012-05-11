package com.kpos.ws.impl;

import com.kpos.domain.*;
import com.kpos.domain.Order;
import com.kpos.service.*;
import com.kpos.ws.app.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

import javax.jws.WebParam;
import javax.xml.ws.Holder;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

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
   
    private SaleItemType convertSaleItemToSoap(SaleItem item) {
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
            optionType.setThumbPath(option.getThumPath());
            optionTypes.add(optionType);
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
                    SaleItemType itemType = convertSaleItemToSoap(item);
                    itemType.setCatId(categoryId);
                    saleItemTypes.add(itemType);
                }
            } else {
                responseType.setTotal(0);
            }
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
                SaleItemType soapType = convertSaleItemToSoap(item);
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
                soapType.setSaleItemId(option.getSaleItem().getId());
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
            FetchResult<List<RestaurantTable>> result = contentManagementService.listTables();
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
            } else {

            }
        } catch(Exception e) {
            log.error("Error in saveOrder", e);
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
}
