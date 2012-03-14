package com.kpos.ws.exceptions;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/11/12 5:23 PM
 */
public class BaseException extends Exception {

    private static final long serialVersionUID = -7596885917927774309L;

    protected String message;

    public BaseException(String error) {
        message = error;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}