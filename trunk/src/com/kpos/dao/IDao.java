package com.kpos.dao;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/9/12 10:14 PM
 */
import java.util.List;

/**
 * <p>base interface which is common for all DAO objects</p>
 *
 * @version $Id: $
 */
public interface IDao<T> {
    /**
     * inserts the supplied object
     *
     * @param anObject - the object to be saved
     * @return the same object passed as a parameter
     */
    T insert (T anObject);


    /**
     * updates the supplied object
     *
     * @param anObject - the object to be saved
     * @return the managed object (NOT the same object passed in)
     * @deprecated use "merge" if you need merge semantics. Otherwise, updates should
     *             happen implicitly if you dirty a persistent (attached) object (assuming the
     *             equals method on the object is properly implemented).
     */
    T update (T anObject);


    /**
     * delete the object identified by the target ID.
     *
     * @param aTargetId - the primary key of the object to be deleted
     * @return true if the object was deleted, false otherwise.
     */
    boolean delete (Long aTargetId);

    /**
     * delete the managed object
     *
     * @param anObject object to remove
     * @return true if the object was deleted, false otherwise
     */
    boolean delete (T anObject);

    /**
     * @return returns all instances.  Derived classes may choose not to implement
     *         this (e.g. Rer).
     */
    List<T> findAll ();

    /**
     * @return the number of objects in the database
     */
    long count ();

    /**
     * merges the state of a detached object into the current persistence context.
     *
     * @param aDetachedObject an object which already exists in the DB, but has been
     *                        potentially updated, and now needs to be merged into the current persistence context
     * @return a persistent object which IS associated with the current persistence
     *         context.
     */
    T merge (T aDetachedObject);


    /**
     * find an object by its primary key
     *
     * @param anId - the primary key of the object
     * @return the object which has the supplied ID, or null if its not found
     */
    T findById (Long anId);

    T findById (String anId);
}