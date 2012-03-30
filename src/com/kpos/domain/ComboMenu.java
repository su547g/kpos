package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/29/12 8:38 PM
 */
@Entity
@Table(name = "COMBO_MENU")
public class ComboMenu extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "combo", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "SECTION_2_COMBO_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<ComboMenuSection> sections;

    private ComboMenu combo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<ComboMenuSection> getSections() {
        return sections;
    }

    public void setSections(List<ComboMenuSection> sections) {
        this.sections = sections;
    }
}
