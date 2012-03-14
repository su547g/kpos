package com.kpos.ws.interceptors;

import javax.servlet.http.HttpServletResponse;

import org.apache.cxf.binding.soap.SoapMessage;
import org.apache.cxf.binding.soap.interceptor.AbstractSoapInterceptor;
import org.apache.cxf.binding.soap.interceptor.SoapOutInterceptor;
import org.apache.cxf.interceptor.Fault;
import org.apache.cxf.phase.Phase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/11/12 4:56 PM
 */
public class AddSoapHeaderOutInterceptor extends AbstractSoapInterceptor {
    private final static Logger log = LoggerFactory.getLogger(AddSoapHeaderOutInterceptor.class);

    public AddSoapHeaderOutInterceptor () {
        super(Phase.PRE_STREAM);
        this.addAfter(SoapOutInterceptor.class.getName());
    }

    @Override
    public void handleMessage(SoapMessage message) throws Fault {
        HttpServletResponse httpResponse = (HttpServletResponse)message.get("HTTP.RESPONSE");
        httpResponse.setHeader("Access-Control-Allow-Origin", "*");
        //httpResponse.setHeader("Origin", "zazzycard.com");
        httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS");
        httpResponse.setHeader("Access-Control-Allow-Headers", "Overwrite, Destination, Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
        log.debug("Set HTTP headers in response");
    }

}