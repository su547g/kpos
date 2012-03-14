package com.kpos.service;

import com.kpos.dao.ICategoryDao;
import com.kpos.domain.Category;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/10/12 11:36 PM
 */
public class ContentManagementServiceImpl {
    private final static Logger log = LoggerFactory.getLogger(ContentManagementServiceImpl.class);

    @Autowired
    private ICategoryDao categoryDao;

    public CreateResult<Category> createMenuCategory(Category category) {
        try {
            CreateResult<Category> result = new CreateResult<Category>();

            return result;
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            return new CreateResult<Category>(e);
        }
    }
}
