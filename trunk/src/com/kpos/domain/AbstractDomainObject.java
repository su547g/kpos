package com.kpos.domain;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/9/12 9:54 PM
 */
import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;

@MappedSuperclass
public abstract class AbstractDomainObject implements IAbstractEntity, Serializable {

    /**
     * optimistic concurrency attribute.
     */
    @Version
    @Column(name = "VERSION")
    private Integer version = Integer.valueOf(0);

    @Column(name = "CREATED_ON")
    protected Date createdOn;

    @Column(name = "LAST_UPDATED")
    protected Date lastUpdated;

    @ManyToOne(cascade = {CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JoinColumn(name = "CREATED_BY")
    protected User createdBy;

    @ManyToOne(cascade = {CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JoinColumn(name = "LAST_UPDATED_BY")
    protected User lastUpdatedBy;

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date date) {
        createdOn = date;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(Date date) {
        lastUpdated = date;
    }

    public User getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(User user) {
        createdBy = user;
    }

    public User getLastUpdatedBy() {
        return lastUpdatedBy;
    }

    public void setLastUpdatedBy(User user) {
        lastUpdatedBy = user;
    }
}
