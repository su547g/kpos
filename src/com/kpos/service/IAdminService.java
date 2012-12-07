package com.kpos.service;

import com.kpos.domain.CompanyTax;

import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 12/6/12 7:54 PM
 */
public interface IAdminService {
    long saveCompanyTax(CompanyTax tax);

    List<CompanyTax> listCompanyTaxes();

    boolean deleteTax(long id);
}
