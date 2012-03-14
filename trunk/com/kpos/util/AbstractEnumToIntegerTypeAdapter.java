package com.kpos.util;

import org.hibernate.HibernateException;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 12:01 AM
 */
public abstract class AbstractEnumToIntegerTypeAdapter<T extends IIntegerMappedEnum> extends AbstractEnumToValueTypeAdapter{
    private final static Logger log = LoggerFactory.getLogger(AbstractEnumToIntegerTypeAdapter.class);

    public AbstractEnumToIntegerTypeAdapter () {
        super(Types.INTEGER);
    }

    @Override
    public Object nullSafeGet (ResultSet aRs, String[] aNames, Object aOwner) throws HibernateException, SQLException {
        int intValue = aRs.getInt(aNames[0]);
        return aRs.wasNull() ? null : this.getEnumFromInt(intValue);
    }

    @Override
    public void nullSafeSet (PreparedStatement aPs, Object aValue, int anIndex) throws HibernateException, SQLException {
        if (aValue == null) {
            aPs.setNull(anIndex, Types.INTEGER);
        }
        else {
            aPs.setInt(anIndex, ((IIntegerMappedEnum) aValue).getMappedIntegerValue());
        }
    }

    /**
     * concrete descendants must implement this method, returning the appropriate enum instance
     * for the supplied integer value.
     *
     * @param anIntValue the int value for the enum member
     */
    protected abstract T getEnumFromInt (int anIntValue);
}
