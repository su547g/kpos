package com.kpos.domain;

import javax.persistence.*;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:18 PM
 */
@NamedQueries({
    @NamedQuery(
            name = "findTableByName",
            query = "from RestaurantTable p where p.name = :aName"
    ),
    @NamedQuery(
            name = "listTablesByNameAsc",
            query = "from RestaurantTable p order by p.name asc"
    )
})
@Entity
@Table(name = "RESTAURANT_TABLE")
public class RestaurantTable extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    
    @Column(name = "name")
    private String name;

    @Column(name = "x")
    private int coordinate_x;
    
    @Column(name = "y")
    private int coordinate_y;

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

    public int getCoordinate_x() {
        return coordinate_x;
    }

    public void setCoordinate_x(int coordinate_x) {
        this.coordinate_x = coordinate_x;
    }

    public int getCoordinate_y() {
        return coordinate_y;
    }

    public void setCoordinate_y(int coordinate_y) {
        this.coordinate_y = coordinate_y;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RestaurantTable that = (RestaurantTable) o;

        if (coordinate_x != that.coordinate_x) return false;
        if (coordinate_y != that.coordinate_y) return false;
        if (id != null ? !id.equals(that.id) : that.id != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + coordinate_x;
        result = 31 * result + coordinate_y;
        return result;
    }
}
