package com.kpos.dao;

import com.kpos.domain.Roles;
import org.springframework.stereotype.Repository;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 6/15/12 10:01 PM
 */
@Repository
public class RolesDao extends AbstractJpaDao<Roles> implements IRoleDao {
    @Override
    protected Class getEntityClass() {
        return Roles.class;
    }
}
