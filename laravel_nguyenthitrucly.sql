-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2023 at 03:09 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_nguyenthitrucly`
--

-- --------------------------------------------------------

--
-- Table structure for table `nttl_brand`
--

CREATE TABLE `nttl_brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_brand`
--

INSERT INTO `nttl_brand` (`id`, `name`, `slug`, `description`, `image`, `sort_order`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Hoa Tươi', 'hoa-tuoi', 'hoa', 'hoa-tuoi.jpg', 0, 'hoa tươi', 'hoa tươi', '2023-10-04 20:30:49', '2023-10-11 04:13:40', 1, 1, 1),
(2, 'Lọ hoa', 'lo-hoa', '', 'lo-hoa.jpg', 0, 'lọ hoa', 'lọ hoa', '2023-10-04 20:31:27', '2023-10-04 20:31:27', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_category`
--

CREATE TABLE `nttl_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_category`
--

INSERT INTO `nttl_category` (`id`, `name`, `slug`, `description`, `image`, `parent_id`, `sort_order`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Hoa Baby', 'hoa-baby', '', 'hoa-baby.jpg', 0, 0, 'hoa baby', 'Hoa baby', '2023-10-04 20:32:45', '2023-10-04 20:32:45', 1, NULL, 1),
(2, 'Hoa Cúc Hoạ Mi', 'hoa-cuc-hoa-mi', '', 'hoa-cuc-hoa-mi.jpg', 0, 0, 'cúc học mi', 'cúc họa mi', '2023-10-04 20:33:54', '2023-10-04 20:33:54', 1, NULL, 1),
(3, 'Hoa Hồng', 'hoa-hong', '', 'hoa-hong.jpg', 0, 0, 'hoa hồng', 'hoa hồng', '2023-10-04 20:34:27', '2023-10-04 20:34:27', 1, NULL, 1),
(4, 'Hoa Hướng Dương', 'hoa-huong-duong', '', 'hoa-huong-duong.jpg', 0, 0, 'hướng dương', 'hướng dương', '2023-10-04 20:35:01', '2023-10-04 20:35:01', 1, NULL, 1),
(5, 'Hoa Ly', 'hoa-ly', '', 'hoa-ly.jpg', 0, 0, 'hoa ly', 'hoa ly', '2023-10-04 20:35:33', '2023-10-04 20:35:33', 1, NULL, 1),
(6, 'Hoa Tulip', 'hoa-tulip', '', 'hoa-tulip.jpg', 0, 0, 'hoa tulip', 'hao tulip', '2023-10-04 20:36:18', '2023-10-04 20:36:18', 1, NULL, 1),
(7, 'Lọ Gốm', 'lo-gom', '', 'lo-gom.jpg', 0, 0, 'lọ gốm', 'lọ gốm', '2023-10-04 20:36:55', '2023-10-04 20:36:55', 1, NULL, 1),
(8, 'Lọ Thủy Tinh', 'lo-thuy-tinh', 'lọ thủy tinh màu sắc bắt mắt, không độc hại cho sức khỏe', 'lo-thuy-tinh.jpg', 0, 0, 'lọ thủy tinh', 'lọ thủy tinh', '2023-10-04 20:37:35', '2023-10-11 04:29:15', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_config`
--

CREATE TABLE `nttl_config` (
  `id` bigint(20) NOT NULL,
  `author` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `status` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nttl_contact`
--

CREATE TABLE `nttl_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_contact`
--

INSERT INTO `nttl_contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 'Truc Ly', 'ly@gmail.com', '0987644231', 'mua hoa', 'hoa dep', 0, '2023-10-04 23:45:51', '2023-10-04 23:45:51', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_menu`
--

CREATE TABLE `nttl_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `position` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `table_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `type` varchar(255) NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_menu`
--

INSERT INTO `nttl_menu` (`id`, `name`, `user_id`, `position`, `link`, `table_id`, `parent_id`, `type`, `sort_order`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Trang chủ', 0, 'mainmenu', '/', 0, 0, 'post', 0, '2023-10-04 21:16:26', '2023-10-04 21:16:26', 1, NULL, 1),
(2, 'Sản phẩm', 0, 'mainmenu', 'san-pham', 0, 0, 'post', 0, '2023-10-04 21:16:56', '2023-10-04 21:16:56', 1, NULL, 1),
(3, 'Danh mục', 0, 'mainmenu', 'danh-muc-san-pham/hoa-tulip', 0, 2, 'post', 0, '2023-10-04 21:17:37', '2023-10-04 21:17:37', 1, NULL, 1),
(4, 'Liên hệ', 0, 'mainmenu', 'lien-he', 0, 0, 'post', 0, '2023-10-04 21:18:51', '2023-10-04 21:18:51', 1, NULL, 1),
(5, 'Khuyến mãi', 0, 'mainmenu', 'san-pham-sale', 0, 2, 'post', 0, '2023-10-04 21:20:23', '2023-10-04 21:20:23', 1, NULL, 1),
(6, 'Thương hiệu', 0, 'mainmenu', 'thuong-hieu/hoa-tuoi', 0, 2, 'post', 1, '2023-10-07 09:36:33', '2023-10-07 09:37:04', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_order`
--

CREATE TABLE `nttl_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nttl_orderdetail`
--

CREATE TABLE `nttl_orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `product_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `price` double(8,2) NOT NULL,
  `quality` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `discount` double NOT NULL,
  `amount` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nttl_post`
--

CREATE TABLE `nttl_post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `title` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `detail` mediumtext NOT NULL,
  `description` varchar(1000) NOT NULL,
  `type` varchar(1000) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_post`
--

INSERT INTO `nttl_post` (`id`, `topic_id`, `title`, `slug`, `image`, `detail`, `description`, `type`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 'Hoa moi', 'hoa-moi', 'hoa nhap khau ,mau sac bat mat, hoa decor, hoa cuoi.jpg', 'hoa nhap khau ,mau sac bat mat, hoa decor, hoa cuoi', '', 'post', 'hoa', 'hoa trang tri, hoa nhap khau du mau sac', '2023-10-04 23:02:37', '2023-10-04 23:43:22', 1, 1, 1),
(2, 1, 'hoa cam tu cau', 'hoa-cam-tu-cau', 'hoa cam tu cau.jpg', 'hoa dep', '', 'post', 'cam tu cau', 'hoa tron nhieu mau sac', '2023-10-04 23:44:45', '2023-10-04 23:44:45', 1, NULL, 1),
(3, 0, 'Giới thiệu', 'gioi-thieu', 'Giới thiệu.jpg', 'Xin chao moi nguoi den voi shop Tuclie', '', 'footer', 'gioi thieu', 'shop Tucliee', '2023-10-05 00:06:22', '2023-10-05 00:06:22', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_product`
--

CREATE TABLE `nttl_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `brand_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` double(8,2) NOT NULL,
  `pricesale` double(8,2) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `quality` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `detail` mediumtext NOT NULL,
  `description` varchar(1000) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_product`
--

INSERT INTO `nttl_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `type`, `price`, `pricesale`, `image`, `quality`, `detail`, `description`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 1, 1, 'Baby Trắng', 'baby-trang', 'sale', 25000.00, 19000.00, 'baby-trang.jpg', 6, 'hoa trang trí, quà tặng,....', '', 'baby trắng', 'baby', '2023-10-04 20:39:52', '2023-10-04 21:25:03', 1, 1, 1),
(2, 1, 1, 'Baby Vàng', 'baby-vang', 'product', 25000.00, 25000.00, 'baby-vang.jpg', 7, 'hoa trang trí,decor phòng ...', '', 'baby vàng', 'baby vàng', '2023-10-04 21:24:51', '2023-10-04 21:24:52', 1, NULL, 1),
(3, 1, 1, 'Baby Tím', 'baby-tim', 'product', 25000.00, 25000.00, 'baby-tim.jpg', 7, 'hoa quà, trang trí', '', 'baby tím', 'baby tím', '2023-10-04 21:26:06', '2023-10-04 21:26:06', 1, NULL, 1),
(4, 1, 1, 'Baby Xanh', 'baby-xanh', 'product', 24000.00, 24000.00, 'baby-xanh.jpg', 4, 'hoa xinh decor phòng, bàn làm việc..', '', 'baby xanh', 'baby xanh', '2023-10-04 21:27:11', '2023-10-04 21:27:11', 1, NULL, 1),
(5, 2, 1, 'Họa Mi Trắng', 'hoa-mi-trang', 'sale', 35000.00, 31000.00, 'hoa-mi-trang.jpg', 56, 'hoa cảnh, trang trí', '', 'họa mi trắng', 'họa mi trắng', '2023-10-04 21:28:50', '2023-10-04 21:28:50', 1, NULL, 1),
(6, 2, 1, 'Họa Mi Vàng', 'hoa-mi-vang', 'product', 34000.00, 34000.00, 'hoa-mi-vang.jpg', 7, 'hoa xinh decor', '', 'họa mi vàng', 'họa mi vàng', '2023-10-04 21:30:03', '2023-10-04 21:32:45', 1, 1, 1),
(7, 2, 1, 'Họa Mi Hồng', 'hoa-mi-hong', 'product', 35000.00, 35000.00, 'hoa-mi-hong.jpg', 6, 'hoa xinh trang trí', '', 'họa mi hồng', 'họa mi hồng', '2023-10-04 21:31:06', '2023-10-04 21:31:06', 1, NULL, 1),
(8, 2, 1, 'Họa Mi Đơn', 'hoa-mi-don', 'product', 32000.00, 32000.00, 'hoa-mi-don.jpg', 6, 'hoa decor phòng', '', 'họa mi đơn', 'họa mi dơn', '2023-10-04 21:32:30', '2023-10-04 21:32:30', 1, NULL, 1),
(9, 3, 1, 'Hồng Đỏ', 'hong-do', 'product', 31000.00, 31000.00, 'hong-do.jpg', 8, 'hoa quà, trang trí', '', 'hồng đỏ', 'hồng đỏ', '2023-10-04 21:34:00', '2023-10-04 21:34:00', 1, NULL, 1),
(10, 3, 1, 'Hồng Đen', 'hong-den', 'product', 34000.00, 34000.00, 'hong-den.jpg', 8, 'hoa xinh làm quà tặng, decor', '', 'hồng đen', 'hồng đen', '2023-10-04 21:34:58', '2023-10-04 21:34:58', 1, NULL, 1),
(11, 3, 1, 'Hồng Xanh', 'hong-xanh', 'sale', 37000.00, 32000.00, 'hong-xanh.jpg', 78, 'hoa tươi làm quà, trang trí', '', 'hồng xanh', 'hồng xanh', '2023-10-04 21:36:05', '2023-10-04 21:36:05', 1, NULL, 1),
(12, 3, 1, 'Hồng Trắng', 'hong-trang', 'product', 36000.00, 36000.00, 'hong-trang.jpg', 9, 'hoa decor, hoa cưới, hoa tặng', '', 'hồng trắng', 'hoong trắng', '2023-10-04 21:37:09', '2023-10-04 21:37:09', 1, NULL, 1),
(13, 4, 1, 'Hướng Dương Vàng Đỏ', 'huong-duong-vang-do', 'product', 42000.00, 42000.00, 'huong-duong-vang-do.jpg', 6, 'hoa decor, quà tặng, hoa cưới', '', 'vàng đỏ', 'vàng đỏ', '2023-10-04 21:38:50', '2023-10-04 21:38:50', 1, NULL, 1),
(14, 4, 1, 'Hướng Dương Vàng', 'huong-duong-vang', 'sale', 45000.00, 39000.00, 'huong-duong-vang.jpg', 56, 'hoa xinh, hoa cưới,...', '', 'dương vàng', 'dương vàng', '2023-10-04 21:40:09', '2023-10-04 21:40:09', 1, NULL, 1),
(15, 4, 1, 'Hướng Dương Trắng', 'huong-duong-trang', 'product', 43000.00, 38000.00, 'huong-duong-trang.jpg', 5, 'hoa đẹp, decor', '', 'dương trắng', 'dương trắng', '2023-10-04 21:41:02', '2023-10-04 21:41:02', 1, NULL, 1),
(16, 4, 1, 'Hướng Dương Đỏ', 'huong-duong-do', 'product', 45000.00, 45000.00, 'huong-duong-do.jpg', 4, 'hoa decor,...', '', 'dương đỏ', 'dương đỏ', '2023-10-04 21:41:52', '2023-10-04 21:41:52', 1, NULL, 1),
(17, 5, 1, 'Ly Tím', 'ly-tim', 'product', 39000.00, 39000.00, 'ly-tim.jpg', 3, 'hoa decor', '', 'ly tím', 'ly tím', '2023-10-04 21:42:57', '2023-10-04 21:42:57', 1, NULL, 1),
(18, 5, 1, 'Ly Trắng', 'ly-trang', 'sale', 40000.00, 37000.00, 'ly-trang.jpg', 56, 'hoa decor', '', 'ly trắng', 'ly trắng', '2023-10-04 21:43:58', '2023-10-04 21:43:58', 1, NULL, 1),
(19, 5, 1, 'Ly Đỏ', 'ly-do', 'product', 41000.00, 41000.00, 'ly-do.jpg', 3, 'hoa trang trí', '', 'ly đỏ', 'ly dỏ', '2023-10-04 21:45:11', '2023-10-04 21:45:11', 1, NULL, 1),
(20, 5, 1, 'Ly Vàng', 'ly-vang', 'product', 39000.00, 39000.00, 'ly-vang.jpg', 6, 'hoa decor', '', 'ly vàng', 'ly vàng', '2023-10-04 21:46:02', '2023-10-04 21:46:02', 1, NULL, 1),
(22, 6, 1, 'Tulip Trắng', 'tulip-trang', 'sale', 47000.00, 44000.00, 'tulip-trang.jpg', 5, 'hoa decor, quà tặng, hoa cưới,...', '', 'tulip trắng', 'tulip trắng', '2023-10-04 21:47:58', '2023-10-04 21:47:58', 1, NULL, 1),
(23, 6, 1, 'Tulip Xanh Trắng', 'tulip-xanh-trang', 'product', 46000.00, 46000.00, 'tulip-xanh-trang.jpg', 5, 'hoa decor, quà tặng,...', '', 'tulip xanh trắng', 'tulip xanh trắng', '2023-10-04 21:49:20', '2023-10-04 21:49:20', 1, NULL, 1),
(24, 6, 1, 'Tulip Đen', 'tulip-den', 'product', 45000.00, 45000.00, 'tulip-den.jpg', 4, 'hoa decor,..', '', 'tulip đen', 'tulip đen huyền bí', '2023-10-04 21:50:20', '2023-10-04 21:50:20', 1, NULL, 1),
(25, 6, 1, 'Tulip Hồng', 'tulip-hong', 'product', 42000.00, 42000.00, 'tulip-hong.jpg', 4, 'hoa decor, tặng, hoa cưới,...', '', 'tulip hồng', 'tuli0p hồng', '2023-10-04 21:51:21', '2023-10-04 21:51:21', 1, NULL, 1),
(26, 7, 2, 'Lọ Xoắn Ốc', 'lo-xoan-oc', 'sale', 240000.00, 220000.00, 'lo-xoan-oc.jpg', 9, 'lọ hoa', '', 'lọ xoắn ốc', 'lọ xoắn ốc', '2023-10-04 21:52:37', '2023-10-04 21:52:37', 1, NULL, 1),
(28, 7, 2, 'Lọ Màu', 'lo-mau', 'product', 230000.00, 230000.00, 'lo-mau.jpg', 5, 'lọ hoa', '', 'lọ màu', 'lọ màu', '2023-10-04 21:54:38', '2023-10-04 21:54:38', 1, NULL, 1),
(29, 7, 2, 'Lọ Trắng', 'lo-trang', 'sale', 300000.00, 270000.00, 'lo-trang.jpg', 7, 'lọ hoa', '', 'lọ trắng', 'lọ trắng', '2023-10-04 21:56:40', '2023-10-04 21:56:40', 1, NULL, 1),
(30, 7, 2, 'Lọ Trắng Đen', 'lo-trang-den', 'product', 240000.00, 240000.00, 'lo-trang-den.jpg', 5, 'lọ hoa', '', 'trắng đen', 'trắng đen', '2023-10-04 21:57:42', '2023-10-04 21:57:42', 1, NULL, 1),
(31, 8, 2, 'Lọ Tím', 'lo-tim', 'product', 310000.00, 310000.00, 'lo-tim.jpg', 4, 'lọ hoa', '', 'lọ tím', 'lọ tim', '2023-10-04 21:58:58', '2023-10-04 21:58:58', 1, NULL, 1),
(32, 8, 2, 'Lọ Sao', 'lo-sao', 'sale', 320000.00, 290000.00, 'lo-sao.jpg', 9, 'lọ hoa', '', 'lọ sao', 'lọ sao', '2023-10-04 21:59:59', '2023-10-04 21:59:59', 1, NULL, 1),
(33, 8, 2, 'Lọ Trong Suốt', 'lo-trong-suot', 'product', 290000.00, 290000.00, 'lo-trong-suot.jpg', 6, 'lọ hoa', '', 'trong suốt', 'trong suốt', '2023-10-04 22:01:01', '2023-10-04 22:01:01', 1, NULL, 1),
(34, 8, 2, 'Lọ Tròn', 'lo-tron', 'product', 280000.00, 280000.00, 'lo-tron.jpg', 7, 'lọ hoa', '', 'lọ tròn', 'lọ tròn', '2023-10-04 22:01:52', '2023-10-04 22:01:52', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_productsale`
--

CREATE TABLE `nttl_productsale` (
  `id` bigint(20) NOT NULL,
  `product_id` int(11) NOT NULL,
  `pricesale` double NOT NULL,
  `quanlity` int(11) NOT NULL,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `status` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nttl_productstore`
--

CREATE TABLE `nttl_productstore` (
  `id` bigint(20) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `quanlity` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `status` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nttl_slider`
--

CREATE TABLE `nttl_slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `position` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_slider`
--

INSERT INTO `nttl_slider` (`id`, `name`, `link`, `sort_order`, `position`, `description`, `image`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Slider 1', 'slider', 0, 'slidershow', '', 'Slider 1.jpg', '2023-10-04 20:41:04', '2023-10-04 20:41:04', 1, NULL, 1),
(2, 'slider 2', 'slider', 0, 'slidershow', '', 'slider 2.jpg', '2023-10-04 20:41:29', '2023-10-04 20:41:29', 1, NULL, 1),
(3, 'slider3', 'slider', 0, 'slidershow', '', 'slider3.jpg', '2023-10-04 20:41:56', '2023-10-04 20:41:56', 1, NULL, 1),
(4, 'slider 4', 'slider', 0, 'slidershow', '', 'slider 4.jpg', '2023-10-04 20:42:26', '2023-10-04 20:42:26', 1, NULL, 1),
(5, 'slider 5', 'slider', 0, 'slidershow', '', 'slider 5.jpg', '2023-10-04 20:42:54', '2023-10-04 20:42:55', 1, NULL, 1),
(6, 'slider6', 'slider', 0, 'slidershow', 'hoa', 'slider6.jpg', '2023-10-04 20:43:17', '2023-10-11 03:38:35', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_topic`
--

CREATE TABLE `nttl_topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `sort_order` int(11) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_topic`
--

INSERT INTO `nttl_topic` (`id`, `name`, `slug`, `description`, `sort_order`, `parent_id`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Hoa Tulip', 'hoa-tulip', '0', 0, 0, 'hoa xinh', 'hoa xinh', '2023-06-29 23:29:21', NULL, 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nttl_user`
--

CREATE TABLE `nttl_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nttl_user`
--

INSERT INTO `nttl_user` (`id`, `name`, `gender`, `email`, `phone`, `username`, `password`, `address`, `image`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'nguyen', '', 'nguyen@gmail.com', '1234567890', NULL, '123', NULL, 'avt.jpg', 'user', '2023-10-05 04:33:20', '2023-10-05 04:33:20', 1, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nttl_brand`
--
ALTER TABLE `nttl_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_category`
--
ALTER TABLE `nttl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_contact`
--
ALTER TABLE `nttl_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_menu`
--
ALTER TABLE `nttl_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_order`
--
ALTER TABLE `nttl_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_orderdetail`
--
ALTER TABLE `nttl_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_post`
--
ALTER TABLE `nttl_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_product`
--
ALTER TABLE `nttl_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_slider`
--
ALTER TABLE `nttl_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_topic`
--
ALTER TABLE `nttl_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nttl_user`
--
ALTER TABLE `nttl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nttl_brand`
--
ALTER TABLE `nttl_brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nttl_category`
--
ALTER TABLE `nttl_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `nttl_contact`
--
ALTER TABLE `nttl_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `nttl_menu`
--
ALTER TABLE `nttl_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `nttl_order`
--
ALTER TABLE `nttl_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nttl_orderdetail`
--
ALTER TABLE `nttl_orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nttl_post`
--
ALTER TABLE `nttl_post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `nttl_product`
--
ALTER TABLE `nttl_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `nttl_slider`
--
ALTER TABLE `nttl_slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `nttl_topic`
--
ALTER TABLE `nttl_topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nttl_user`
--
ALTER TABLE `nttl_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
