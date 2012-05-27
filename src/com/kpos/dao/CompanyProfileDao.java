package com.kpos.dao;

import com.kpos.domain.CompanyProfile;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 5/27/12 5:20 PM
 */
public class CompanyProfileDao extends AbstractJpaDao<CompanyProfile> implements ICompanyDao {
    @Override
    protected Class getEntityClass() {
        return CompanyProfile.class;
    }
}
