# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2026-04-04

### Added
- 新增 Vite 开发代理配置（`/api` → `localhost:8080`），前端开发模式下无需手动切换接口地址即可联调本地后端
- `vercel.json` 新增 `/api` 反向代理规则，云端部署后前端请求自动路由至云端后端服务

### Changed
- 前端请求基地址由写死的云端地址统一改为相对路径 `/api`，实现本地/云端环境零修改自动切换
- 项目品牌名称由「Tlias 智能学习辅助系统」正式更名为「**智汇教务管理系统**」，登录页、顶部导航栏、浏览器标签页标题同步更新
- 移除请求拦截器中产生噪音的 `console.log(localStorage.getItem('loginUser'))` 调试日志

### Fixed
- 修复本地前端实际调用云端后端的环境配置错误，本地联调结果不再受云端数据与权限干扰

---

## [1.1.0] - 2026-03-28

### Added
- 新增全局路由守卫（`beforeEach`），未携带有效 Token 时统一拦截并跳转至登录页，防止未授权访问
- 登录页新增测试账号提示卡片，面试演示场景下无需口头告知账号信息
- Axios 响应拦截器新增 401 自动处理：清除本地过期登录状态并重定向至登录页

### Fixed
- 修复生产环境登录接口路径错误导致的 404 问题

---

## [1.0.0] - 2026-03-20

### Added
- 完成前端工程初始化：Vue 3 + Vite + Element Plus + Vue Router + Pinia + ECharts
- 实现登录模块：用户名/密码表单、JWT Token 写入 localStorage
- 实现部门管理：列表查询、新增、修改、删除
- 实现员工管理：带条件筛选的分页列表、新增、修改、删除、头像上传（Aliyun OSS）
- 实现班级管理与学员管理：完整增删改查流程
- 实现数据统计看板：员工与学员信息 ECharts 可视化图表
- 实现操作日志查询：分页展示系统操作记录
- 完成 Vercel 部署配置，支持 SPA 路由回退
