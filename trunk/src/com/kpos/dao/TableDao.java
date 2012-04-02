package com.kpos.dao;

import com.kpos.domain.RestaurantTable;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/2/12
 */
public class TableDao extends AbstractJpaDao<RestaurantTable> implements ITableDao {
    @Override
    protected Class getEntityClass() {
        return RestaurantTable.class;
    }

    @Override
    public RestaurantTable findTableByName(String aName) {
        Query namedQuery = this.entityManager.createNamedQuery("findTableByName");
        namedQuery.setParameter("aName", aName);
        Object obj = namedQuery.getSingleResult();
        if(obj != null) {
            return (RestaurantTable)obj;
        }
        return null;
    }

    @Override
    public List<RestaurantTable> listTablesByNameAsc() {
        Query namedQuery = this.entityManager.createNamedQuery("listTablesByNameAsc");
        return (List<RestaurantTable>)namedQuery.getResultList();
    }
}
