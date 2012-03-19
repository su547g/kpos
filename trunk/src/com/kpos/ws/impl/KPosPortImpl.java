package com.kpos.ws.impl;

import com.kpos.domain.Category;
import com.kpos.service.*;
import com.kpos.ws.app.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;

import javax.jws.WebParam;
import java.util.Date;

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

    @Override
    public DeleteCategoryResponseType deleteCategory(
            @WebParam(partName = "parameters", name = "DeleteCategoryType", targetNamespace = NS) DeleteCategoryType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public DeleteSaleItemResponseType deleteSaleItem(
            @WebParam(partName = "parameters", name = "DeleteSaleItemType", targetNamespace = NS) DeleteSaleItemType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public ListCategoryResponseType listCategory(
            @WebParam(partName = "parameters", name = "ListCategoryType", targetNamespace = NS) ListCategoryType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public CreateCategoryResponseType createCategory(
            @WebParam(partName = "parameters", name = "CreateCategoryType", targetNamespace = NS) CreateCategoryType soapCategory) {
        Category category = new Category();
        CategoryType soapType = soapCategory.getCategory();
        category.setName(soapType.getName());
        category.setNotes(soapType.getNotes());
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
        responseType.setResult(getSoapResult(result));
        return responseType;
    }

    @Override
    public UpdateCategoryResponseType updateCategory(
            @WebParam(partName = "parameters", name = "UpdateCategoryType", targetNamespace = NS) UpdateCategoryType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public ListSaleItemsForCategoryResponseType listSaleItemsForCategory(
            @WebParam(partName = "parameters", name = "ListSaleItemsForCategoryType", targetNamespace = NS) ListSaleItemsForCategoryType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public UpdateSaleItemResponseType updateSaleItem(
            @WebParam(partName = "parameters", name = "UpdateSaleItemType", targetNamespace = NS) UpdateSaleItemType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public FetchSaleItemResponseType fetchSaleItem(
            @WebParam(partName = "parameters", name = "FetchSaleItemType", targetNamespace = NS) FetchSaleItemType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public CreateSaleItemResponseType createSaleItem(
            @WebParam(partName = "parameters", name = "CreateSaleItemType", targetNamespace = NS) CreateSaleItemType parameters) {
        return null;  //To change body of implemented methods use File | Settings | File Templates.
    }
}
