package com.kpos.service;

import java.util.Date;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 10/15/12 10:46 PM
 */
public interface IFinanceService {
    SaleSummary computeSales(Date from, Date to);
}
