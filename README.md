<div align="center">

# 🧠 哲迹 · Philotrace

**哲思的轨迹 — 让哲学思考融入每一天**

![Vue 3](https://img.shields.io/badge/Vue_3-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_5-646CFF?logo=vite&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router_4-35495E?logo=vue-router&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow)

> 第九组 · 毕业设计项目 — 广东某高校 222-07 班

</div>

---

## 📖 项目简介

**哲迹 (Philotrace)** 是一款以 **哲学普及** 为核心的移动端 Web 应用。名称取自 "哲思的轨迹"，寓意引导用户追踪哲学思想的演变历程，记录个人的思考路径。

项目以卡片化的方式呈现古今中外的哲学名言、大师介绍与学派理念，帮助用户在碎片化时间中轻松汲取哲学智慧。

---

## ✨ 功能特性

| 模块 | 功能 | 说明 |
|------|------|------|
| 📆 **每日哲思** | 每日推送经典哲学语句，支持日期切换、收藏、分享 | 培养每日思考习惯 |
| 🧠 **思想精选** | 浏览哲学名言卡片，支持"查看更多"分页加载 | 汇聚思想精华 |
| 👤 **哲学大师** | 介绍苏格拉底、柏拉图、康德等大师生平与思想 | 点击可查看详情 |
| 🏛 **哲学学派** | 展示斯宾诺莎学派、黑格尔唯心主义等学派理念 | 向下滑动返回 |
| 👤 **个人中心** | 学习时长统计、收藏夹管理、用户登录/注册 | 个性化体验 |

---

## 🛠 技术栈

### 前端

| 技术 | 用途 |
|------|------|
| [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`) | 响应式 UI 框架 |
| [Vue Router 4](https://router.vuejs.org/) | 客户端路由 (HTML5 History 模式) |
| [Vite 5](https://vitejs.dev/) | 构建工具与开发服务器 |
| CSS3 (Flexbox / Grid / 渐变 / 毛玻璃) | 深色主题 UI 与交互动画 |

### 后端（模拟 API）

| 技术 | 用途 |
|------|------|
| [Express](https://expressjs.com/) | RESTful API 服务器 |
| [CORS](https://www.npmjs.com/package/cors) | 跨域支持 |
| 内存数组 | 模拟数据存储 |

---

## 📂 项目结构

```
philotrace-vue/
├── index.html                         # 入口 HTML
├── package.json                       # 项目依赖配置
├── vite.config.js                     # Vite 构建配置
├── styles/
│   └── style.css                      # 全局基础样式（含暗色模式）
├── public/                            # 静态资源目录
├── src/
│   ├── main.js                        # Vue 应用入口
│   ├── App.vue                        # 根组件（路由视图 + 底部导航 + 全局动画）
│   ├── router/
│   │   └── index.js                   # 路由配置
│   ├── components/
│   │   └── BottomNav.vue              # 底部导航栏组件
│   └── views/
│       ├── DailyThink.vue             # 每日哲思
│       ├── Explorer.vue               # 哲学探索（思想精选）
│       ├── PhilosopherMaster.vue      # 哲学大师列表
│       ├── PhilosopherDetail.vue      # 哲学家详情（手势返回）
│       ├── PhilosophySchool.vue       # 哲学学派列表
│       ├── SchoolDetail.vue           # 学派详情（手势返回）
│       ├── UserCenter.vue             # 个人中心
│       ├── Login.vue                  # 登录
│       ├── Register.vue               # 注册
│       └── QuoteView.vue              # （预留/未启用）
└── philosophy-api/                    # 后端模拟 API
    ├── package.json
    └── server.js                      # Express API 服务
```

---

## 🔀 路由一览

| 路径 | 名称 | 页面 | 说明 |
|------|------|------|------|
| `/` | — | 重定向 → `/daily` | 自动跳转 |
| `/daily` | `DailyThink` | 每日哲思 | 首页 |
| `/explorer` | `Explorer` | 哲学探索 | 思想精选浏览 |
| `/philosopher-master` | `PhilosopherMaster` | 哲学大师 | 大师列表 |
| `/philosopher/:name` | `PhilosopherDetail` | 大师详情 | 动态路由 |
| `/philosophy-school` | `PhilosophySchool` | 哲学学派 | 学派列表 |
| `/schools/:name` | `SchoolDetail` | 学派详情 | 动态路由 |
| `/user` | `UserCenter` | 个人中心 | 需登录 |
| `/login` | `Login` | 登录 | 手机号+密码 |
| `/register` | `Register` | 注册 | 手机号+密码 |

---

## 🚀 快速开始

### 前置条件

- [Node.js](https://nodejs.org/) ≥ 18.x
- npm ≥ 9.x

### 安装并启动前端

```bash
# 克隆项目
git clone <your-repo-url>
cd philotrace-vue

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

浏览器打开 `http://localhost:5173` 即可预览。

### 启动后端 API（可选）

```bash
cd philosophy-api
npm install
node server.js
```

API 服务默认运行在 `http://localhost:3000`，提供以下接口：

| 接口 | 方法 | 说明 |
|------|------|------|
| `/api/philosophy/quotes` | GET | 分页获取名言 |
| `/api/philosophy/quotes/random` | GET | 随机名言 |
| `/api/philosophy/quotes/:id` | GET | 单条名言 |
| `/api/philosophy/categories` | GET | 获取分类 |
| `/api/philosophy/philosophers` | GET | 获取哲学家 |
| `/api/philosophy/quotes/:id/like` | POST | 点赞/取消 |
| `/api/philosophy/quotes/:id/favorite` | POST | 收藏/取消 |

### 构建生产版本

```bash
npm run build    # 输出到 dist/
npm run serve    # 预览构建结果
```

---

## 🎨 设计亮点

- **深色主题**：以 `#0d0d0d` / `#121212` 为主色，营造沉浸式阅读氛围
- **Wave SVG 背景**：多页面叠加半透明波浪背景，增加视觉层次
- **毛玻璃卡片**：`backdrop-filter: blur(20px)` 配合渐变背景，呈现高级质感
- **上滑页面切换**：路由切换使用 `translateY` 上滑过渡动画，类原生 App 体验
- **手势交互**：详情页支持触摸下滑返回（> 50px 触发），提升移动端操作直觉
- **响应式暗色模式**：`prefers-color-scheme: dark` 媒体查询支持系统级暗色适配

## 📄 相关文档

- [毕业设计项目总结文档](./docs/毕业设计项目总结.docx) — 详细的项目总结报告

---

## 📌 TODO / 改进方向

- [ ] 接入真实后端数据库，替换内存模拟数据
- [ ] 添加搜索功能（目前搜索框为占位）
- [ ] 补全哲学家/学派详情页的完整数据
- [ ] 添加头像图片资源（当前使用占位图）
- [ ] 注册登录功能接入真实 JWT 鉴权
- [ ] 添加 PWA 支持，实现离线访问
- [ ] 添加 i18n 国际化（中英文切换）
- [ ] 单元测试与 E2E 测试

---

## 📃 许可证

[MIT](./LICENSE)

---

<div align="center">
  <sub>✨ 哲迹 · 记录思想的轨迹 ✨</sub>
</div>
