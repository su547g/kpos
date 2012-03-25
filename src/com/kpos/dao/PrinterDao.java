package com.kpos.dao;

import com.kpos.domain.Printer;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/25/12 5:33 PM
 */
public class PrinterDao extends AbstractJpaDao<Printer> implements IPrinterDao {

    @Override
    protected Class getEntityClass() {
        return Printer.class;
    }

}
