# 二手交易平台 - 後端 api 系統

**幾點注意事項先紀錄在這邊：**
1. 有任何動作之前，一定要開新的 branch，切勿直接改動 master 的東西

2. commit 的標題請標註清楚這個 commit 做了什麼？(ex. 建立使用者登入功能 , 修改用戶聯絡平台功能)

4. 驗證登入身份的條件統一由 userId 驗證

5. api 回傳的 response 請依照規定格式填寫：(可參考 https://hackmd.io/tpoyClJGRW6kfrby5hmIHg?both)

```
{
  "ok": 1,   // 第一個值寫 ok 回傳成功寫 1 回傳失敗寫 0，所有 response 都要設定第一個值
  "data": {  // 第二個值寫 data 裡面寫回傳的資料，用物件包起來，如果不用回傳資料就不用設定第二個值
    ...
  }
}
```
