package com.kpos.service;

import com.kpos.domain.IAbstractEntity;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:49 PM
 */
public class UpdateResult<T extends IAbstractEntity> extends BaseResult {

    private T managedObject;

    public UpdateResult (T aManagedObject) {
        managedObject = aManagedObject;
    }

    public UpdateResult () {
    }

    public UpdateResult (int aFailureReasonCode, String aFailureReason) {
        super(aFailureReasonCode, aFailureReason);
    }

    public UpdateResult (Throwable aException) {
        super(aException);
    }

    public T getManagedObject () {
        return managedObject;
    }

    public void setManagedObject (T aManagedObject) {
        managedObject = aManagedObject;
    }
}