package com.kpos.util;

/**
 * <p>Interface which supports mapping an Enum to a specific integer (not Enum.ordinal), for the purpose of
 * persisting to the database.  If you want this behavior for a given Enum, have it implement this interface,
 * and then provide an implementation of {@link AbstractEnumToIntegerTypeAdapter}.
 * For example, see {@link com.kpos.domain.OrderStatusEnum} </p>
 *
 * @author kkwang

 */
public interface IIntegerMappedEnum {
    int getMappedIntegerValue ();
}
