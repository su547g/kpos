package com.kpos.dao;

import com.kpos.domain.CustomerInfo;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 4/27/12 11:00 PM
 */
public class CustomerInfoDao extends AbstractJpaDao<CustomerInfo> implements ICustomerInfoDao{
    @Override
    protected Class getEntityClass() {
        return CustomerInfo.class;
    }

    @Override
    public CustomerInfo findByPhoneNumber(String phone) {
        Query namedQuery = this.entityManager.createNamedQuery("CustomerInfo.findByPhone");
        namedQuery.setParameter("aPhone", phone);
        List result = namedQuery.getResultList();
        if(result.isEmpty()) {
            return null;
        } else {
            return (CustomerInfo)result.get(0);
        }
    }
}
