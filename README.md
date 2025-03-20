# Blog Management System - Frontend (Angular)

## 專案簡介
一個基於 Spring Boot 和 MySQL 的部落格管理系統，提供文章管理、使用者管理、評論管理等功能。

## 技術
- **後端**: Java Spring Boot
- **前端**: Angular
- **數據庫**: MySQL

## 啟動指南
1. 安裝所需依賴：`mvn install`
2. 啟動後端：`mvn spring-boot:run`
3. 啟動前端：進入 `/angular` 目錄，執行 `ng serve`
```
## 文件結構
/angular
 ├── src
 │    ├── app
 │    │    ├── pages
 │    │    │    ├── post-list
 │    │    │    │    └── post-list.component.ts
 │    │    │    ├── post-detail
 │    │    │    │    └── post-detail.component.ts
 │    │    │    ├── comment-list
 │    │    │    │    └── comment-list.component.ts
 │    │    │    ├── comment-create
 │    │    │    │    └── comment-create.component.ts
 │    │    │    ├── create-post
 │    │    │    │    └── create-post.component.ts
 │    │    │    ├── search-by-name
 │    │    │    │    └── search-by-name.component.ts
 │    │    │    ├── view-all
 │    │    │    │    └── view-all.component.ts
 │    │    │    ├── view-post
 │    │    │    │    └── view-post.component.ts
 │    │    ├── @service
 │    │    │    ├── post.service.ts
 │    │    │    ├── comment.service.ts
 │    ├── app.component.ts
 ├── angular.json
 ├── package.json
 └── tsconfig.json
```



## 文件解釋
前端 Angular 結構：

components: 包含所有的 Angular 元件，負責展示資料，與後端 API 交互並更新前端界面。

例如：post.component.ts, post-detail.component.ts, comment-list.component.ts
services: 負責與後端 API 進行通訊，處理 HTTP 請求。

例如：post.service.ts, comment.service.ts



