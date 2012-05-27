package com.kpos.dao;

import com.kpos.domain.FunctionModule;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 5/27/12 5:19 PM
 */
public class FunctionModuleDao extends AbstractJpaDao<FunctionModule> implements IFunctionModuleDao {
    @Override
    protected Class getEntityClass() {
        return FunctionModule.class;
    }
}
