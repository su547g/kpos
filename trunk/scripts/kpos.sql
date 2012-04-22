-- MySQL dump 10.13  Distrib 5.5.9, for Win32 (x86)
--
-- Host: localhost    Database: kpos
-- ------------------------------------------------------
-- Server version	5.5.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `kpos`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `kpos` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `kpos`;

--
-- Table structure for table `cat_printer_assoc`
--

DROP TABLE IF EXISTS `cat_printer_assoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_printer_assoc` (
  `menu_cat_id` int(11) NOT NULL,
  `printer_id` int(11) NOT NULL,
  KEY `CAT_2_PRINTER_FK` (`menu_cat_id`),
  KEY `PRINTER_2_CAT_FK` (`printer_id`),
  CONSTRAINT `CAT_2_PRINTER_FK` FOREIGN KEY (`menu_cat_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `PRINTER_2_CAT_FK` FOREIGN KEY (`printer_id`) REFERENCES `printer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_printer_assoc`
--

LOCK TABLES `cat_printer_assoc` WRITE;
/*!40000 ALTER TABLE `cat_printer_assoc` DISABLE KEYS */;
INSERT INTO `cat_printer_assoc` VALUES (3,1);
/*!40000 ALTER TABLE `cat_printer_assoc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `tax_rate` double DEFAULT NULL,
  `is_allowed_hh` tinyint(1) DEFAULT NULL,
  `hh_rate` double DEFAULT NULL,
  `notes` varchar(480) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thumb_path` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `CAT_2_OPTION_FK` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (3,'Rice',0,0,1,'all rice dishes','C:\\kpos\\img\\rice.jpg','2012-04-20 21:54:16','2012-04-20 21:54:16',NULL,NULL,1);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_option`
--

DROP TABLE IF EXISTS `category_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` double DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `OPTION_2_CAT_FK` (`category_id`),
  CONSTRAINT `OPTION_2_CAT_FK` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_option`
--

LOCK TABLES `category_option` WRITE;
/*!40000 ALTER TABLE `category_option` DISABLE KEYS */;
INSERT INTO `category_option` VALUES (1,'hello!',0,3,'2012-04-20 21:54:49','2012-04-20 21:54:49',NULL,NULL,0,'fdfsad');
/*!40000 ALTER TABLE `category_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `combo_menu`
--

DROP TABLE IF EXISTS `combo_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `combo_menu`
--

LOCK TABLES `combo_menu` WRITE;
/*!40000 ALTER TABLE `combo_menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `combo_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `combo_section`
--

DROP TABLE IF EXISTS `combo_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_section` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `combo_id` int(11) NOT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `SECTION_2_COMBO_FK` (`combo_id`),
  CONSTRAINT `SECTION_2_COMBO_FK` FOREIGN KEY (`combo_id`) REFERENCES `combo_menu` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `combo_section`
--

LOCK TABLES `combo_section` WRITE;
/*!40000 ALTER TABLE `combo_section` DISABLE KEYS */;
/*!40000 ALTER TABLE `combo_section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_info`
--

DROP TABLE IF EXISTS `customer_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(120) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(120) COLLATE utf8_unicode_ci DEFAULT NULL,
  `buzz` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_info`
--

LOCK TABLES `customer_info` WRITE;
/*!40000 ALTER TABLE `customer_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `global_option`
--

DROP TABLE IF EXISTS `global_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `global_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `dine_in_price` double DEFAULT NULL,
  `out_price` double DEFAULT NULL,
  `is_taxable` tinyint(1) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_option`
--

LOCK TABLES `global_option` WRITE;
/*!40000 ALTER TABLE `global_option` DISABLE KEYS */;
/*!40000 ALTER TABLE `global_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_printer_assoc`
--

DROP TABLE IF EXISTS `item_printer_assoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_printer_assoc` (
  `SALE_ITEM_ID` int(11) NOT NULL,
  `PRINTER_ID` int(11) NOT NULL,
  KEY `ITEM_2_PRINTER_FK` (`SALE_ITEM_ID`),
  KEY `PRINTER_2_ITEM_FK` (`PRINTER_ID`),
  CONSTRAINT `ITEM_2_PRINTER_FK` FOREIGN KEY (`SALE_ITEM_ID`) REFERENCES `sale_item` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `PRINTER_2_ITEM_FK` FOREIGN KEY (`PRINTER_ID`) REFERENCES `printer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_printer_assoc`
--

LOCK TABLES `item_printer_assoc` WRITE;
/*!40000 ALTER TABLE `item_printer_assoc` DISABLE KEYS */;
INSERT INTO `item_printer_assoc` VALUES (4,1),(5,1);
/*!40000 ALTER TABLE `item_printer_assoc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_bill`
--

DROP TABLE IF EXISTS `order_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_bill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `order_type` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `notes` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `total_price` double NOT NULL DEFAULT '0',
  `table_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `table_id` (`table_id`),
  KEY `ORDER_2_CUSTOMER_FK` (`customer_id`),
  CONSTRAINT `ORDER_2_CUSTOMER_FK` FOREIGN KEY (`customer_id`) REFERENCES `customer_info` (`id`),
  CONSTRAINT `order_bill_ibfk_1` FOREIGN KEY (`table_id`) REFERENCES `restaurant_table` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_bill`
--

LOCK TABLES `order_bill` WRITE;
/*!40000 ALTER TABLE `order_bill` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `notes` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sale_price` double DEFAULT NULL,
  `override_name` varchar(60) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ITEM_2_ORDER_FK` (`order_id`),
  CONSTRAINT `ITEM_2_ORDER_FK` FOREIGN KEY (`order_id`) REFERENCES `order_bill` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_record`
--

DROP TABLE IF EXISTS `payment_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `order_id` int(11) NOT NULL,
  `payment_type` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `card_type` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `card_number` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PAYMENT_2_ORDER_FK` (`order_id`),
  CONSTRAINT `PAYMENT_2_ORDER_FK` FOREIGN KEY (`order_id`) REFERENCES `order_bill` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_record`
--

LOCK TABLES `payment_record` WRITE;
/*!40000 ALTER TABLE `payment_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `printer`
--

DROP TABLE IF EXISTS `printer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `printer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ip_addr` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `printer`
--

LOCK TABLES `printer` WRITE;
/*!40000 ALTER TABLE `printer` DISABLE KEYS */;
INSERT INTO `printer` VALUES (1,'Kicthen','127.0.0.1','2012-04-18 23:56:50','2012-04-18 23:56:50',NULL,NULL,0),(2,'Kicthen2','127.0.0.1','2012-04-18 23:57:03','2012-04-18 23:57:03',NULL,NULL,0);
/*!40000 ALTER TABLE `printer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant_table`
--

DROP TABLE IF EXISTS `restaurant_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `restaurant_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `TABLE_2_AREA_FK` (`area_id`),
  CONSTRAINT `TABLE_2_AREA_FK` FOREIGN KEY (`area_id`) REFERENCES `seating_area` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_table`
--

LOCK TABLES `restaurant_table` WRITE;
/*!40000 ALTER TABLE `restaurant_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `restaurant_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale_item`
--

DROP TABLE IF EXISTS `sale_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(400) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` double NOT NULL DEFAULT '0',
  `is_allowed_hh` tinyint(1) DEFAULT NULL,
  `hh_rate` double DEFAULT NULL,
  `hh_price` double DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `out_price` double DEFAULT NULL,
  `single_option_only` tinyint(1) DEFAULT NULL,
  `thumb_path` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `combo_section_id` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `season_price` double DEFAULT NULL,
  `is_taxable` tinyint(1) DEFAULT NULL,
  `price_small` double DEFAULT '0',
  `price_medium` double DEFAULT '0',
  `price_large` double DEFAULT '0',
  `out_small` double DEFAULT '0',
  `out_medium` double DEFAULT '0',
  `out_large` double DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `SALEITEM_2_CAT_FK` (`category_id`),
  CONSTRAINT `SALEITEM_2_CAT_FK` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_item`
--

LOCK TABLES `sale_item` WRITE;
/*!40000 ALTER TABLE `sale_item` DISABLE KEYS */;
INSERT INTO `sale_item` VALUES (4,'fhalsdfjhals','fhalsfjha',8,0,1,5,3,8,0,'C:\\hflasjkfha','2012-04-21 20:54:11','2012-04-21 20:54:11',NULL,NULL,NULL,0,10,0,7,8,9,7,8,9),(5,'fhalsdfjhals','fhalsfjha',8,0,1,5,3,8,0,'C:\\hflasjkfha','2012-04-21 21:02:09','2012-04-21 21:02:09',NULL,NULL,NULL,0,10,0,7,8,9,7,8,9);
/*!40000 ALTER TABLE `sale_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale_item_option`
--

DROP TABLE IF EXISTS `sale_item_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale_item_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` double DEFAULT NULL,
  `out_price` double DEFAULT NULL,
  `sale_item_id` int(11) NOT NULL,
  `is_required` tinyint(1) DEFAULT NULL,
  `thumb_path` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `OPTION_2_ITEM_FK` (`sale_item_id`),
  CONSTRAINT `OPTION_2_ITEM_FK` FOREIGN KEY (`sale_item_id`) REFERENCES `sale_item` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_item_option`
--

LOCK TABLES `sale_item_option` WRITE;
/*!40000 ALTER TABLE `sale_item_option` DISABLE KEYS */;
INSERT INTO `sale_item_option` VALUES (4,'option 1','hfladfh',0.5,0.5,4,0,'fhalfdsjhll','2012-04-21 20:54:29','2012-04-21 20:54:29',NULL,NULL,0);
/*!40000 ALTER TABLE `sale_item_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seating_area`
--

DROP TABLE IF EXISTS `seating_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seating_area` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seating_area`
--

LOCK TABLES `seating_area` WRITE;
/*!40000 ALTER TABLE `seating_area` DISABLE KEYS */;
/*!40000 ALTER TABLE `seating_area` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-04-21 22:01:34
