package com.kpos.domain;

import org.hibernate.annotations.ForeignKey;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/29/12 9:02 PM
 */
@Entity
@Table(name = "COMBO_SECTION")
public class ComboMenuSection extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "combo_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private ComboMenu combo;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "combo", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "ITEM_2_SECTION_FK")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<SaleItem> saleItems;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ComboMenu getCombo() {
        return combo;
    }

    public void setCombo(ComboMenu combo) {
        this.combo = combo;
    }

    public List<SaleItem> getSaleItems() {
        return saleItems;
    }

    public void setSaleItems(List<SaleItem> saleItems) {
        this.saleItems = saleItems;
    }
}
