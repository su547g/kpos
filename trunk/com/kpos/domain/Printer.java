package com.kpos.domain;

import javax.persistence.*;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/9/12 10:45 PM
 */
@Entity
@Table(name = "PRINTER")
public class Printer extends AbstractDomainObject {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "server", nullable = false)
    private String server;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "ip_addr", nullable = true)
    private String ipAddress;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getServer() {
        return server;
    }

    public void setServer(String server) {
        this.server = server;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Printer printer = (Printer) o;

        if (id != null ? !id.equals(printer.id) : printer.id != null) return false;
        if (ipAddress != null ? !ipAddress.equals(printer.ipAddress) : printer.ipAddress != null) return false;
        if (name != null ? !name.equals(printer.name) : printer.name != null) return false;
        if (server != null ? !server.equals(printer.server) : printer.server != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (server != null ? server.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (ipAddress != null ? ipAddress.hashCode() : 0);
        return result;
    }
}
