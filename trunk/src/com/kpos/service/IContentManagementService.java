package com.kpos.service;

import com.kpos.domain.*;
import com.kpos.domain.Order;
import com.kpos.ws.app.*;

import java.util.Date;
import java.util.List;

/**
 * Created by kpos.
 * Author: kkwang
 * Date: 3/14/12 11:08 PM
 */
public interface IContentManagementService {
    CreateResult<MenuGroup> createMenuGroup(MenuGroup aGroup);
    DeleteResult deleteMenuGroup(long aId);
    FetchResult<List<MenuGroup>> listMenuGroups();
    UpdateResult<MenuGroup> updateMenuGroup(long aId, String aName, String aDescription);
    
    CreateResult<MenuCategory> createMenuCategory(MenuCategory aCategory, Long aGroupId, List<Long> printerIds);
    
    //boolean addPrintersToCategory(MenuCategory category, List<Long> printerIds);
    
    FetchResult<List<MenuCategory>> listAllCategories();
    FetchResult<List<MenuCategory>> listAllCategories(int begin, int maxSize);
    FetchResult<List<MenuCategory>> listCategoriesForGroup(long aGroupId, int begin, int maxSize);

    FetchResult<MenuCategory> fetchCategory(long aCategoryId);

    UpdateResult<MenuCategory> updateCategory(CategoryType aCategoryType);

    DeleteResult deleteCategory(long aCategoryId);

    CreateResult<SaleItem> createSaleItem(SaleItemType aSaleItemType);

    FetchResult<SaleItem> fetchSaleItem(long aId);
    
    UpdateResult<SaleItem> updateSaleItem(SaleItemType aSaleItemType);
    
    DeleteResult deleteSaleItem(long aId);
    
    FetchResult<List<SaleItem>> listSaleItemsForCategory(long aCategoryId);
    
    CreateResult<SaleItemOption> addSaleItemOption(SaleItemOptionType soapType);

    UpdateResult<SaleItemOption> updateSaleItemOption(SaleItemOptionType soapType);

    FetchResult<SaleItemOption> fetchSaleItemOption(long aId);

    DeleteResult deleteSaleItemOption(long aId);
    
    CreateResult<Printer> createPrinter(PrinterType soapType);
    
    DeleteResult deletePrinter(long aId);
    
    UpdateResult<Printer> updatePrinter(PrinterType soapType);
        
    FetchResult<List<Printer>> listPrinters();

    FetchResult<List<RestaurantTable>> listTables(Long aAreaId);

    CreateResult<RestaurantTable> createRestaurantTable(TableType soapType);

    UpdateResult<RestaurantTable> updateRestaurantTable(TableType soapType);

    DeleteResult deleteTable(long aId);

    DeleteResult deleteCategoryOption(long aId);

    CreateResult<CategoryOption> createCategoryOption(CategoryOptionType soapType);

    UpdateResult<CategoryOption> updateCategoryOption(CategoryOptionType soapType);

    FetchResult<CategoryOption> fetchCategoryOption(long aId);

    CreateResult<GlobalOption> createGlobalOption(GlobalOptionType soapType);

    UpdateResult<GlobalOption> updateGlobalOption(GlobalOptionType soapType);

    FetchResult<GlobalOption> fetchGlobalOption(long aId);

    DeleteResult deleteGlobalOption(long aId);

    FetchResult<List<GlobalOption>> listGlobalOptions();
    FetchResult<List<GlobalOption>> listGlobalOptions(int begin, int maxSize);

    CreateResult<SeatingArea> createSeatingArea(SeatingAreaType soapType);

    UpdateResult<SeatingArea> updateSeatingArea(SeatingAreaType soapType);
    
    DeleteResult deleteSeatingArea(long aId);
    FetchResult<List<SeatingArea>> listSeatingAreas();
    FetchResult<SeatingArea> fetchSeatingArea(long aId);

    CreateResult<Order> createNewOrder(OrderType orderType);

    UpdateResult<Order> updateOrder(OrderType orderType);

    FetchResult<Order> fetchOrderById(long aId);

    FetchResult<List<Order>> fetchOpenOrdersByUser(String password) throws Exception;

    DeleteResult deleteOrder(long userId, long orderId);

    UpdateResult<Order> settleOrder(long userId, long orderId, double saleAmt, double tax, double tips, List<PaymentRecordType> paymentRecordTypes);

    DeleteResult deleteStaff(long id);
    CreateResult<StaffMember> createStaff(StaffType soapStaff) throws Exception;
    UpdateResult<StaffMember> updateStaffMember(StaffType soapStaff) throws Exception;

    CreateResult<StaffAttendance> addAttendance(long userId, long staffId, Date date, Date startTime, Date endTime);

    FetchResult<List<Order>> fetchUnservedOrders(boolean isAsc);

    CreateResult<Roles> createNewRole(RoleType soapType);
    UpdateResult<Roles> updateRole(RoleType soapType);
    DeleteResult deleteRole(long roleId);
    FetchResult<List<Roles>> fetchAllRoles();

    FetchResult<CompanyProfile> fetchCompanyProfile();
    FetchResult<List<CompanyDiscount>> fetchDiscountRates();
    CreateResult<CompanyDiscount> addDiscountRate(double aRate, CompanyDiscount.DiscountTypeEnum typeEnum, String name, String description);
    UpdateResult<CompanyDiscount> updateDiscountRate(long id, double aRate, CompanyDiscount.DiscountTypeEnum typeEnum, String name, String description);
    DeleteResult deleteDiscountRate(long id);

    CreateResult<CompanyProfile> createCompanyProfile(CompanyProfileType soapType);
    UpdateResult<CompanyProfile> updateCompanyProfile(CompanyProfileType soapType);
    //FetchResult<Order> findTodayOrderByNumber(long aId, long aBase);

    UpdateResult<Order> updateOrderNumber(Order order);
}
