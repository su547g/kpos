package com.kpos.dao;

import com.kpos.domain.FunctionModule;
import org.springframework.stereotype.Repository;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 5/27/12 5:19 PM
 */
@Repository
public class FunctionModuleDao extends AbstractJpaDao<FunctionModule> implements IFunctionModuleDao {
    @Override
    protected Class getEntityClass() {
        return FunctionModule.class;
    }
}
