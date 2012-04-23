package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 4/18/12 9:58 PM
 */
@NamedQueries({
        @NamedQuery(
                name = "findSeatingAreaByName",
                query = "from SeatingArea c where c.name = :aName"
        ),
        @NamedQuery(
                name = "listSeatingAreasByNameAsc",
                query = "from SeatingArea c order by c.name asc"
        ),
        @NamedQuery(
               name = "listSeatingAreasByNameDesc",
               query = "from SeatingArea c order by c.name desc"
        )
})
@Entity
@Table(name = "SEATING_AREA")
public class SeatingArea extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "area", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "TABLE_2_AREA_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<RestaurantTable> tables;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<RestaurantTable> getTables() {
        return tables;
    }

    public void setTables(List<RestaurantTable> tables) {
        this.tables = tables;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SeatingArea that = (SeatingArea) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}
