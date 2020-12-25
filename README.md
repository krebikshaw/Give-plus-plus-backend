# Give++ 二手交易平台

## 簡介
這是 Give++ 二手交易平台的後端原始碼，採用 Express 和 Sequelize 開發。

## 建置

1. 執行 `npm install` 安裝此專案所需的第三方套件

2. 新增 config/config.json，格式為：

   ```json
   {
     "development": {
       "username": "test",
       "password": "test",
       "database": "test",
       "host": "localhost",
       "dialect": "mysql"
     },
     "test": {
       "username": "test",
       "password": "test",
       "database": "test",
       "host": "localhost",
       "dialect": "mysql"
     },
     "production": {
       "username": "test",
       "password": "test",
       "database": "test",
       "host": "localhost",
       "dialect": "mysql",
     }
   }
   ```

3. 建立環境變數 .env，格式為：
    ```js
    SESSION_SECRET=''
    ```

4. 輸入指令 `npm run migrate` 以執行 Sequelize migration，在 MySQL 資料庫中建立 database 及 table。
  
5. 輸入指令 `npm run get-test-data` 以執行 Sequelize seeders 以在資料庫中建立初始 demo 資料。

## 開發
1. `npm run start`

## 部屬
1. `npm run build`

## 專案架構   

```js
|   index.js                 // App 伺服器入口點
|   package.json
|   package-lock.json
|   README.md
|
+---config
|     config.json            // Sequelize 設定檔
|       
+---controllers              // 處理 API 邏輯
|     userController.js
|     productController.js
|     cartController.js
|     orderController.js
|     manageController.js
|       
+---middlewares              // 自訂 middlewares
|     auth.js
|       
+---models                   // 透過 Sequelize 和資料庫溝通
|     index.js
|     user.js
|     product.js
|     product_category.js
|     cart.js
|     cart_items.js
|     order.js
|     order_items.js
|     faq.js
|     faq_category.js
|     mail.js
|     rule.js
|               
+---routes                    // 區分不同功能的 API 路由
|     userRoutes.js
|     productRoutes.js
|     cartRoutes.js
|     orderRoutes.js
|     manageRoutes.js
|       
+---node_modules
|       
+---migrations                // Sequelize migrations
|       
\---seeders                   // Sequelize seeders
```

## 使用的第三方 library

### bcrypt
使用此套件將密碼加密後再存入資料庫

### cors
使用此套件解決跨來源資源共用

### dotenv
使用此套件設置環境變數

### jsonwebtoken
使用 JWT 來實作登入機制驗證

### mysql2
使用 mysql2 連線資料庫

### sequelize
使用 ORM 工具 Sequelize 來操作資料庫

## API 文件

[詳細 API 文件參考連結](https://hackmd.io/@MpgA62bSRQShaDG7oBXMdg/SJ-Imc8dv)

## License

[MIT](https://choosealicense.com/licenses/mit/)
