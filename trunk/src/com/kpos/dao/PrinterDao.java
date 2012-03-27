package com.kpos.dao;

import com.kpos.domain.Printer;
import org.springframework.stereotype.Repository;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/25/12 5:33 PM
 */
@Repository
public class PrinterDao extends AbstractJpaDao<Printer> implements IPrinterDao {

    @Override
    protected Class getEntityClass() {
        return Printer.class;
    }

}
