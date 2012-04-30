package com.kpos.dao;

import com.kpos.domain.OrderItemOption;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 4/28/12 10:42 PM
 */
public class OrderItemOptionDao extends AbstractJpaDao<OrderItemOption> implements IOrderItemOptionDao {
    @Override
    protected Class getEntityClass() {
        return OrderItemOption.class;
    }
}
