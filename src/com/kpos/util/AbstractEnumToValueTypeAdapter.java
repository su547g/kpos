package com.kpos.util;

import org.hibernate.HibernateException;
import org.hibernate.usertype.UserType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.Serializable;

/**
 * <p>used for mapping an Enum to a JDBC value in a more custom way</p>
 *
 * @author Kanishka Ratnayake (kanishka@motio.com)
 */
public abstract class AbstractEnumToValueTypeAdapter implements UserType {
    private final static Logger log = LoggerFactory.getLogger(AbstractEnumToValueTypeAdapter.class);

    private final int[] SQL_TYPES = new int[1];

    public AbstractEnumToValueTypeAdapter (int aSqlType) {
        SQL_TYPES[0] = aSqlType;
    }

    @Override
    public int[] sqlTypes () {
        return SQL_TYPES;
    }

    @Override
    public Object deepCopy (Object anEnumMember) throws HibernateException {
        return anEnumMember;
    }

    @Override
    public boolean equals (Object aLhsEnumMember, Object aRhsEnumMember) throws HibernateException {
        return aLhsEnumMember == null ? aRhsEnumMember == null : aLhsEnumMember.equals(aRhsEnumMember);
    }

    @Override
    public boolean isMutable () {
        return false;
    }

    @Override
    public Object assemble (Serializable aCachedEnumMember, Object aOwner) {
        return aCachedEnumMember;
    }

    @Override
    public Object replace (Object aNewEnumMember, Object aOldEnumMember, Object aOwner) {
        return aNewEnumMember;
    }

    @Override
    public Serializable disassemble (Object aEnumMemberToCache) {
        if (!(aEnumMemberToCache instanceof Serializable))
            throw new HibernateException(aEnumMemberToCache.toString() + " is not serializable");

        return (Serializable) deepCopy(aEnumMemberToCache);
    }

    @Override
    public int hashCode (Object anEnum) {
        return anEnum != null ? anEnum.hashCode() : 0;
    }
}