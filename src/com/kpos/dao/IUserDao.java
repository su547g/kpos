package com.kpos.dao;

import com.kpos.domain.User;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 5/27/12 5:17 PM
 */
public interface IUserDao extends IDao<User> {
    public User findByPasscode(String aPasscode);
}
