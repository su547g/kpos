package com.kpos.service;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:47 PM
 */
public class FailureCodes {
    /**
     * Error Code Range: 1 - 2000
     */
    public interface Generic {
        /**
         * NOT really a failure code... 0 reserved for non-errors
         */
        int SUCCESS = 0;

        /**
         * an exception wahs thrown
         */
        int EXCEPTION = 1;

        /**
         * invoking user does not have permission to do this
         */
        int PERMISSION_DENIED = 2;

        /**
         * missing required parameter or reference information to complete the operation
         */
        int MISSING_REQUIRED_DATA = 3;

        /**
         * references a non-existant object
         */
        int NO_SUCH_OBJECT = 4;

        /**
         * the name supplied violates the set of acceptable characters
         */
        int ILLEGAL_NAME = 5;

        /**
         * the operation would result in a sematically duplicate object
         */
        int DUPLICATE_OBJECT = 6;

        /**
         * failed to delete the object
         */
        int FAILED_TO_DELETE = 7;


        /**
         * not yet implemented
         */
        int NOT_YET_IMPLEMENTED = 8;

        /**
         * invalid parameter value
         */
        int INVALID_PARAMETER_VALUE = 9;
    }
}
