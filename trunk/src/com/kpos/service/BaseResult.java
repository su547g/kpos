package com.kpos.service;

import java.io.Serializable;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:46 PM
 */
public abstract class BaseResult implements Serializable {
    private boolean successful;
    private int failureReasonCode;
    private String failureReason;
    private Throwable exception;

    /**
     * constructs a successful result
     */
    protected BaseResult () {
        successful = true;
        failureReasonCode = FailureCodes.Generic.SUCCESS;
        failureReason = "";
    }

    /**
     * business rule failure, successful will be set to false
     *
     * @param aFailureReasonCode - numeric code indicating the reason for failure
     * @param aFailureReason     - string description of failure reason
     */
    protected BaseResult (int aFailureReasonCode, String aFailureReason) {
        failureReasonCode = aFailureReasonCode;
        failureReason = aFailureReason;
        successful = false;
    }

    /**
     * exception related failure, successful will be set to false
     *
     * @param aException - the exception
     */
    protected BaseResult (Throwable aException) {
        exception = aException;
        failureReason = "an Exception was thrown [" + aException.getMessage() + "]";
        failureReasonCode = FailureCodes.Generic.EXCEPTION;
        successful = false;
    }

    /**
     * @return true if the operation was successful.  This will always return the opposite of
     *         isFailure()...
     */
    public boolean isSuccessful () {
        return successful;
    }

    /**
     * @return true if the operation failed.  This will always return the opposite of
     *         isSuccessful()...
     */
    public boolean isFailure () {
        return !isSuccessful();
    }

    public void setFailure (int aFailureCode, String aFailureReason) {
        failureReasonCode = aFailureCode;
        failureReason = aFailureReason;
        successful = false;
    }

    public void setSuccessful (boolean aSuccessful) {
        successful = aSuccessful;
    }

    public int getFailureReasonCode () {
        return failureReasonCode;
    }

    public String getFailureReason () {
        return failureReason;
    }

    public Throwable getException () {
        return exception;
    }

    public void setException (Throwable aException) {
        exception = aException;
        if (exception != null) {
            setFailure(FailureCodes.Generic.EXCEPTION, "An Exception Occurred: " + exception.getMessage());
        }
    }
}
