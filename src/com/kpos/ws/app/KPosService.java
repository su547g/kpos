
/*
 * 
 */

package com.kpos.ws.app;

import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceFeature;
import javax.xml.ws.Service;

/**
 * This class was generated by Apache CXF 2.2.8
 * Mon Mar 26 20:26:44 EDT 2012
 * Generated source version: 2.2.8
 * 
 */


@WebServiceClient(name = "KPosService", 
                  wsdlLocation = "file:wsdl/kpos.wsdl",
                  targetNamespace = "http://ws.kpos.com/app") 
public class KPosService extends Service {

    public final static URL WSDL_LOCATION;
    public final static QName SERVICE = new QName("http://ws.kpos.com/app", "KPosService");
    public final static QName KPosPort = new QName("http://ws.kpos.com/app", "KPosPort");
    static {
        URL url = null;
        try {
            url = new URL("file:wsdl/kpos.wsdl");
        } catch (MalformedURLException e) {
            System.err.println("Can not initialize the default wsdl from file:wsdl/kpos.wsdl");
            // e.printStackTrace();
        }
        WSDL_LOCATION = url;
    }

    public KPosService(URL wsdlLocation) {
        super(wsdlLocation, SERVICE);
    }

    public KPosService(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public KPosService() {
        super(WSDL_LOCATION, SERVICE);
    }

    /**
     * 
     * @return
     *     returns KPosPortType
     */
    @WebEndpoint(name = "KPosPort")
    public KPosPortType getKPosPort() {
        return super.getPort(KPosPort, KPosPortType.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns KPosPortType
     */
    @WebEndpoint(name = "KPosPort")
    public KPosPortType getKPosPort(WebServiceFeature... features) {
        return super.getPort(KPosPort, KPosPortType.class, features);
    }

}
