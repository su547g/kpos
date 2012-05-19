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
INSERT INTO `cat_printer_assoc` VALUES (3,1),(10,1),(10,2),(11,1),(11,2),(11,4),(12,5),(12,3),(12,1),(12,2),(13,5),(13,3),(13,4);
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (3,'Rice',0,0,1,'all rice dishes','C:\\kpos\\img\\rice.jpg','2012-04-20 21:54:16','2012-04-20 21:54:16',NULL,NULL,1),(4,'Beef',0,0,1,'Beef','Beef','2012-05-04 23:33:13','2012-05-04 23:33:13',NULL,NULL,0),(5,'Pork',0,0,1,'aaaahflfhashl','aaaahflfhashl','2012-05-05 00:06:16','2012-05-05 00:06:16',NULL,NULL,0),(9,'fsadfafa23',0,0,1,'fdfdsfsda','fdfdsfsda','2012-05-05 00:15:01','2012-05-05 00:15:01',NULL,NULL,0),(10,'AAAA',0,0,1,'fsdafagfdgfafdsa','fsdafagfdgfafdsa','2012-05-05 00:16:27','2012-05-05 00:16:27',NULL,NULL,1),(11,'C1',0,0,1,'c1ffafasdfc2c3','file:///C:/Projects/kpos/www/undefined','2012-05-05 16:57:32','2012-05-05 21:35:41',NULL,NULL,8),(12,'DDD',0,0,1,'d hfalfhal','file:///C:/Projects/kpos/www/undefined','2012-05-05 22:19:52','2012-05-05 22:19:52',NULL,NULL,1),(13,'TEst',0,0,1,'test','file:///C:/Projects/kpos/www/adminCategory.html','2012-05-05 22:55:05','2012-05-05 22:55:05',NULL,NULL,1);
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
  `thumb` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `taxable` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `OPTION_2_CAT_FK` (`category_id`),
  CONSTRAINT `OPTION_2_CAT_FK` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_option`
--

LOCK TABLES `category_option` WRITE;
/*!40000 ALTER TABLE `category_option` DISABLE KEYS */;
INSERT INTO `category_option` VALUES (1,'hello!',0,3,'2012-04-20 21:54:49','2012-04-20 21:54:49',NULL,NULL,0,'fdfsad',NULL,NULL),(2,'hahaha',1.5,13,'2012-05-10 22:58:20','2012-05-10 23:12:40',NULL,NULL,1,'co1','file:///C:/Projects/kpos/www/adminCategory.html',1);
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
  `phone` int(11) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_option`
--

LOCK TABLES `global_option` WRITE;
/*!40000 ALTER TABLE `global_option` DISABLE KEYS */;
INSERT INTO `global_option` VALUES (1,'Global Option 1',1,1,0,'2012-05-14 23:41:35','2012-05-14 23:41:35',NULL,NULL,'0'),(2,'Global Option 2',0,0,0,'2012-05-14 23:45:22','2012-05-14 23:45:22',NULL,NULL,'0'),(3,'Global Option 3',0,0,0,'2012-05-14 23:45:34','2012-05-14 23:45:34',NULL,NULL,'0'),(4,'Global Option 4',0,0,0,'2012-05-14 23:45:39','2012-05-14 23:45:39',NULL,NULL,'0'),(5,'酱油',0,0,0,'2012-05-14 23:45:50','2012-05-14 23:45:50',NULL,NULL,'0'),(6,'醋',0,0,0,'2012-05-14 23:46:05','2012-05-14 23:46:05',NULL,NULL,'0'),(7,'烧烤酱',0,0,0,'2012-05-14 23:46:17','2012-05-14 23:46:17',NULL,NULL,'0');
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
INSERT INTO `item_printer_assoc` VALUES (4,3),(8,5),(9,3);
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
  `num_guests` int(11) DEFAULT NULL,
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
  `display_text` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `sale_price` double DEFAULT NULL,
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
-- Table structure for table `order_item_option`
--

