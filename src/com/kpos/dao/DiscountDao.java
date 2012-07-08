package com.kpos.dao;

import com.kpos.domain.CompanyDiscount;
import org.springframework.stereotype.Repository;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 6/21/12 11:37 PM
 */
@Repository
public class DiscountDao extends AbstractJpaDao<CompanyDiscount> implements IDiscountDao {
    @Override
    protected Class getEntityClass() {
        return CompanyDiscount.class;
    }
}
