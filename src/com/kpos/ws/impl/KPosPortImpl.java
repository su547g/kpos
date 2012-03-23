package com.kpos.ws.impl;

import com.kpos.domain.Category;
import com.kpos.domain.SaleItem;
import com.kpos.domain.SaleItemOption;
import com.kpos.service.*;
import com.kpos.ws.app.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

import javax.jws.WebParam;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
        return itemType;
    }

    @Override
    public DeleteCategoryResponseType deleteCategory(
            @WebParam(partName = "parameters", name = "DeleteCategoryType", targetNamespace = NS) DeleteCategoryType parameters) {
        long categoryId = parameters.getCategoryId();
        DeleteResult result = contentManagementService.deleteCategory(categoryId);
        DeleteCategoryResponseType responseType = new DeleteCategoryResponseType();
        responseType.setResult(getSoapResult(result));
        return responseType;
    }

    @Override
    public DeleteSaleItemResponseType deleteSaleItem(
            @WebParam(partName = "parameters", name = "DeleteSaleItemType", targetNamespace = NS) DeleteSaleItemType parameters) {
        DeleteResult result = contentManagementService.deleteSaleItem(parameters.getItemId());
        DeleteSaleItemResponseType responseType = new DeleteSaleItemResponseType();
        responseType.setResult(getSoapResult(result));
        return responseType;
    }

    @Override
    public ListCategoryResponseType listCategory(
            @WebParam(partName = "parameters", name = "ListCategoryType", targetNamespace = NS) ListCategoryType parameters) {
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
        ListCategoryResponseType responseType = new ListCategoryResponseType();
        responseType.setTotal(categoryTypes.size());
        responseType.setResult(getSoapResult(fetchResult));
        return responseType;
    }

    @Override
    public CreateCategoryResponseType createCategory(
            @WebParam(partName = "parameters", name = "CreateCategoryType", targetNamespace = NS) CreateCategoryType soapCategory) {
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
        CreateCategoryResponseType responseType = new CreateCategoryResponseType();
        if(result.isSuccessful() && result.getCreated() != null) {
            responseType.setCategoryId(result.getCreated().getId());
        }
        responseType.setResult(getSoapResult(result));
        return responseType;
    }

    @Override
    public UpdateCategoryResponseType updateCategory(
            @WebParam(partName = "parameters", name = "UpdateCategoryType", targetNamespace = NS) UpdateCategoryType parameters) {
        UpdateResult<Category> result = contentManagementService.updateCategory(parameters.getCategory());
        UpdateCategoryResponseType responseType = new UpdateCategoryResponseType();
        responseType.setResult(getSoapResult(result));
        return responseType;
    }

    @Override
    public ListSaleItemsForCategoryResponseType listSaleItemsForCategory(
            @WebParam(partName = "parameters", name = "ListSaleItemsForCategoryType", targetNamespace = NS) ListSaleItemsForCategoryType parameters) {
        ListSaleItemsForCategoryResponseType responseType = new ListSaleItemsForCategoryResponseType();
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

        return responseType;
    }

    @Override
    public UpdateSaleItemResponseType updateSaleItem(
            @WebParam(partName = "parameters", name = "UpdateSaleItemType", targetNamespace = NS) UpdateSaleItemType parameters) {
        UpdateSaleItemResponseType responseType = new UpdateSaleItemResponseType();
        UpdateResult<SaleItem> result = contentManagementService.updateSaleItem(parameters.getSaleItem());
        responseType.setResult(getSoapResult(result));
        return responseType;
    }

    @Override
    public FetchSaleItemResponseType fetchSaleItem(
            @WebParam(partName = "parameters", name = "FetchSaleItemType", targetNamespace = NS) FetchSaleItemType parameters) {
        FetchSaleItemResponseType responseType = new FetchSaleItemResponseType();
        FetchResult<SaleItem> fetchResult = contentManagementService.fetchSaleItem(parameters.getItemId());
        SaleItem item = fetchResult.getTarget();
        SaleItemType soapType = convertSaleItemToSoap(item);
        soapType.setCatId(item.getCategory().getId());
        
        List<SaleItemOption> itemOptions = item.getOptionList();
        for(SaleItemOption option : itemOptions) {
            SaleItemOptionType optionType = new SaleItemOptionType();
            optionType.setId(option.getId());
            optionType.setName(option.getName());
            optionType.setPrice(option.getPrice());
            optionType.setSaleItemId(item.getId());
            optionType.setTakeoutPrice(option.getOutPrice());
            soapType.getOptions().add(optionType);
        }
        responseType.setSaleItem(soapType);
        responseType.setResult(getSoapResult(fetchResult));
        return responseType;
    }

    @Override
    public CreateSaleItemResponseType createSaleItem(
            @WebParam(partName = "parameters", name = "CreateSaleItemType", targetNamespace = NS) CreateSaleItemType parameters) {
        CreateSaleItemResponseType responseType = new CreateSaleItemResponseType();
        SaleItemType soapType = parameters.getSaleItem();
        CreateResult<SaleItem> result = contentManagementService.createSaleItem(soapType);
        if(result.isSuccessful() && result.getCreated() != null) {
            responseType.setSaleItemId(result.getCreated().getId());
        }
        responseType.setResult(getSoapResult(result));
        return responseType;
    }

    @Override
    public CreateSaleItemOptionResponseType createSaleItemOption(
            @WebParam(partName = "parameters", name = "CreateSaleItemOptionType", targetNamespace = NS) CreateSaleItemOptionType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public UpdateSaleItemOptionResponseType updateSaleItemOption(
            @WebParam(partName = "parameters", name = "UpdateSaleItemOptionType", targetNamespace = NS) UpdateSaleItemOptionType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public DeleteSaleItemOptionResponseType deleteSaleItemOption(
            @WebParam(partName = "parameters", name = "DeleteSaleItemOptionType", targetNamespace = NS) DeleteSaleItemOptionType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}
