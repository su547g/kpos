package com.kpos.dao;

import com.kpos.domain.GlobalOption;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/3/12
 */
public interface IGlobalOptionDao extends IDao<GlobalOption> {
    GlobalOption findByName(String aName);
}
