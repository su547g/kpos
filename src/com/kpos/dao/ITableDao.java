package com.kpos.dao;

import com.kpos.domain.RestaurantTable;

import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/2/12
 */
public interface ITableDao extends IDao<RestaurantTable> {
    RestaurantTable findTableByName(String aName);

    List<RestaurantTable> listTablesByNameAsc();
}
