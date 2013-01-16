package com.kpos.domain;

import javax.persistence.*;

/**
 * Created for kpos
 * User: automne
 * Date: 12/24/12
 * Time: 9:42 PM
 */
@NamedQueries({
        @NamedQuery(
                name = "findPrintJobByName",
                query = "from PrintJob p where p.name = :aName"
        ),
        @NamedQuery(
                name = "findPrintJobById",
                query = "from PrintJob p where p.id = :aId"
        ),
        @NamedQuery(
                name = "listPrintJobsByNameAsc",
                query = "from PrintJob p order by p.name asc"
        )
})
@Entity
@Table(name = "PRINT_JOB")
public class PrintJob extends AbstractDomainObject {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "printer_id")
    private Printer printer;

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

    public Printer getPrinter() {
        return printer;
    }

    public void setPrinter(Printer printer) {
        this.printer = printer;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || this.getClass() != o.getClass()) return false;

        PrintJob that = (PrintJob) o;

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