DROP TABLE IF EXISTS `order_item_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_item_option` (
  `id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double DEFAULT NULL,
  `order_item_id` int(11) NOT NULL,
  `sale_item_option_id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ORDER_OPTION_2_ITEM_FK` (`order_item_id`),
  KEY `ORD_OPT_2_SALEI_OPT_FK` (`sale_item_option_id`),
  CONSTRAINT `ORDER_OPTION_2_ITEM_FK` FOREIGN KEY (`order_item_id`) REFERENCES `order_item` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ORD_OPT_2_SALEI_OPT_FK` FOREIGN KEY (`sale_item_option_id`) REFERENCES `sale_item_option` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item_option`
--

LOCK TABLES `order_item_option` WRITE;
/*!40000 ALTER TABLE `order_item_option` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_item_option` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `printer`
--

LOCK TABLES `printer` WRITE;
/*!40000 ALTER TABLE `printer` DISABLE KEYS */;
INSERT INTO `printer` VALUES (1,'Kicthen','127.0.0.1','2012-04-18 23:56:50','2012-04-18 23:56:50',NULL,NULL,0),(2,'Kicthen2','127.0.0.1','2012-04-18 23:57:03','2012-04-18 23:57:03',NULL,NULL,0),(3,'A','172.2.23.1','2012-05-05 21:15:16','2012-05-05 21:15:16',NULL,NULL,0),(4,'B1','localhost','2012-05-05 21:17:02','2012-05-05 21:25:56',NULL,NULL,2),(5,'A1','A1','2012-05-05 22:11:27','2012-05-05 22:11:27',NULL,NULL,0),(6,'Test','test','2012-05-05 22:54:20','2012-05-05 22:54:20',NULL,NULL,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_table`
--

LOCK TABLES `restaurant_table` WRITE;
/*!40000 ALTER TABLE `restaurant_table` DISABLE KEYS */;
INSERT INTO `restaurant_table` VALUES (2,'Table 1',0,9,NULL,'2012-04-24 00:16:47',NULL,'2012-04-24 00:16:47',0,3),(7,'Table 2',10,12,NULL,'2012-04-24 23:25:50',NULL,'2012-04-24 23:25:50',0,3);
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_item`
--

LOCK TABLES `sale_item` WRITE;
/*!40000 ALTER TABLE `sale_item` DISABLE KEYS */;
INSERT INTO `sale_item` VALUES (4,'item7','fhalsfjha',8,0,1,5,3,8,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-04-21 20:54:11','2012-05-17 23:16:15',NULL,NULL,NULL,4,10,0,7,8,9,8,7,9),(8,'item1','hello!',6,0,1,0,13,6,1,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-09 00:00:22','2012-05-17 23:25:45',NULL,NULL,NULL,2,0,1,1,2,3,5,4,6),(9,'item1','hello world!',10,0,1,0,3,0,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-16 23:54:17','2012-05-18 00:05:11',NULL,NULL,NULL,3,0,1,0,0,0,0,0,0),(10,'item2','aadafd',6,0,1,0,3,6,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-16 23:57:39','2012-05-16 23:57:39',NULL,NULL,NULL,0,0,0,0,0,0,0,0,0),(11,'item3','fadfasff',10,0,1,0,3,10,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-17 22:40:12','2012-05-17 22:40:12',NULL,NULL,NULL,0,0,1,6,7,10,7,6,9),(12,'item4','fasfsa',6,0,1,0,3,5,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-17 22:43:28','2012-05-17 22:43:28',NULL,NULL,NULL,0,0,1,6,6,6,0,0,0),(13,'item6','fadasfs',6,0,1,0,3,5,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-17 22:46:31','2012-05-17 23:08:39',NULL,NULL,NULL,1,0,1,6,6,6,5,5,5),(14,'item5','fadsf',7,0,1,0,3,6,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-17 22:54:15','2012-05-17 22:54:15',NULL,NULL,NULL,0,0,1,7,7,7,6,6,6);
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
  `taxable` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `OPTION_2_ITEM_FK` (`sale_item_id`),
  CONSTRAINT `OPTION_2_ITEM_FK` FOREIGN KEY (`sale_item_id`) REFERENCES `sale_item` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_item_option`
--

LOCK TABLES `sale_item_option` WRITE;
/*!40000 ALTER TABLE `sale_item_option` DISABLE KEYS */;
INSERT INTO `sale_item_option` VALUES (4,'option 1','hfladfh',0.5,0.5,4,0,'fhalfdsjhll','2012-04-21 20:54:29','2012-04-21 20:54:29',NULL,NULL,0,NULL),(6,'aaa','bbb',1,1,8,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-13 17:59:00','2012-05-13 17:59:00',NULL,NULL,0,0),(7,'bbb','bbb',1,1,8,1,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-13 18:01:53','2012-05-13 18:01:53',NULL,NULL,0,1),(8,'ccc','fsdaf',1,1,8,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-13 18:11:21','2012-05-13 18:11:21',NULL,NULL,0,0),(9,'d','d',11,1,8,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-13 20:18:42','2012-05-13 20:18:42',NULL,NULL,0,0),(10,'eeee','eee',0,0,8,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-13 20:19:16','2012-05-13 20:19:16',NULL,NULL,0,0),(11,'fffff','fff',0,0,8,0,NULL,'2012-05-13 20:32:26','2012-05-13 20:32:26',NULL,NULL,0,0),(12,'fdasfsaga2','fdasfs2',0,0,8,0,NULL,'2012-05-13 22:54:58','2012-05-13 22:55:10',NULL,NULL,1,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seating_area`
--

LOCK TABLES `seating_area` WRITE;
/*!40000 ALTER TABLE `seating_area` DISABLE KEYS */;
INSERT INTO `seating_area` VALUES (2,'A 1','2012-04-24 00:03:09','2012-04-24 00:03:09',NULL,NULL,0),(3,'Area 1','2012-04-24 00:16:46','2012-04-24 00:16:46',NULL,NULL,4);
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

-- Dump completed on 2012-05-19  0:47:03
