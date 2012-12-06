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
-- Table structure for table `company_discount`
--

DROP TABLE IF EXISTS `company_discount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_discount` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rate` double DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_discount`
--

LOCK TABLES `company_discount` WRITE;
/*!40000 ALTER TABLE `company_discount` DISABLE KEYS */;
INSERT INTO `company_discount` VALUES (1,5,0,0,'2012-06-22 22:47:35','2012-06-22 22:47:35',NULL,NULL,'',NULL),(2,10,0,0,'2012-06-22 22:48:18','2012-06-22 22:48:18',NULL,NULL,'',NULL),(3,15,0,0,'2012-06-22 22:48:23','2012-06-22 22:48:23',NULL,NULL,'',NULL),(4,20,0,0,'2012-06-22 22:48:24','2012-06-22 22:48:24',NULL,NULL,'',NULL);
/*!40000 ALTER TABLE `company_discount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_profile`
--

DROP TABLE IF EXISTS `company_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `address1` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address2` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `zipcode` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telephone1` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telephone2` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `website` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_profile`
--

LOCK TABLES `company_profile` WRITE;
/*!40000 ALTER TABLE `company_profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `company_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_tax`
--

DROP TABLE IF EXISTS `company_tax`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_tax` (
  `id` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(120) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tax_rate` double NOT NULL,
  `version` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_tax`
--

LOCK TABLES `company_tax` WRITE;
/*!40000 ALTER TABLE `company_tax` DISABLE KEYS */;
/*!40000 ALTER TABLE `company_tax` ENABLE KEYS */;
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
-- Table structure for table `function_module`
--

DROP TABLE IF EXISTS `function_module`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `function_module` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `function_module`
--

LOCK TABLES `function_module` WRITE;
/*!40000 ALTER TABLE `function_module` DISABLE KEYS */;
INSERT INTO `function_module` VALUES (1,'order','2012-05-27 23:07:02',NULL,'2012-05-27 23:07:02',NULL,NULL),(2,'menu management','2012-05-27 23:07:05',NULL,'2012-05-27 23:07:05',NULL,NULL),(3,'staff management','2012-05-27 23:07:14',NULL,'2012-05-27 23:07:14',NULL,NULL),(4,'view orders','2012-05-27 23:08:21',NULL,'2012-05-27 23:08:21',NULL,NULL),(5,'global options','2012-05-28 23:14:06',NULL,'2012-05-28 23:14:06',NULL,NULL),(6,'printer setup','2012-05-28 23:14:24',NULL,'2012-05-28 23:14:24',NULL,NULL);
/*!40000 ALTER TABLE `function_module` ENABLE KEYS */;
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
  `visible` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `global_option`
--

LOCK TABLES `global_option` WRITE;
/*!40000 ALTER TABLE `global_option` DISABLE KEYS */;
INSERT INTO `global_option` VALUES (1,'Global Option 1',1,1,0,'2012-05-14 23:41:35','2012-05-14 23:41:35',NULL,NULL,'0',1),(2,'Global Option 2',0,0,0,'2012-05-14 23:45:22','2012-05-14 23:45:22',NULL,NULL,'0',1),(3,'Global Option 3',0,0,0,'2012-05-14 23:45:34','2012-05-14 23:45:34',NULL,NULL,'0',1),(4,'Global Option 4',0,0,0,'2012-05-14 23:45:39','2012-05-14 23:45:39',NULL,NULL,'0',1),(5,'酱油',0,0,0,'2012-05-14 23:45:50','2012-05-14 23:45:50',NULL,NULL,'0',1),(6,'醋',0,0,0,'2012-05-14 23:46:05','2012-05-14 23:46:05',NULL,NULL,'0',1),(7,'烧烤酱',0,0,0,'2012-05-14 23:46:17','2012-05-14 23:46:17',NULL,NULL,'0',1);
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
  `tax` double NOT NULL DEFAULT '0',
  `gratuity` double DEFAULT '0',
  `charge` double DEFAULT NULL,
  `order_num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `table_id` (`table_id`),
  KEY `ORDER_2_CUSTOMER_FK` (`customer_id`),
  CONSTRAINT `ORDER_2_CUSTOMER_FK` FOREIGN KEY (`customer_id`) REFERENCES `customer_info` (`id`),
  CONSTRAINT `order_bill_ibfk_1` FOREIGN KEY (`table_id`) REFERENCES `restaurant_table` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_bill`
