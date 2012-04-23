package com.kpos.dao;

import com.kpos.domain.SeatingArea;

import javax.persistence.NoResultException;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 4/22/12 11:52 PM
 */
public class SeatingAreaDao extends AbstractJpaDao<SeatingArea> implements ISeatingAreaDao {
    @Override
    protected Class getEntityClass() {
        return SeatingArea.class;
    }

    @Override
    public SeatingArea findByName(String aName) {
        Query namedQuery = this.entityManager.createNamedQuery("findSeatingAreaByName");
        namedQuery.setParameter("aName", aName);
        try {
            Object obj = namedQuery.getSingleResult();

            if(obj != null) {
                return (SeatingArea)obj;
            }
            return null;
        }catch (NoResultException exception) {
            return null;
        }
    }

    @Override
    public List<SeatingArea> listByName(boolean isASC) {
        Query namedQuery = null;
        if(isASC) namedQuery = this.entityManager.createNamedQuery("listSeatingAreasByNameAsc");
        else namedQuery = this.entityManager.createNamedQuery("listSeatingAreasByNameDesc");
        return (List<SeatingArea>)namedQuery.getResultList();
    }
}
