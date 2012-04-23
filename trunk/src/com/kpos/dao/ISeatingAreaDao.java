package com.kpos.dao;

import com.kpos.domain.SeatingArea;

import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 4/22/12 11:53 PM
 */
public interface ISeatingAreaDao extends IDao<SeatingArea> {
    SeatingArea findByName(String aName);

    List<SeatingArea> listByName(boolean isASC);
}
