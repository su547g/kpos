package com.kpos.dao;

import com.kpos.domain.OrderItem;
import org.springframework.stereotype.Repository;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 5/20/12 10:22 PM
 */
@Repository
public class OrderItemDao extends AbstractJpaDao<OrderItem> implements IOrderItemDao {
    @Override
    protected Class getEntityClass() {
        return OrderItem.class;
    }
}
