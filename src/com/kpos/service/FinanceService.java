package com.kpos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 10/15/12 10:46 PM
 */
@Component
public class FinanceService implements IFinanceService {
    private static String SALES_SQL = "select sum(total_price), sum(tax), sum(gratuity) from order_bill where LAST_UPDATED between ? and ?";

    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    @Override
    public SaleSummary computeSales(Date from, Date to) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        final String fromStr = dateFormat.format(from);
        final String toStr = dateFormat.format(to);

        return jdbcTemplate.query(SALES_SQL,
                new PreparedStatementSetter() {
                    @Override
                    public void setValues(PreparedStatement preparedStatement) throws SQLException {
                        preparedStatement.setString(1, fromStr);
                        preparedStatement.setString(2, toStr);
                    }
                },
                new ResultSetExtractor<SaleSummary>() {
                    @Override
                    public SaleSummary extractData(ResultSet resultSet) throws SQLException, DataAccessException {
                        SaleSummary summary = new SaleSummary();
                        while(resultSet.next()) {
                            summary.setTotalSale(resultSet.getDouble(1));
                            summary.setTax(resultSet.getDouble(2));
                            summary.setTips(resultSet.getDouble(3));
                        }
                        return summary;
                    }
                });
    }
}
