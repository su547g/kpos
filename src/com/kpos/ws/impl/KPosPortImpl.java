package com.kpos.ws.impl;

import com.kpos.domain.Category;
import com.kpos.service.*;
import com.kpos.ws.app.CreateCategoryResponseType;
import com.kpos.ws.app.CreateCategoryType;
import com.kpos.ws.app.KPosPortType;
import com.kpos.ws.app.ResultType;
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
    public CreateCategoryResponseType createCategory(
            @WebParam(partName = "parameters", name = "CreateCategoryType", targetNamespace = NS) CreateCategoryType soapCategory) {
        Category category = new Category();
        category.setName(soapCategory.getName());
        category.setNotes(soapCategory.getNotes());
        if(soapCategory.getIsAllowedHappyHour() != null) {
            category.setAllowedHH(soapCategory.getIsAllowedHappyHour());
        }
        if(soapCategory.getHappyHourRate() != null) {
            category.setHhRate(soapCategory.getHappyHourRate());
        }
        category.setCreatedOn(new Date());
        category.setLastUpdated(new Date());
        CreateResult<Category> result = contentManagementService.createMenuCategory(category);
        CreateCategoryResponseType responseType = new CreateCategoryResponseType();
        responseType.setResult(getSoapResult(result));
        return responseType;
    }
}
