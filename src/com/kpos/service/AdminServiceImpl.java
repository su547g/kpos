package com.kpos.service;

import com.kpos.dao.ITaxDao;
import com.kpos.domain.CompanyTax;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 12/6/12 7:56 PM
 */
@Component
public class AdminServiceImpl implements IAdminService {
    @Autowired
    private ITaxDao taxDao;

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public long saveCompanyTax(CompanyTax aTax) {
        if(aTax.getId() != null && aTax.getId() > 0) {
            CompanyTax tax = taxDao.findById(aTax.getId());
            if(tax != null) {
                tax.setDescription(aTax.getDescription());
                tax.setName(aTax.getName());
                tax.setRate(aTax.getRate());
                tax.setLastUpdated(new Date());
                taxDao.merge(tax);
                return tax.getId();
            } else {
                return -1;
            }
        }
        aTax.setCreatedOn(new Date());
        aTax.setLastUpdated(new Date());
        taxDao.insert(aTax);
        return aTax.getId();
    }

    @Override
    public List<CompanyTax> listCompanyTaxes() {
        return taxDao.findAll();
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.DEFAULT, rollbackFor = java.lang.Throwable.class)
    public boolean deleteTax(long id) {
        return taxDao.delete(id);
    }
}
