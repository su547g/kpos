package com.kpos.dao;

import com.kpos.domain.PrintJob;
import com.kpos.domain.Printer;

import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/25/12 5:32 PM
 */
public interface IPrintJobDao extends IDao<PrintJob> {
    PrintJob findByName(String aName);

    List<PrintJob> listByNameAsc();;

    PrintJob findById(String aId);
}
