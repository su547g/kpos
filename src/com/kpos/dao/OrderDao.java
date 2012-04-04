package com.kpos.dao;

import com.kpos.domain.Order;
import org.springframework.stereotype.Repository;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/3/12
 * Time: 8:20 PM
 */
@Repository
public class OrderDao extends AbstractJpaDao<Order> implements IOrderDao {
    @Override
    protected Class getEntityClass() {
        return Order.class;
    }
}
