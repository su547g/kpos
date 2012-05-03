package com.kpos.dao;

import com.kpos.domain.OrderItemOption;
import org.springframework.stereotype.Repository;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 4/28/12 10:42 PM
 */
@Repository
public class OrderItemOptionDao extends AbstractJpaDao<OrderItemOption> implements IOrderItemOptionDao {
    @Override
    protected Class getEntityClass() {
        return OrderItemOption.class;
    }
}
