package com.kpos.ws.impl;

import com.kpos.domain.Category;
import com.kpos.domain.Printer;
import com.kpos.domain.SaleItem;
import com.kpos.domain.SaleItemOption;
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
        itemType.setName(item.getName());
        itemType.setNormalPrice(item.getPrice());
        itemType.setTakeoutPrice(item.getOutPrice());
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
        List<PrinterType> printerTypes = itemType.getPrinters();
        Set<Printer> printers = item.getPrinters();
        for(Printer printer : printers) {
            PrinterType printerType = new PrinterType();
            printerType.setId(printer.getId());
            printerType.setName(printer.getName());
            printerType.setIpAddr(printer.getIpAddress());
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
            FetchResult<List<Category>> fetchResult = contentManagementService.listAllCategories();
            List<Category> categoryList = fetchResult.getTarget();
            List<CategoryType> categoryTypes = new ArrayList<CategoryType>();
            for(Category category : categoryList) {
                CategoryType type = new CategoryType();
                type.setHappyHourRate(category.getHhRate());
                type.setId(category.getId());
                type.setIsAllowedHappyHour(category.isAllowedHH());
                type.setName(category.getName());
                type.setNotes(category.getNotes());
                type.setThumbPath(category.getThumbPath());
                categoryTypes.add(type);
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
            Category category = new Category();
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
            CreateResult<Category> result = contentManagementService.createMenuCategory(category);
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
            UpdateResult<Category> result = contentManagementService.updateCategory(parameters.getCategory());
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
            SaleItemType soapType = convertSaleItemToSoap(item);
            soapType.setCatId(item.getCategory().getId());

            responseType.setSaleItem(soapType);
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
    public DeleteSaleItemOptionResponseType deleteSaleItemOption(
            @WebParam(partName = "parameters", name = "DeleteSaleItemOptionType", targetNamespace = NS) DeleteSaleItemOptionType parameters) {
        DeleteSaleItemOptionResponseType responseType = new DeleteSaleItemOptionResponseType();
        try {
            DeleteResult result = contentManagementService.deleteSaleItem(parameters.getId());
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
}
