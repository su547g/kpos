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
 * Date: 3/9/12 10:45 PM
 */
@NamedQueries({
        @NamedQuery(
                name = "findPrinterByName",
                query = "from Printer p where p.name = :aName"
        ),
        @NamedQuery(
                name = "listPrintersByNameAsc",
                query = "from Printer p order by p.name asc"
        )
})
@Entity
@Table(name = "PRINTER")
public class Printer extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    //@Column(name = "server", nullable = true)
    //private String server;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "ip_addr", nullable = true)
    private String ipAddress;

    @Column(name = "real_name", nullable = false)
    private String realName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "printer", orphanRemoval = true, fetch = FetchType.LAZY)
    @ForeignKey(name = "PRINTJOB_2_PRINTER_FK")
    private List<PrintJob> printJobs = new ArrayList<PrintJob>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    /*public String getServer() {
        return server;
    }

    public void setServer(String server) {
        this.server = server;
    } */

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public String getRealName() {
        return realName;
    }

    public void setRealName(String realName) {
        this.realName = realName;
    }

    public List<PrintJob> getPrintJobs() {
        return printJobs;
    }

    public void setPrintJobs(List<PrintJob> printJobs) {
        this.printJobs = printJobs;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Printer printer = (Printer) o;

        if (id != null ? !id.equals(printer.id) : printer.id != null) return false;
        if (ipAddress != null ? !ipAddress.equals(printer.ipAddress) : printer.ipAddress != null) return false;
        if (name != null ? !name.equals(printer.name) : printer.name != null) return false;
        if (realName != null ? !realName.equals(printer.realName) : printer.realName != null) return false;
        //if (server != null ? !server.equals(printer.server) : printer.server != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        //result = 31 * result + (server != null ? server.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (ipAddress != null ? ipAddress.hashCode() : 0);
        result = 31 * result + (realName != null ? realName.hashCode() : 0);
        return result;
    }
}
