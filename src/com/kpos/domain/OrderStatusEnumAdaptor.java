package com.kpos.domain;

import com.kpos.util.AbstractEnumToIntegerTypeAdapter;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/13/12 11:53 PM
 */
public class OrderStatusEnumAdaptor extends AbstractEnumToIntegerTypeAdapter<OrderStatusEnum> {
    public OrderStatusEnumAdaptor () {
    }

    @Override
    protected OrderStatusEnum getEnumFromInt (int anIntValue) {
        return OrderStatusEnum.parseFromStatusCode(anIntValue);
    }

    @Override
    public Class returnedClass () {
        return OrderStatusEnum.class;
    }
}
