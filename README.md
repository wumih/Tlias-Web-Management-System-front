<h1 align="center">智汇教务管理系统</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat-square&logo=vue.js" />
  <img src="https://img.shields.io/badge/Vite-3.x-646CFF?style=flat-square&logo=vite" />
  <img src="https://img.shields.io/badge/Spring_Boot-3.5.6-6DB33F?style=flat-square&logo=spring-boot" />
  <img src="https://img.shields.io/badge/MyBatis-3.5.x-D2691E?style=flat-square" />
  <img src="https://img.shields.io/badge/MySQL-8.x-4479A1?style=flat-square&logo=mysql" />
  <img src="https://img.shields.io/badge/JWT-Auth-000000?style=flat-square&logo=jsonwebtokens" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" />
</p>

---

## 📖 项目简介

**智汇教务管理系统** 是一套面向中小型教培机构的全栈管理平台，涵盖员工管理、部门管理、班级管理、学员管理与数据统计等核心业务模块。

- 🎯 **核心定位**：一体化教务 B/S 管理系统，统一管理机构人员、课程与学员信息
- 🔐 **鉴权体系**：基于 JWT 的无状态 Token 认证，配合前端路由守卫完整覆盖登录鉴权链路
- ☁️ **云原生就绪**：后端采用环境变量驱动配置，支持一键部署到 Railway / Render 等 PaaS 平台

---

## 🛠️ 核心技术栈

### 前端
- **Vue 3** + **Vite 3** — 现代响应式 SPA 框架
- **Element Plus** — 企业级 UI 组件库
- **Axios** — HTTP 请求库，配置请求/响应拦截器
- **Vue Router 4** — 前端路由管理，含全局路由守卫
- **Pinia** — 状态管理
- **ECharts 5** — 数据可视化图表

### 后端
- **Spring Boot 3.5.6** — 核心框架
- **MyBatis + PageHelper** — ORM 持久层 + 分页插件
- **MySQL 8.x** — 关系型数据库
- **JWT (jjwt 0.11.5)** — 接口鉴权
- **Spring AOP** — 操作日志切面记录
- **Aliyun OSS** — 文件/图片云存储

---

## 📁 目录结构说明

```
├── src/
│   ├── api/              # 各模块 Axios 接口封装（dept, emp, clazz, stu, log, report）
│   ├── router/           # Vue Router 路由配置与路由守卫
│   ├── stores/           # Pinia 状态管理模块
│   ├── utils/
│   │   └── request.js    # Axios 实例：baseURL、Token 注入、401 跳转拦截
│   └── views/
│       ├── login/        # 登录页
│       ├── layout/       # 主框架（Header + Aside 侧边菜单）
│       ├── dept/         # 部门管理
│       ├── emp/          # 员工管理
│       ├── clazz/        # 班级管理
│       ├── stu/          # 学员管理
│       ├── report/       # 数据统计（ECharts 图表）
│       └── log/          # 操作日志查询
├── index.html            # 入口 HTML，设置页面 title
├── vite.config.js        # Vite 配置：开发代理（/api → 本地 8080）
├── vercel.json           # Vercel 部署配置：SPA 路由回退 + /api 反向代理
└── package.json
```

---

## 🚀 快速启动

### 1️⃣ 环境准备

| 环境 | 版本要求 |
|---|---|
| Node.js | ≥ 18.x |
| Java JDK | 21 |
| MySQL | 8.x |
| Maven | 3.8+ |

### 2️⃣ 数据库初始化

```sql
CREATE DATABASE wb01 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- 导入项目根目录下的 wb01.sql 初始化表结构与基础数据
SOURCE /path/to/wb01.sql;
```

### 3️⃣ 后端配置

后端使用**环境变量驱动配置**，本地开发时在 IntelliJ IDEA 的 Run Configuration → Environment variables 中填写：

```
MYSQLHOST=localhost
MYSQLPORT=3306
MYSQLDATABASE=wb01
MYSQLUSER=root
MYSQLPASSWORD=你的本地MySQL密码
```

无需修改 `application.yml` 文件。

### 4️⃣ 启动后端

```bash
# 在 tlias-web-management 目录下
mvn spring-boot:run
# 或在 IDEA 中直接运行 TliasWebManagementApplication
# 默认监听 http://localhost:8080
```

### 5️⃣ 启动前端

```bash
cd Tlias-Web-Management-System-front
npm install
npm run dev
# 访问 http://localhost:5173
```

> 💡 前端已配置 `/api` 代理，开发模式下所有接口自动转发至 `localhost:8080`，无需手动修改任何地址。

### 6️⃣ 默认测试账号

| 用户名 | 密码 |
|---|---|
| `wuyong` | `123456` |

---

## ✨ 核心特性

- **🔐 JWT 无状态鉴权**：登录成功下发 Token，前端 Axios 拦截器自动注入请求头；Token 过期后服务端返回 401，前端自动清除本地状态并重定向至登录页
- **🛡️ 全局路由守卫**：Vue Router `beforeEach` 守卫检查 localStorage Token，未登录时统一拦截至登录页
- **📋 AOP 操作日志**：基于 Spring AOP 切面，对关键写操作自动记录操作人、操作时间与执行耗时，日志可在系统内查询
- **📊 数据统计看板**：集成 ECharts，提供员工与学员信息的可视化统计图表
- **☁️ 环境变量配置**：前后端均支持通过环境变量覆盖默认配置，无需针对不同部署环境改动源代码
- **🗂️ 分页查询**：集成 PageHelper，所有列表接口支持分页，避免大数据量下的性能问题
- **📦 阿里云 OSS 集成**：员工头像等文件上传至 Aliyun OSS，解耦文件存储与应用服务器

---

## 📄 附录

- 变更记录请查阅 [CHANGELOG.md](./CHANGELOG.md)
- 开源协议：[MIT License](./LICENSE)
