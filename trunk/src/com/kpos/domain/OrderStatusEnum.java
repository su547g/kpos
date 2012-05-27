package com.kpos.domain;

import com.kpos.util.IIntegerMappedEnum;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/9/12 11:57 PM
 */
public enum OrderStatusEnum implements IIntegerMappedEnum {
    INITIAL(0),
    SUBMITTED(1),
    PRINTED(2),
    SERVED(3),
    PAID(4),
    CANCELED(-2);

    private int statusCode;

    OrderStatusEnum (int aStatusCode) {
        statusCode = aStatusCode;
    }

    public int getStatusCode () {
        return statusCode;
    }

    public static OrderStatusEnum parseFromStatusCode (int aCode) {
        for (OrderStatusEnum eachValue : OrderStatusEnum.values()) {
            if (eachValue.getStatusCode() == aCode) {
                return eachValue;
            }
        }

        throw new IllegalArgumentException("there is no [" + OrderStatusEnum.class.getName() + "] with a statusCode of [" + aCode + "]");
    }

    @Override
    public int getMappedIntegerValue () {
        return statusCode;
    }
}
