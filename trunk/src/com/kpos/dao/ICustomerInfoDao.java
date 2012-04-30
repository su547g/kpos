package com.kpos.dao;

import com.kpos.domain.CustomerInfo;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 4/27/12 11:01 PM
 */
public interface ICustomerInfoDao {
    CustomerInfo findByPhoneNumber(String phone);
}
