package com.kpos.dao;

import com.kpos.domain.GlobalOption;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/3/12
 */
@Repository
public class GlobalOptionDao extends AbstractJpaDao<GlobalOption> implements IGlobalOptionDao {
    @Override
    protected Class getEntityClass() {
        return GlobalOption.class;
    } 
    
    public GlobalOption findByName(String aName) {
        Query query = entityManager.createNamedQuery("findGlobalOptionByName");
        List options = query.getResultList();
        if(options == null || options.isEmpty()) {
            return null;
        } else {
            return (GlobalOption)options.get(0);
        }
    } 
}
