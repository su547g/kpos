package com.kpos.ws.interceptors;

import org.apache.cxf.interceptor.Fault;
import org.apache.cxf.interceptor.LoggingOutInterceptor;
import org.apache.cxf.message.Message;
import org.apache.cxf.phase.Phase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.xml.namespace.QName;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/11/12 5:02 PM
 */
public class KPosLogRawSoapResponseInterceptor extends LoggingOutInterceptor {
    private final static Logger log = LoggerFactory.getLogger(KPosLogRawSoapResponseInterceptor.class);

    public KPosLogRawSoapResponseInterceptor () {
        super( Phase.PRE_STREAM);
    }

    @Override
    public void handleMessage (Message message) throws Fault {
        QName op = (QName) message.get("javax.xml.ws.wsdl.operation");
        if (op == null || !op.getLocalPart().startsWith("reportOutput")) {
            super.handleMessage(message);
        }
        else {
            log.warn("soap response intercepted: " + message.getId());
        }
    }

}
