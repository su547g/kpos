package com.kpos.ws.interceptors;

import org.apache.cxf.interceptor.Fault;
import org.apache.cxf.interceptor.LoggingMessage;
import org.apache.cxf.message.Message;
import org.apache.cxf.phase.AbstractPhaseInterceptor;
import org.apache.cxf.phase.Phase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/11/12 5:06 PM
 */
public class KPosLogRawSoapMessageInterceptor extends AbstractPhaseInterceptor {
    final static Logger log = LoggerFactory.getLogger(KPosLogRawSoapMessageInterceptor.class);

    public KPosLogRawSoapMessageInterceptor () {
        super(Phase.PRE_INVOKE);
        addAfter(KPosLogRawSoapMessageInterceptor.class.getName());
    }

    @Override
    public void handleMessage (Message message) throws Fault {
        LoggingMessage logMessage = (LoggingMessage) message.get(KPosRecordRawSoapMessageInterceptor.KEY);

        if (logMessage != null) {
            message.remove(KPosRecordRawSoapMessageInterceptor.KEY);
            if (log.isDebugEnabled()) {
                log.debug(logMessage.toString());
            }
        }
        else {
            log.debug("failed to find item in message with key [" + KPosRecordRawSoapMessageInterceptor.KEY + "], this interceptor is meant to be used in conjunction with [" + KPosRecordRawSoapMessageInterceptor.class.getName() + "]");
        }

    }
}
