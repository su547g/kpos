package com.kpos.dao;

import com.kpos.domain.Bill;
import org.springframework.stereotype.Repository;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/3/12
 * Time: 8:22 PM
 */
@Repository
public class BillDao extends AbstractJpaDao<Bill> implements IBillDao {
    @Override
    protected Class getEntityClass() {
        return Bill.class;
    }
}
