package com.kpos.dao;

import com.kpos.domain.MenuGroup;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 12/11/12 11:01 PM
 */
public interface IMenuGroupDao extends IDao<MenuGroup> {
    MenuGroup findMenuGroupByName(String aName);

    long getDefaultGroupId();

    MenuGroup getDefaultGroup();
}
