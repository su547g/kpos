package com.kpos.dao;

import com.kpos.domain.User;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 5/27/12 5:17 PM
 */
public class UserDao extends AbstractJpaDao<User> implements IUserDao {
    @Override
    protected Class getEntityClass() {
        return User.class;
    }
}
