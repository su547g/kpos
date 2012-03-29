package com.kpos.dao;

import com.kpos.domain.Printer;

import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/25/12 5:32 PM
 */
public interface IPrinterDao extends IDao<Printer> {
    Printer findByName(String aName);

    List<Printer> listByNameAsc();
}
