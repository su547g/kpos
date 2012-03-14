package com.kpos.ws.interceptors;

import org.apache.cxf.helpers.IOUtils;
import org.apache.cxf.interceptor.Fault;
import org.apache.cxf.interceptor.LoggingMessage;
import org.apache.cxf.io.CachedOutputStream;
import org.apache.cxf.message.Message;
import org.apache.cxf.phase.AbstractPhaseInterceptor;
import org.apache.cxf.phase.Phase;

import java.io.IOException;
import java.io.InputStream;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/11/12 5:00 PM
 */
public class KPosRecordRawSoapMessageInterceptor extends AbstractPhaseInterceptor {
    private int limit = 100 * 1024;

    final static String KEY = KPosRecordRawSoapMessageInterceptor.class.getName() + ".LogMessage";

    public KPosRecordRawSoapMessageInterceptor () {
        super(Phase.RECEIVE);
    }

    @Override
    public void handleMessage (Message message) throws Fault {

        //--- short circuit if logging is not enabled...
        if (!KPosLogRawSoapMessageInterceptor.log.isDebugEnabled())
            return;


        //--- NOTE: this is largely based on code from CXF's LogingInInterceptor, with the
        //    exception that the LoggingMessage isn't written out, its only stored in the
        //    Message, then later logged (and removed) by the DartLogRawSoapMessageInterceptor
        //
        //    We do this so that we can have the identity of the invoking user at the time we
        //    log the soap request
        if (message.containsKey(LoggingMessage.ID_KEY)) {
            return;
        }
        String id = (String) message.getExchange().get(LoggingMessage.ID_KEY);
        if (id == null) {
            id = LoggingMessage.nextId();
            message.getExchange().put(LoggingMessage.ID_KEY, id);
        }
        message.put(LoggingMessage.ID_KEY, id);
        final LoggingMessage logMessage = new LoggingMessage("Inbound Message\n----------------------------", id);

        //--- record the LogMessage here (will be logged & removed in DartLogRawSoapMessageInterceptor).
        message.put(KEY, logMessage);


        Integer responseCode = (Integer) message.get(Message.RESPONSE_CODE);
        if (responseCode != null) {
            logMessage.getResponseCode().append(responseCode);
        }

        String encoding = (String) message.get(Message.ENCODING);

        if (encoding != null) {
            logMessage.getEncoding().append(encoding);
        }
        String ct = (String) message.get(Message.CONTENT_TYPE);
        if (ct != null) {
            logMessage.getContentType().append(ct);
        }
        Object headers = message.get(Message.PROTOCOL_HEADERS);

        if (headers != null) {
            logMessage.getHeader().append(headers);
        }
        String uri = (String) message.get(Message.REQUEST_URI);
        if (uri != null) {
            logMessage.getAddress().append(uri);
        }

        InputStream is = message.getContent(InputStream.class);
        if (is != null) {
            CachedOutputStream bos = new CachedOutputStream();
            try {
                IOUtils.copy(is, bos);

                bos.flush();
                is.close();

                message.setContent(InputStream.class, bos.getInputStream());
                if (bos.getTempFile() != null) {
                    //large thing on disk...
                    logMessage.getMessage().append("\nMessage (saved to tmp file):\n");
                    logMessage.getMessage().append("Filename: " + bos.getTempFile().getAbsolutePath() + "\n");
                }
                if (bos.size() > limit) {
                    logMessage.getMessage().append("(message truncated to " + limit + " bytes)\n");
                }
                bos.writeCacheTo(logMessage.getPayload(), limit);

                bos.close();
            }
            catch (IOException e) {
                throw new Fault(e);
            }
        }
    }
}
