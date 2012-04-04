package com.kpos.dao;

import com.kpos.domain.StaffMember;
import org.springframework.stereotype.Repository;

/**
 * Created by IntelliJ IDEA.
 * User: kkwang
 * Date: 4/3/12
 * Time: 8:25 PM
 */
@Repository
public class StaffMemberDao extends AbstractJpaDao<StaffMember> implements IStaffMemberDao {
    @Override
    protected Class getEntityClass() {
        return StaffMember.class;
    }
}
