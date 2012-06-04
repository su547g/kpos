package com.kpos.dao;

import com.kpos.domain.StaffAttendance;

import java.util.Date;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 6/3/12 12:11 AM
 */
public interface IAttendanceDao extends IDao<StaffAttendance> {
    StaffAttendance findForDay(Date workDay);
}
