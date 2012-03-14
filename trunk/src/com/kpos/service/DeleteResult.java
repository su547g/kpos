package com.kpos.service;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:48 PM
 */
public class DeleteResult extends BaseResult {

    Long id;

    public DeleteResult () {
    }

    public DeleteResult (int aFailureReasonCode, String aFailureReason) {
        super(aFailureReasonCode, aFailureReason);
    }

    public DeleteResult (Throwable aException) {
        super(aException);
    }

    public Long getId () {
        return id;
    }

    public void setId (Long aId) {
        id = aId;
    }
}