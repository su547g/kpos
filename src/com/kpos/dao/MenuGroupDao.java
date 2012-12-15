package com.kpos.dao;

import com.kpos.domain.MenuGroup;
import org.springframework.stereotype.Repository;

import javax.persistence.NoResultException;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 12/11/12 11:02 PM
 */
@Repository
public class MenuGroupDao extends AbstractJpaDao<MenuGroup> implements IMenuGroupDao {
    private static final long defaultGroupId = 1;

    @Override
    protected Class getEntityClass() {
        return MenuGroup.class;
    }

    @Override
    public MenuGroup findMenuGroupByName(String aName) {
        Query namedQuery = this.entityManager.createNamedQuery("findMenuGroupByName");
        namedQuery.setParameter("aName", aName);
        try {
            Object obj = namedQuery.getSingleResult();

            if(obj != null) {
                return (MenuGroup)obj;
            }
            return null;
        }catch (NoResultException exception) {
            return null;
        }
    }

    @Override
    public long getDefaultGroupId() {
        return defaultGroupId;
    }

    @Override
    public MenuGroup getDefaultGroup() {
        return this.findById(defaultGroupId);
    }


}
