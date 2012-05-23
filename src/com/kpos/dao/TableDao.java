package com.kpos.dao;

import com.kpos.domain.RestaurantTable;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/2/12
 */
@Repository
public class TableDao extends AbstractJpaDao<RestaurantTable> implements ITableDao {
    @Override
    protected Class getEntityClass() {
        return RestaurantTable.class;
    }

    @Override
    public RestaurantTable findTableByName(String aName) {
        Query namedQuery = this.entityManager.createNamedQuery("findTableByName");
        namedQuery.setParameter("aName", aName);
        List resultList = namedQuery.getResultList();
        if(resultList != null && resultList.size() > 0) {
            return (RestaurantTable)resultList.get(0);
        }
        return null;
    }

    @Override
    public List<RestaurantTable> listTablesByNameAsc() {
        Query namedQuery = this.entityManager.createNamedQuery("listTablesByNameAsc");
        return (List<RestaurantTable>)namedQuery.getResultList();
    }

    @Override
    public List<RestaurantTable> listTablesForArea(long aId) {
        Query namedQuery = this.entityManager.createNamedQuery("listTablesForArea");
        namedQuery.setParameter("aId", aId);
        return (List<RestaurantTable>)namedQuery.getResultList();
    }
}
