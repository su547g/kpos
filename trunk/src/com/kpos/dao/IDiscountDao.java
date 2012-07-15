package com.kpos.dao;

import com.kpos.domain.CompanyDiscount;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 6/21/12 11:37 PM
 */
public interface IDiscountDao extends IDao<CompanyDiscount> {
    CompanyDiscount findDiscountByRate(double aRate);
}
