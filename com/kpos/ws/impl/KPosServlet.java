package com.kpos.ws.impl;

import com.kpos.ws.interceptors.*;
import org.apache.cxf.BusFactory;
import org.apache.cxf.transport.servlet.CXFNonSpringServlet;
import org.springframework.beans.factory.annotation.Configurable;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.ws.Endpoint;
import org.apache.cxf.jaxws.EndpointImpl;
import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/11/12 4:51 PM
 */
@Configurable
public class KPosServlet extends CXFNonSpringServlet {
    private static final long serialVersionUID = 1L;
    private final static Logger log = LoggerFactory.getLogger(KPosServlet.class);

    @Override
    protected void doOptions(HttpServletRequest request,
                             HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Overwrite, Destination, Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
        response.setStatus(HttpServletResponse.SC_OK);
    }


    @Override
    public void loadBus (ServletConfig servletConfig) {
        try {
            super.loadBus(servletConfig);
        } catch (ServletException e) {
            e.printStackTrace();
            log.error("Failed to loadBus", e);
            return;
        }
        BusFactory.setDefaultBus(getBus());

        log.debug("Loading BizCardServlet");

        // create a proxy for the client web services and set it as the clientImplementer
        EndpointImpl eCardAppEndpoint = (EndpointImpl) Endpoint.publish("/kposService", KPosServiceProxy.getProxy(new KPosPortImpl()));

        log.debug("Loading interceptors");

        //--- input interceptors...
        eCardAppEndpoint.getServer().getEndpoint().getInInterceptors().add(new KPosRecordRawSoapMessageInterceptor());
        eCardAppEndpoint.getServer().getEndpoint().getInInterceptors().add(new KPosLogRawSoapMessageInterceptor());
        eCardAppEndpoint.getServer().getEndpoint().getInInterceptors().add(new KPosSessionInterceptor());

        //--- output interceptors...
        eCardAppEndpoint.getServer().getEndpoint().getOutInterceptors().add(new KPosLogRawSoapResponseInterceptor());
        eCardAppEndpoint.getServer().getEndpoint().getOutInterceptors().add(new AddSoapHeaderOutInterceptor());

        log.debug("Finished loading BizCardServlet");
    }
}
