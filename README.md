# 二手交易平台 - 後端 api 系統

下載案後：
1. 補上 config.json
2. 安裝套件 `npm install`
3. 建立 table `npm run migrate`
4. 啟動 server `npm run start`
5. 生成測試用使用者資料 `npm run get-test-data`

**幾點注意事項先紀錄在這邊：**
1. 有任何動作之前，一定要開新的 branch，切勿直接改動 master 的東西

2. commit 的標題請標註清楚這個 commit 做了什麼？
    * 範例： 建立使用者登入功能 , 修改用戶聯絡平台功能

3. 驗證登入身份的功能，**（已更新 jwt 身份驗證方法，請改由 jwt 身份驗證方式）**

jwt 身份驗證，使用方法如下：
* 在 controller 上方引入 checkToken 這個方法
  * const { checkToken } = require('../middlewares/auth');
* 在需要做驗證的時候，呼叫 checkToken(req)，把 request 傳進去，它會回傳 username 給你

```
// 簡易示範
const { checkToken } = require('../middlewares/auth');    // 引入 checkToken

const userController = {
  updateUser: (req, res,) => {

    // 在需要做驗證的地方，呼叫 checkToken(req)
    const username = checkToken(req) || '';  

    // 錯誤處理，沒拿到 username 就回傳錯誤
    if (!username) return res.status(400).json({"ok":0,"data":"missing token"});
    .
    .
    .
       //  利用拿到的 username 來做事
  }
}
```
有拿到 username 就代表驗證成功，沒拿到就代表驗證失敗，所以驗證失敗就回傳錯誤訊息

**如果這邊示範不清楚，可以參考 userController.getOwnInfo 的寫法**


jwt 身份驗證，測試方法如下：
* 測試 API 的時候，於 header 上面帶上參數
  * key 填上： `Authorization`
  * value 填上： `'Bearer ' + token`
* token 可以利用官網 的轉換工具來產生

```
key:
Authorization

value:
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJuYW1lIjoibHVja3lsdWNreSJ9LCJleHAiOjE2MDkwNTAzMDAsImlhdCI6MTYwNTY2NjMwMH0.UZQbxATmdoh4KsazfH0IzepqOW86jCo77C24ShGWGlI

// 上面這段 token 裡面帶著的資料為 username: "success"
```

4. api 回傳的 response 請依照規定格式填寫：(可參考 https://hackmd.io/tpoyClJGRW6kfrby5hmIHg?both)

```
{
  "ok": 1,   // 第一個值寫 ok 回傳成功寫 1 回傳失敗寫 0，所有 response 都要設定第一個值
  "data": {  // 第二個值寫 data 裡面寫回傳的資料，用物件包起來，如果不用回傳資料就不用設定第二個值
    ...
  }
}

  "ok": 0  的情況：
     - 例如：表單資料不齊、身份驗證有誤、資料庫更新失敗、只要是預期動作沒辦法完成，都回傳 "ok": 0

```

5. 要改動 index.js
    * 先在群組告知
    * 另外開一條專門改 index.js 的 branch
    * 改完之後發 pull request 請第二個人幫你檢查
    * merge 之後於群組通知大家更新
    
    
