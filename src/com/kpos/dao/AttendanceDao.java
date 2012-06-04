package com.kpos.dao;

import com.kpos.domain.StaffAttendance;

import javax.persistence.NoResultException;
import javax.persistence.Query;
import java.util.Date;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 6/3/12 12:14 AM
 */
public class AttendanceDao extends AbstractJpaDao<StaffAttendance> implements IAttendanceDao {
    @Override
    protected Class getEntityClass() {
        return StaffAttendance.class;
    }

    @Override
    public StaffAttendance findForDay(Date workDay) {
        Query namedQuery = this.entityManager.createNamedQuery("findAttendanceForDay");
        namedQuery.setParameter("aDay", workDay);
        try {
            Object obj = namedQuery.getSingleResult();
            if(obj != null) {
                return (StaffAttendance)obj;
            }
            return null;
        }catch (NoResultException e) {
            return null;
        }
    }
}