--

LOCK TABLES `order_bill` WRITE;
/*!40000 ALTER TABLE `order_bill` DISABLE KEYS */;
INSERT INTO `order_bill` VALUES (4,'0','OUT',NULL,17.28,NULL,NULL,'2012-05-20 23:53:05','2012-05-20 23:53:05',7,NULL,0,1,0,0,0,NULL),(5,'0','OUT',NULL,17.28,NULL,NULL,'2012-05-20 23:56:12','2012-05-20 23:56:12',7,NULL,0,1,0,0,0,NULL),(6,'0','OUT',NULL,23.76,NULL,NULL,'2012-05-21 00:00:55','2012-05-21 00:00:55',7,NULL,0,1,0,0,0,NULL),(7,'0','OUT',NULL,17.28,NULL,NULL,'2012-05-21 20:53:32','2012-05-21 20:53:32',7,NULL,0,1,0,0,0,NULL),(8,'0','OUT',NULL,10.8,NULL,NULL,'2012-05-21 20:53:59','2012-05-21 20:53:59',7,NULL,0,1,0,0,0,NULL),(9,'0','OUT',NULL,21.6,NULL,NULL,'2012-05-21 21:04:36','2012-05-21 21:04:36',7,NULL,0,1,0,0,0,NULL),(10,'4','OUT',NULL,6.48,NULL,NULL,'2012-05-21 21:04:56','2012-05-26 23:24:00',7,NULL,1,1,0,0,0,NULL),(11,'0','OUT',NULL,12.96,NULL,NULL,'2012-05-21 21:05:27','2012-05-21 21:05:27',7,NULL,0,1,0,0,0,NULL),(12,'0','OUT',NULL,10.8,NULL,NULL,'2012-05-21 21:06:54','2012-05-21 21:06:54',7,NULL,0,1,0,0,0,NULL),(13,'0','OUT',NULL,7.56,NULL,NULL,'2012-05-21 21:12:25','2012-05-21 21:30:24',7,NULL,1,1,0,0,0,NULL),(14,'0','OUT',NULL,27,NULL,NULL,'2012-05-26 17:11:21','2012-05-26 17:14:48',7,NULL,1,1,0,0,0,NULL),(15,'0','OUT',NULL,9,NULL,NULL,'2012-06-01 22:44:23','2012-06-01 22:44:23',7,7,0,1,0.72,0,0,NULL),(16,'0','DINE_IN',NULL,6,NULL,NULL,'2012-06-01 22:45:19','2012-06-01 22:45:19',7,7,0,1,0.48,0,0,NULL),(17,'0','DINE_IN',NULL,7,NULL,NULL,'2012-06-04 21:31:49','2012-06-04 21:53:13',7,7,1,1,0.56,0,0,NULL),(18,'0','DINE_IN',NULL,6,NULL,NULL,'2012-06-04 21:54:26','2012-06-04 21:54:55',7,7,1,1,0.48,0,0,NULL),(19,'0','DINE_IN',NULL,6,NULL,NULL,'2012-06-04 21:55:15','2012-06-04 21:55:15',7,7,0,1,0.48,0,0,NULL),(20,'0','DINE_IN',NULL,6,16,NULL,'2012-06-04 21:55:53','2012-06-04 21:55:53',7,7,0,1,0.48,0,0,NULL),(21,'0','DINE_IN',NULL,13,NULL,NULL,'2012-06-14 21:56:03','2012-06-14 21:56:03',7,7,0,1,1.04,0,0,NULL),(23,'0','DINE_IN',NULL,19,NULL,NULL,'2012-06-14 22:18:19','2012-06-14 22:29:32',7,7,2,1,1.52,0,0,NULL),(24,'0','',NULL,5.4,NULL,NULL,'2012-06-28 22:30:10','2012-06-28 22:30:10',7,7,0,1,0.43200000000000005,0,1.5,NULL),(25,'0','OUT',NULL,20,NULL,NULL,'2012-10-01 22:46:00','2012-10-01 22:46:00',1,1,0,0,0,0,0,NULL),(26,'0','OUT',NULL,20,NULL,NULL,'2012-10-01 23:04:36','2012-10-01 23:04:36',1,1,1,0,0,0,0,26);
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
  `sale_item_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ITEM_2_ORDER_FK` (`order_id`),
  CONSTRAINT `ITEM_2_ORDER_FK` FOREIGN KEY (`order_id`) REFERENCES `order_bill` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (3,1,4,'item1',10,'2012-05-20 23:53:05',NULL,'2012-05-20 23:53:05',NULL,0,9),(4,1,4,'item2',6,'2012-05-20 23:53:05',NULL,'2012-05-20 23:53:05',NULL,0,10),(5,1,5,'item1',10,'2012-05-20 23:56:12',NULL,'2012-05-20 23:56:12',NULL,0,9),(6,1,5,'item2',6,'2012-05-20 23:56:12',NULL,'2012-05-20 23:56:12',NULL,0,10),(7,1,6,'item1',10,'2012-05-21 00:00:55',NULL,'2012-05-21 00:00:55',NULL,0,9),(8,1,6,'item2',6,'2012-05-21 00:00:55',NULL,'2012-05-21 00:00:55',NULL,0,10),(9,1,6,'item4',6,'2012-05-21 00:00:55',NULL,'2012-05-21 00:00:55',NULL,0,12),(10,1,7,'item1',10,'2012-05-21 20:53:33',NULL,'2012-05-21 20:53:33',NULL,0,9),(11,1,7,'item2',6,'2012-05-21 20:53:33',NULL,'2012-05-21 20:53:33',NULL,0,10),(12,1,8,'item1',10,'2012-05-21 20:54:03',NULL,'2012-05-21 20:54:03',NULL,0,9),(13,2,9,'item1',10,'2012-05-21 21:04:39',NULL,'2012-05-21 21:04:39',NULL,0,9),(14,1,10,'item2',6,'2012-05-21 21:04:59',NULL,'2012-05-21 21:04:59',NULL,0,10),(15,2,11,'item2',6,'2012-05-21 21:05:31',NULL,'2012-05-21 21:05:31',NULL,0,10),(16,1,12,'item3',10,'2012-05-21 21:06:57',NULL,'2012-05-21 21:06:57',NULL,0,11),(19,1,13,'item3',7,'2012-05-21 21:30:24',NULL,'2012-05-21 21:30:24',NULL,0,11),(23,1,14,'item3',7,'2012-05-26 17:14:48',NULL,'2012-05-26 17:14:48',NULL,0,11),(24,2,14,'item6',6,'2012-05-26 17:14:48',NULL,'2012-05-26 17:14:48',NULL,0,13),(25,1,14,'item6',6,'2012-05-26 17:14:48',NULL,'2012-05-26 17:14:48',NULL,0,13),(26,1,15,'item3',9,'2012-06-01 22:44:23',NULL,'2012-06-01 22:44:23',NULL,0,11),(27,1,16,'item4',6,'2012-06-01 22:45:19',NULL,'2012-06-01 22:45:19',NULL,0,12),(29,1,17,'item5',7,'2012-06-04 21:53:13',NULL,'2012-06-04 21:53:13',NULL,0,14),(31,1,18,'item2',6,'2012-06-04 21:54:55',NULL,'2012-06-04 21:54:55',NULL,0,10),(32,1,19,'item2',6,'2012-06-04 21:55:15',NULL,'2012-06-04 21:55:15',NULL,0,10),(33,1,20,'item2',6,'2012-06-04 21:55:53',NULL,'2012-06-04 21:55:53',NULL,0,10),(34,1,21,'item5',7,'2012-06-14 21:56:03',NULL,'2012-06-14 21:56:03',NULL,0,14),(41,1,23,'item4',6,'2012-06-14 22:29:32',NULL,'2012-06-14 22:29:32',NULL,0,12),(42,1,23,'item6',6,'2012-06-14 22:29:32',NULL,'2012-06-14 22:29:32',NULL,0,13),(43,1,23,'item5',7,'2012-06-14 22:29:32',NULL,'2012-06-14 22:29:32',NULL,0,14),(44,1,24,'item5',6,'2012-06-28 22:30:10',NULL,'2012-06-28 22:30:10',NULL,0,14),(45,1,25,'item4',6,'2012-10-01 22:46:00',NULL,'2012-10-01 22:46:00',NULL,0,12),(46,1,26,'item4',6,'2012-10-01 23:04:36',NULL,'2012-10-01 23:04:36',NULL,0,12);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item_option`
--

DROP TABLE IF EXISTS `order_item_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_item_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `price` double DEFAULT NULL,
  `order_item_id` int(11) NOT NULL,
  `version` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `display_text` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `option_id` int(11) NOT NULL,
  `option_type` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ORDER_OPTION_2_ITEM_FK` (`order_item_id`),
  CONSTRAINT `ORDER_OPTION_2_ITEM_FK` FOREIGN KEY (`order_item_id`) REFERENCES `order_item` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item_option`
