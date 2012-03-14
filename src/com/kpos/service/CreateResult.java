package com.kpos.service;

import com.kpos.domain.IAbstractEntity;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:45 PM
 */
public class CreateResult<T extends IAbstractEntity> extends BaseResult {

    private T created;

    public CreateResult () {
    }

    public CreateResult (T aCreatedObject) {
        created = aCreatedObject;
    }

    public CreateResult (int aFailureReasonCode, String aFailureReason) {
        super(aFailureReasonCode, aFailureReason);
    }

    public CreateResult (Throwable aException) {
        super(aException);
    }

    public T getCreated () {
        return created;
    }

    public void setCreated (T aCreated) {
        created = aCreated;
    }
}