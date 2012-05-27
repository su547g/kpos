package com.kpos.dao;

import com.kpos.domain.PaymentRecord;
import org.springframework.stereotype.Repository;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 5/26/12 11:13 PM
 */
@Repository
public class PaymentRecordDao extends AbstractJpaDao<PaymentRecord> implements IPaymentRecordDao {
    @Override
    protected Class getEntityClass() {
        return PaymentRecord.class;
    }
}