--

LOCK TABLES `order_item_option` WRITE;
/*!40000 ALTER TABLE `order_item_option` DISABLE KEYS */;
INSERT INTO `order_item_option` VALUES (5,1,0,23,0,NULL,NULL,NULL,NULL,'烧烤酱',7,'GLOBAL_OP'),(6,1,0,25,0,NULL,NULL,NULL,NULL,'醋',6,'GLOBAL_OP'),(7,1,0,25,0,NULL,NULL,NULL,NULL,'Global Option 4',4,'GLOBAL_OP'),(8,1,0,25,0,NULL,NULL,NULL,NULL,'fdfsad',1,'CAT_OP'),(9,1,0,26,0,'2012-06-01 22:44:23','2012-06-01 22:44:23',NULL,NULL,'fdfsad',1,'CAT_OP'),(10,1,0,34,0,'2012-06-14 21:56:03','2012-06-14 21:56:03',NULL,NULL,'fdfsad',1,'CAT_OP'),(11,1,0,45,0,'2012-10-01 22:46:00','2012-10-01 22:46:00',NULL,NULL,'酱油',5,'GLOBAL'),(12,1,0,45,0,'2012-10-01 22:46:00','2012-10-01 22:46:00',NULL,NULL,'hello!',1,'CATEGORY'),(13,1,0,46,0,'2012-10-01 23:04:36','2012-10-01 23:04:36',NULL,NULL,'酱油',5,'GLOBAL'),(14,1,0,46,0,'2012-10-01 23:04:36','2012-10-01 23:04:36',NULL,NULL,'hello!',1,'CATEGORY');
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_record`
--

LOCK TABLES `payment_record` WRITE;
/*!40000 ALTER TABLE `payment_record` DISABLE KEYS */;
INSERT INTO `payment_record` VALUES (1,6.48,10,'CASH',NULL,NULL,'2012-05-26 23:24:00','2012-05-26 23:24:00',NULL,NULL,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_table`
--

