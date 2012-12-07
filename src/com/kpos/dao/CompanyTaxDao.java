package com.kpos.dao;

import com.kpos.domain.CompanyTax;
import org.springframework.stereotype.Repository;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 12/6/12 8:20 PM
 */
@Repository
public class CompanyTaxDao extends AbstractJpaDao<CompanyTax> implements ITaxDao {
    @Override
    protected Class getEntityClass() {
        return CompanyTax.class;
    }
}
