package com.kpos.dao;

import com.kpos.domain.Order;

import java.util.Date;
import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/3/12
 * Time: 8:19 PM
 */
public interface IOrderDao extends IDao<Order> {
    List<Order> fetchAllOrdersByTime(boolean isASC);

    List<Order> fetchOrdersForStatusByTime(int aStatus, boolean isASC);

    List<Order> fetchOrdersForTable(long aTableId, int aStatus);

    List<Order> fetchOrdersForDateRange(Date aStart, Date aEnd);

    List<Order> fetchOrdersForDateRangeStatus(Date aStart, Date aEnd, int aStatus);
}