LOCK TABLES `restaurant_table` WRITE;
/*!40000 ALTER TABLE `restaurant_table` DISABLE KEYS */;
INSERT INTO `restaurant_table` VALUES (16,'Table A',113,125,NULL,'2012-05-25 22:51:04',NULL,'2012-05-25 22:51:04',0,3),(17,'Table 2',309,229,NULL,'2012-05-25 22:51:04',NULL,'2012-07-07 18:22:43',1,3),(18,'1',10,11,NULL,'2012-05-25 23:03:34',NULL,'2012-05-25 23:08:04',1,4),(19,'Table 3',489,138,NULL,'2012-07-07 23:54:48',NULL,'2012-07-07 23:54:48',0,3);
/*!40000 ALTER TABLE `restaurant_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `created_on` datetime DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Manager Role',NULL,NULL,NULL,NULL,2),(2,'Waiter Role',NULL,NULL,NULL,NULL,0),(3,'Tester Role',NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_function_assoc`
--

DROP TABLE IF EXISTS `role_function_assoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_function_assoc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `func_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ROLE_2_FUNC_FK` (`role_id`),
  KEY `FUNC_2_ROLE_FK` (`func_id`),
  CONSTRAINT `FUNC_2_ROLE_FK` FOREIGN KEY (`func_id`) REFERENCES `function_module` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ROLE_2_FUNC_FK` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_function_assoc`
--

LOCK TABLES `role_function_assoc` WRITE;
/*!40000 ALTER TABLE `role_function_assoc` DISABLE KEYS */;
INSERT INTO `role_function_assoc` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,2,1),(6,2,4),(7,3,1),(8,3,6),(9,3,5),(10,3,2),(11,3,3),(12,3,4);
/*!40000 ALTER TABLE `role_function_assoc` ENABLE KEYS */;
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
  `visible` tinyint(1) DEFAULT '1',
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
INSERT INTO `sale_item` VALUES (4,'item7','fhalsfjha',8,0,1,5,3,8,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-04-21 20:54:11','2012-05-17 23:16:15',NULL,NULL,NULL,4,10,0,7,8,9,8,7,9,1),(8,'item1','hello!',6,0,1,0,13,6,1,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-09 00:00:22','2012-05-17 23:25:45',NULL,NULL,NULL,2,0,1,1,2,3,5,4,6,1),(9,'item1','hello world!',10,0,1,0,3,0,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-16 23:54:17','2012-05-18 00:05:11',NULL,NULL,NULL,3,0,1,0,0,0,0,0,0,1),(10,'item2','aadafd',6,0,1,0,3,6,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-16 23:57:39','2012-05-16 23:57:39',NULL,NULL,NULL,0,0,0,0,0,0,0,0,0,1),(11,'item3','fadfasff',10,0,1,0,3,10,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-17 22:40:12','2012-05-17 22:40:12',NULL,NULL,NULL,0,0,1,6,7,10,7,6,9,1),(12,'item4','fasfsa',6,0,1,0,3,5,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-17 22:43:28','2012-05-17 22:43:28',NULL,NULL,NULL,0,0,1,6,6,6,0,0,0,1),(13,'item6','fadasfs',6,0,1,0,3,5,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-17 22:46:31','2012-05-17 23:08:39',NULL,NULL,NULL,1,0,1,6,6,6,5,5,5,1),(14,'item5','fadsf',7,0,1,0,3,6,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-17 22:54:15','2012-05-17 22:54:15',NULL,NULL,NULL,0,0,1,7,7,7,6,6,6,1);
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
  `visible` tinyint(1) DEFAULT '1',
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
INSERT INTO `sale_item_option` VALUES (4,'option 1','hfladfh',0.5,0.5,4,0,'fhalfdsjhll','2012-04-21 20:54:29','2012-04-21 20:54:29',NULL,NULL,0,NULL,1),(6,'aaa','bbb',1,1,8,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-13 17:59:00','2012-05-13 17:59:00',NULL,NULL,0,0,1),(7,'bbb','bbb',1,1,8,1,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-13 18:01:53','2012-05-13 18:01:53',NULL,NULL,0,1,1),(8,'ccc','fsdaf',1,1,8,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-13 18:11:21','2012-05-13 18:11:21',NULL,NULL,0,0,1),(9,'d','d',11,1,8,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-13 20:18:42','2012-05-13 20:18:42',NULL,NULL,0,0,1),(10,'eeee','eee',0,0,8,0,'file:///C:/Projects/kpos/www/adminCategory.html','2012-05-13 20:19:16','2012-05-13 20:19:16',NULL,NULL,0,0,1),(11,'fffff','fff',0,0,8,0,NULL,'2012-05-13 20:32:26','2012-05-13 20:32:26',NULL,NULL,0,0,1),(12,'fdasfsaga2','fdasfs2',0,0,8,0,NULL,'2012-05-13 22:54:58','2012-05-13 22:55:10',NULL,NULL,1,0,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seating_area`
--

LOCK TABLES `seating_area` WRITE;
/*!40000 ALTER TABLE `seating_area` DISABLE KEYS */;
INSERT INTO `seating_area` VALUES (3,'Area 1','2012-05-25 22:51:04','2012-05-25 22:51:04',NULL,NULL,10),(4,'Area 2','2012-05-25 23:03:34','2012-05-25 23:03:34',NULL,NULL,5);
/*!40000 ALTER TABLE `seating_area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_attendance`
--

DROP TABLE IF EXISTS `staff_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staff_attendance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `staff_id` int(11) NOT NULL,
  `work_day` date NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `ATTN_2_STAFF_FK` (`staff_id`),
  CONSTRAINT `ATTN_2_STAFF_FK` FOREIGN KEY (`staff_id`) REFERENCES `staff_member` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_attendance`
--

LOCK TABLES `staff_attendance` WRITE;
/*!40000 ALTER TABLE `staff_attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `staff_attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_member`
--

DROP TABLE IF EXISTS `staff_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staff_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) DEFAULT NULL,
  `home_phone` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cell_phone` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `join_date` datetime DEFAULT NULL,
  `wage` double DEFAULT NULL,
  `wage_type` int(11) DEFAULT NULL,
  `notes` varchar(240) COLLATE utf8_unicode_ci DEFAULT NULL,
  `street` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `zipcode` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  KEY `STAFF_2_USER_FK` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_member`
--

LOCK TABLES `staff_member` WRITE;
/*!40000 ALTER TABLE `staff_member` DISABLE KEYS */;
INSERT INTO `staff_member` VALUES (2,7,'Wei',28,'9173928156','9173928156','2012-01-28 00:05:00',20,1,NULL,'4254 Judge St','Elmhurst','NY','11373','2012-06-05 21:01:49',NULL,'2012-06-05 21:01:49',NULL,4),(3,NULL,'王强',30,'6462556295',NULL,'2012-01-27 00:05:00',15,1,'fhasdlh','21 Broadway',NULL,NULL,NULL,'2012-05-29 21:12:13',NULL,'2012-05-29 21:12:13',NULL,7),(4,NULL,'Kang',30,'2069106910','2069106911','2012-01-27 00:05:00',100,1,NULL,'4254 Judge St, Apt 4D, Elmhurst, NY 11351','Elmhurst',NULL,NULL,NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `staff_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `staff_id` int(11) NOT NULL,
  `passcode` int(11) NOT NULL,
  `created_on` datetime NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated` datetime DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `version` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `USER_2_STAFF_FK` (`staff_id`),
  CONSTRAINT `USER_2_STAFF_FK` FOREIGN KEY (`staff_id`) REFERENCES `staff_member` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,4,717,'2012-05-27 23:37:17',NULL,'2012-05-28 22:44:04',NULL,1),(7,2,11,'2012-05-28 00:28:17',NULL,'2012-06-05 21:01:49',NULL,5),(8,3,1,'2012-05-28 23:16:09',NULL,'2012-05-29 21:12:13',NULL,7);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_function_assoc`
--

DROP TABLE IF EXISTS `user_function_assoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_function_assoc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `func_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `USER_2_FUNC_FK` (`user_id`),
  KEY `FUNC_2_USER_FK` (`func_id`),
  CONSTRAINT `FUNC_2_USER_FK` FOREIGN KEY (`func_id`) REFERENCES `function_module` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `USER_2_FUNC_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_function_assoc`
--

LOCK TABLES `user_function_assoc` WRITE;
/*!40000 ALTER TABLE `user_function_assoc` DISABLE KEYS */;
INSERT INTO `user_function_assoc` VALUES (1,1,1),(12,7,1),(13,7,2),(14,7,3),(15,7,4),(18,8,1),(19,7,5);
/*!40000 ALTER TABLE `user_function_assoc` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-12-05 23:04:18
