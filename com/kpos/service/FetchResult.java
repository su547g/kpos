package com.kpos.service;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:49 PM
 */
public class FetchResult<T> extends BaseResult {

    private boolean wasAutoCreated;
    private T target;

    public FetchResult () {
    }

    public FetchResult (T aTarget) {
        target = aTarget;
    }

    public FetchResult (int aFailureReasonCode, String aFailureReason) {
        super(aFailureReasonCode, aFailureReason);
    }

    public FetchResult (Throwable aException) {
        super(aException);
    }

    public T getTarget () {
        return target;
    }

    public void setTarget (T aTarget) {
        target = aTarget;
    }

    public boolean getWasAutoCreated () {
        return wasAutoCreated;
    }

    public void setWasAutoCreated (boolean aWasAutoCreated) {
        wasAutoCreated = aWasAutoCreated;
    }
}