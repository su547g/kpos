package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 12/6/12 10:31 PM
 */
@Entity
@Table(name = "MENU_GROUP")
public class MenuGroup extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "menuGroup", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "CATEGORY_2_GROUP_FK")
    @OnDelete(action = OnDeleteAction.NO_ACTION)
    private List<MenuCategory> categories = new ArrayList<MenuCategory>();

    @Override
    public Long getId() {
        return id;
    }
    
    public void setId(Long aId) {
        id = aId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<MenuCategory> getCategories() {
        return categories;
    }

    public void setCategories(List<MenuCategory> categories) {
        this.categories = categories;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MenuGroup menuGroup = (MenuGroup) o;

        if (id != null ? !id.equals(menuGroup.id) : menuGroup.id != null) return false;
        if (name != null ? !name.equals(menuGroup.name) : menuGroup.name != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}
