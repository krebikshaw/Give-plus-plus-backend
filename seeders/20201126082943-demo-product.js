'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        ProductCategoryId: 1,
        UserId: 1,
        name: '精梳棉 床包組',
        picture_url:
          'https://i.pinimg.com/236x/db/60/4c/db604cd8b93b5619d4627d6c5e434518.jpg',
        info:
          '8成新，無破損，只使用一次。100%精選精梳棉, 純棉透氣舒適，觸感柔順，四季通用，非常優質的布料。純棉素材經過精梳處理後，將部分短纖維濾掉，留下長纖維，所以更不易起毛球，觸感更舒適，雖然成本高，但是價位卻仍然平易近人。',
        price: 180,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 1,
        name: '氣質沙發',
        picture_url:
          'https://i.pinimg.com/236x/ee/61/87/ee61872f8ede96ba3d4299fd90a69c99.jpg',
        info:
          '氣質高雅, 純棉透氣舒適，觸感柔順，非常優質的布料，非常適合情侶跟小家庭。純棉素材經過精梳處理後，不易起毛球，觸感更舒適，忍痛割捨，期望有緣人得到它。5成新，背面有點刮痕，但看不到。',
        price: 500,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 1,
        name: '藤椅沙發',
        picture_url:
          'https://i.pinimg.com/236x/b6/90/6d/b6906deee6d40a35a60b3b88b428cc5a.jpg',
        info:
          '7成新，沒什麼遐思，可以 email 我查看更多照片。木質外觀，增添氣質, 外剛而內軟，採用優質的布料，躺著坐著都合適。純棉素材經過精梳處理後，不易起毛球，觸感更舒適，忍痛割捨，期望有緣人得到它。',
        price: 700,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 11,
        name: '黑色檯燈',
        picture_url:
          'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '3成新，可以 email 我查看更多照片。積在倉庫一陣子了，燈泡以重新換過，功能都很好，沒毛病。',
        price: 100,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 11,
        name: '象牙白浴缸',
        picture_url:
          'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '7成新，底部有一點點刮痕，大概 4 公分。總長度 130 公分，寬 70 公分，容量 7000cc，喜歡歡迎詢問。',
        price: 1000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 11,
        name: '窗簾',
        picture_url:
          'https://images.pexels.com/photos/2766345/pexels-photo-2766345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '9成新，用過 2 次，由於搬家所以出售，沒有任何遐思，長度 2 米，可以先良好自家窗戶大小再來考慮，喜歡歡迎詢問。',
        price: 280,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 21,
        name: '窗簾',
        picture_url:
          'https://images.pexels.com/photos/3255244/pexels-photo-3255244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '4成新，表面有一些地方有泛黃痕跡，很透風，很雅致，喜歡歡迎詢問。',
        price: 80,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 21,
        name: '個人沙發椅',
        picture_url:
          'https://images.pexels.com/photos/105004/pexels-photo-105004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '8成新，坐起來很舒適，可以躺平，由於家父用不習慣，所以出售，喜歡歡迎詢問。',
        price: 950,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 21,
        name: '窗簾',
        picture_url:
          'https://images.pexels.com/photos/763147/pexels-photo-763147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '4成新，一點點破損，被貓抓破的，很大的窗簾，很輕盈不笨重，喜歡歡迎詢問。',
        price: 150,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 31,
        name: '椅子',
        picture_url:
          'https://images.pexels.com/photos/1321290/pexels-photo-1321290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '全新，抽獎抽到的，沒用過，喜歡歡迎詢問。',
        price: 350,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 31,
        name: '鏡子',
        picture_url:
          'https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '全新，抽獎抽到的，沒用過，喜歡歡迎詢問。',
        price: 350,
        quantity: 2,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 31,
        name: '老花眼鏡',
        picture_url:
          'https://images.pexels.com/photos/5273692/pexels-photo-5273692.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '全新，抽獎抽到的，因為用不到，所以售出，喜歡直接拿走。',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 41,
        name: '黑色置物架',
        picture_url:
          'https://images.pexels.com/photos/683929/pexels-photo-683929.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '8成新，由於擺不下，所以想出售，可以擺書或擺放個人物品，框架較細，不適合放重物，請考慮清楚再詢問，謝謝',
        price: 300,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 41,
        name: '檯燈',
        picture_url:
          'https://images.pexels.com/photos/4915562/pexels-photo-4915562.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '３成新，給小孩讀書用的，小孩畢業後用不到了，所以想出售，電線長度只有 40 公分，只能放在插座附近，請考慮清楚再詢問，謝謝',
        price: 300,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 41,
        name: '膠盤播放器',
        picture_url:
          'https://images.pexels.com/photos/594388/vinyl-record-player-retro-594388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '70年了，很有紀念價值，還有播放功能，外面很難找到了，值得你的收藏。',
        price: 900,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 51,
        name: '大條毛巾、浴巾',
        picture_url:
          'https://images.pexels.com/photos/4210376/pexels-photo-4210376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '全新的，都沒用過。參加活動送的，台灣製作的，質地不錯。',
        price: 300,
        quantity: 10,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 51,
        name: '皮鞋',
        picture_url:
          'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '男版皮鞋，大小 12 號，26 公分。9 成新，只穿過一次，不合腳，算半價賣出就好。',
        price: 1700,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 51,
        name: '木腳椅',
        picture_url:
          'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '椅子全新，比捷運或公車的椅子都舒服，賤價拍賣，喜歡的人歡迎詢問',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 61,
        name: '躺椅',
        picture_url:
          'https://images.pexels.com/photos/112474/pexels-photo-112474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '5 成新，可躺可坐，質地很軟很舒服，躺著坐著看書看電視都可以唷',
        price: 400,
        quantity: 2,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 61,
        name: '木椅',
        picture_url:
          'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '8 成新，耐用堅固，不會有搖晃不穩的問題，做久了也不會腰痠。',
        price: 300,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 61,
        name: '蘋果電腦',
        picture_url:
          'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '全新，整組出價，一台螢幕一台主機＋鍵盤＋滑鼠＋電源線',
        price: 80000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 71,
        name: '雙螢幕',
        picture_url:
          'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '兩個大螢幕，32 寸，很適合寫 code，用過了就知道',
        price: 8000,
        quantity: 2,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 71,
        name: '蘋果筆電',
        picture_url:
          'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '5 成新，13 寸，處理器：1.8 GHz 雙核心Intel Core i5，記憶體：8 GB 1600 MHz DDR3，顯卡：Intel HD Graphics 6000 1536 MB',
        price: 20000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 71,
        name: '蘋果螢幕',
        picture_url:
          'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '7 成新，27 寸，有貼保護貼，附電源線，提供箱子',
        price: 10000,
        quantity: 2,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 81,
        name: '蘋果螢幕',
        picture_url:
          'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '全新/畫質優良,無亮暗線,面板無瑕疵 / 外觀優良,但一定有使用痕跡 / 含電源線+訊號線 完整配件 / 保固三個月 /經熱機測試24小時',
        price: 800,
        quantity: 3,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 81,
        name: '蘋果電腦',
        picture_url:
          'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '頂級效能系統 + SSD絕配，高畫質15.6吋HD 1366 x 768 追劇神器 高速硬碟 比傳統硬碟快5倍，隨開即用20秒開機 比手機還快',
        price: 50000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 81,
        name: '蘋果電腦',
        picture_url:
          'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '螢幕面板保無破 亮暗點部份不保(二手主機 難免 新主機都可能有了)，周邊商品、軟體、外觀 不在保固範圍 頂級效能系統 + SSD絕配，高畫質15.6吋HD 1366 x 768 追劇神器 高速硬碟 比傳統硬碟快5倍，隨開即用20秒開機 比手機還快',
        price: 40000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 91,
        name: '筆記型電腦',
        picture_url:
          'https://images.pexels.com/photos/2349209/pexels-photo-2349209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '3 成新，擴充完整 無線鍵鼠 電視 網路 音響.....都可串接',
        price: 7000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 91,
        name: '蘋果電腦',
        picture_url:
          'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '6 成新，13 寸，處理器：1.8 GHz 雙核心Intel Core i5，記憶體：8 GB 1600 MHz DDR3，顯卡：Intel HD Graphics 6000 1536 MB',
        price: 7000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 91,
        name: '蘋果手機',
        picture_url:
          'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '6 成新，機型：iphone10，容量：64Ｇ，外觀完整，附充電線，電池剛換過',
        price: 20000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 101,
        name: '蘋果手機',
        picture_url:
          'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '8 成新，機型：iphone8 plus，容量：64Ｇ，外觀完整，附保固書',
        price: 35000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 101,
        name: '蘋果手機',
        picture_url:
          'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '6 成新，機型：iphone6，容量：32Ｇ，背蓋有一點小刮痕，螢幕完整',
        price: 5000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 101,
        name: '蘋果手機',
        picture_url:
          'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '4 成新，機型：iphone6，容量：32Ｇ，霧面保護貼，藍色背殼',
        price: 6000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 111,
        name: 'iphone8',
        picture_url:
          'https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '全新，128G，附保固書 + 充電線 + 盒子',
        price: 60000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 111,
        name: 'iphone10',
        picture_url:
          'https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '全新，128G，附保固書 + 充電線 + 盒子 + 充電座',
        price: 52000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 111,
        name: 'iphone6',
        picture_url:
          'https://images.pexels.com/photos/249324/pexels-photo-249324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '4 成新，16G，附充電線 + 盒子 + 充電座',
        price: 2800,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 121,
        name: '智慧機器人',
        picture_url:
          'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '全新，能回應能行動，可照料長輩的生活，可提醒吃藥時間，可自動啟動家電',
        price: 180000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 121,
        name: '空拍機',
        picture_url:
          'https://images.pexels.com/photos/5858407/pexels-photo-5858407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '全新，攝影拍照樣樣方便，滯空時間長達 5 小時，可操作距離 300 公尺。',
        price: 130000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 121,
        name: 'VR 顯示器',
        picture_url:
          'https://images.pexels.com/photos/834949/pexels-photo-834949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '全新，HTC 最新規格，附贈兩款基礎遊戲 + 防塵套',
        price: 90000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 11,
        UserId: 131,
        name: '蘋果電腦',
        picture_url:
          'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '6 成新，13 寸，處理器：1.8 GHz 雙核心Intel Core i5，記憶體：8 GB 1600 MHz DDR3，顯卡：Intel HD Graphics 6000 1536 MB',
        price: 30000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 131,
        name: '充氣床',
        picture_url:
          'https://images.pexels.com/photos/5269898/pexels-photo-5269898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '8成新，用過 2 次，戲水，遊玩，方便攜帶，充氣後好收納（此圖為官網照片，非實際商品）',
        price: 2000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 131,
        name: '模型人偶',
        picture_url:
          'https://images.pexels.com/photos/2882361/pexels-photo-2882361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '小公仔，舒壓，可愛，適合擺放於桌面',
        price: 50,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 141,
        name: '小水晶球',
        picture_url:
          'https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '魔幻水晶球，表面乾淨無瑕疵，可至於客廳當擺飾',
        price: 500,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 141,
        name: '徵陪讀',
        picture_url:
          'https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '準備期中考中，希望徵陪讀，地點在台大公館，週末六日 8 小時。',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 141,
        name: '徵讀書會',
        picture_url:
          'https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '想找讀書會，交流書籍，分享興趣，每週聚會一次',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 151,
        name: '徵廚藝夥伴',
        picture_url:
          'https://images.pexels.com/photos/267355/pexels-photo-267355.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '想找人一起下廚，研究西餐，喜歡烤龍蝦，剛學會處理波龍，希望未來能煮出美味的西餐，目標挑戰大戰龍',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 151,
        name: '徵 SEO 程師導師',
        picture_url:
          'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '目前在學習 SEO，想找前輩當面請教，地點在台北即可，費用可以討論。',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 151,
        name: '徵環島夥伴',
        picture_url:
          'https://images.pexels.com/photos/164287/pexels-photo-164287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '想徒步環島，希望找夥伴一起。出發日期預計在隔年 3 月，行程可以討論',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 161,
        name: '徵桌遊夥伴',
        picture_url:
          'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '喜歡玩桌遊，想找喜歡玩桌遊的夥伴，地點在台北。目前家中有收藏買兩款遊戲，拉密、進化論',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 161,
        name: '徵程式家教',
        picture_url:
          'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '想轉職工程師，目前在考慮找家教來教，主要希望能應徵前端工程師，預算為 10 萬。',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 161,
        name: '徵自行車夥伴',
        picture_url:
          'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '喜歡騎自行車，想找同好，週末一同騎車。',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 171,
        name: '徵談心夥伴',
        picture_url:
          'https://images.pexels.com/photos/3656855/pexels-photo-3656855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '一個人時會焦慮，希望能有長時間聊天的朋友，不限年齡不限性別。',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 171,
        name: '徵新手媽媽社團',
        picture_url:
          'https://images.pexels.com/photos/3661264/pexels-photo-3661264.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info:
          '想找新手媽媽合適的社團，可以帶小朋友去玩的地方，讓小朋友可以認識其他朋友',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 171,
        name: '徵讀書會',
        picture_url:
          'https://images.pexels.com/photos/3779187/pexels-photo-3779187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '徵讀書夥伴，一起學習一起努力，地點在台北，每週交流一次',
        price: 0,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 181,
        name: '舊飛鏢',
        picture_url:
          'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '一個靶 + 5 隻鏢，3 成新',
        price: 20,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 181,
        name: '皮卡丘裝',
        picture_url:
          'https://images.pexels.com/photos/1049622/pexels-photo-1049622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '8 成新，去年尾牙用過一次，便宜售出',
        price: 5000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 181,
        name: '陶壺',
        picture_url:
          'https://images.pexels.com/photos/6243368/pexels-photo-6243368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '全新，家父自製，興趣而已，對外不販售。喜歡的可以詢問喔',
        price: 100,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 191,
        name: '魔術方塊',
        picture_url:
          'https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '全新，交換禮物換到的，不會玩，便宜出售',
        price: 80,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 191,
        name: '聖誕樹',
        picture_url:
          'https://images.pexels.com/photos/4834891/pexels-photo-4834891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '新鮮聖誕樹，已修剪過，家裡擺不下了，看看有沒有人喜歡，便宜出售',
        price: 500,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 21,
        UserId: 191,
        name: '獨木舟',
        picture_url:
          'https://images.pexels.com/photos/3002131/pexels-photo-3002131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        info: '3 成新，疫情影響，現在不太滑了，有同好歡迎詢問',
        price: 1200,
        quantity: 5,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ProductCategoryId: 31,
        UserId: 151,
        name: '質感百褶中長裙 - 3color',
        picture_url: 'https://i.imgur.com/Gv6T7KQ.jpg',
        info: `
        腰圍30(鬆緊腰) / 臀圍75 / 下擺圍133 / 全長80
        Made in Korea.
        Ｍodel 163cm/ 45kg
        `,
        price: 1280,
        quantity: 3,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 151,
        name: '百搭中線毛呢西裝褲 XS-2XL',
        picture_url: 'https://i.imgur.com/RJYdr2o.jpg',
        info: `
        尼龍50% 滌綸47% 彈力棉3%
        Made in Korea.
      
        `,
        price: 10260,
        quantity: 1,
        delivery: '1',
        delivery_location: '桃園',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 151,
        name: '熱奶茶鬆軟兔毛毛帽',
        picture_url: 'https://i.imgur.com/Pxg2pIX.jpg',
        info: `
        軟呢格紋面料
        Made in Korea.
        售出不退`,
        price: 1680,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 151,
        name: '推薦款! HANDMADE 高級感雙排釦羊毛大衣',
        picture_url: 'https://i.imgur.com/spWbiMh.jpg',
        info: `
        微落肩的版型+精緻內襯

       有點厚度卻完全不重的100%高級手工羊毛

       隨性套上就有高級的氣場

       顏色是其他手工外套少見的特殊色

       三個色都不挑膚色又好駕馭

        推薦給160cm的女生、喜歡長版大衣的小個女孩❤️`,
        price: 5922,
        quantity: 1,
        delivery: '1',
        delivery_location: '基隆',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 151,
        name: 'cashmere溫暖羊絨手套 - 3colors',
        picture_url: 'https://i.imgur.com/npQcyZB.jpg',
        info: `
        Made in Korea.
        `,
        price: 1080,
        quantity: 1,
        delivery: '1',
        delivery_location: '新北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 151,
        name: '新色上架✨鬆軟親膚100%羊毛圍巾',
        picture_url: 'https://i.imgur.com/bHzcfJQ.jpg',
        info: `
        寬30.5 / 全長172
        Fabric 羊毛100%
        Made in Korea.`,
        price: 790,
        quantity: 1,
        delivery: '1',
        delivery_location: '彰化',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 151,
        name: '舒適刷毛休閒套裝SET - 2colors',
        picture_url: 'https://i.imgur.com/pzhcdL1.jpg',
        info: `
        棉65% 滌綸35%
        Made in Korea.
        `,
        price: 900,
        quantity: 1,
        delivery: '1',
        delivery_location: '台中',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 151,
        name: '舒適感側開衩刷毛連帽OPS',
        picture_url: 'https://i.imgur.com/CU0XoUi.jpg',
        info: `
        棉65%

        滌淪35%

        Made in Korea.`,
        price: 1680,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 161,
        name: '暖冬毛茸感小臉鐘型帽',
        picture_url: 'https://i.imgur.com/LTTTmsH.jpg',
        info: `
        手感超柔軟

        戴起來完全不刺癢也不挑頭型 (很重要!)

        非常修飾臉型
        Made in Korea.
        `,
        price: 1180,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 161,
        name: '本期必買! 親膚小浣熊針織外套',
        picture_url: 'https://i.imgur.com/tfLXvAf.jpg',
        info: `本期自留+Model推薦第一名!!
        比之前熱賣超過百件的小浣熊外套更加保暖親膚
        單穿也完全不刺♡
        四個顏色都超級好看
        微短版的長度
        即使沒有腰身也能看起來超修飾
        
        `,
        price: 1180,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 161,
        name: '新色上架✨鬆軟親膚100%羊毛圍巾',
        picture_url: 'https://i.imgur.com/zfITAJN.jpg',
        info: `
        寬30.5 / 全長172
        `,
        price: 1080,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 161,
        name: '精緻小細節圓領打褶上衣-3colors',
        picture_url: 'https://i.imgur.com/3q0OCF9.jpg',
        info: `
        這件請細節控們一定要收下！
        肩線的設計特別有巧思
        即使是肩膀寬的女生也能駕馭`,
        price: 990,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 171,
        name: '高領側開衩針織背心',
        picture_url: 'https://i.imgur.com/4BauykG.jpg',
        info: `
        含有80%溫暖羊毛
        手感溫柔厚實
        脖子處也不會勒
        搭配襯衫或簡單的打底上衣就很好看!`,
        price: 790,
        quantity: 1,
        delivery: '1',
        delivery_location: '雲林',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 171,
        name: '質感織紋毛料打摺裙 S-M',
        picture_url: 'https://i.imgur.com/L1LKTl6.jpg',
        info: `
        含有羊毛+內襯的秋冬打摺裙
        擔心百褶裙總是太顯臀圍
        非常推薦入手這件
        微A字的版型
        偷偷幫您把臀部修飾好了!
        `,
        price: 990,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 171,
        name: '微方頭日常低跟鞋22.5-25',
        picture_url: 'https://i.imgur.com/0HtPQI8.jpg',
        info: `
        這雙鞋是今年找到最喜歡的一雙
        很適合搭配各種米色調的衣服
        怕冷的女孩搭秋冬季節搭配褲襪或長襪就很溫暖囉!
        喜歡穿舒服一點的話可以拿大半號
        `,
        price: 1280,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 181,
        name: '復古質感半月金釦包',
        picture_url: 'https://i.imgur.com/oxSA2mm.jpg',
        info: `
        Made in China.
        人造皮革100%
        `,
        price: 1090,
        quantity: 1,
        delivery: '1',
        delivery_location: '南投',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 181,
        name: 'HANDMADE莫蘭迪手工羊毛大衣',
        picture_url: 'https://i.imgur.com/MruPOPc.jpg',
        info: `
        含有90%高級羊毛+精緻內襯
        手感極輕卻非常保暖
        長度有蓋過臀部
        搭配各種下身都好看!
        `,
        price: 840,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 181,
        name: '最後數量! saint舒適刷毛大學T',
        picture_url: 'https://i.imgur.com/zENRjU2.jpg',
        info: `
        售完不補`,
        price: 1580,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 191,
        name: 'Wool小法式羊毛中長裙 (附皮帶) ',
        picture_url: 'https://i.imgur.com/AvDDneu.jpg',
        info: `
        羊毛50% 壓克力纖維25% 滌綸25%`,
        price: 1180,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 31,
        UserId: 191,
        name: 'Teddy冬日溫暖翻領外套 - 2colors',
        picture_url: 'https://i.imgur.com/pBvIdAR.jpg',
        info: `
        肩54 胸55.5 袖長55 袖口寬17 下圍寬54 總長80`,
        price: 490,
        quantity: 1,
        delivery: '1',
        delivery_location: '台中',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 191,
        name: 'Celvoke 玩色晶漾唇蜜',
        picture_url: 'https://i.imgur.com/HbCqXyL.jpg',
        info: `
        濃郁發色與晶透質感 創造時尚潤澤唇妝 `,
        price: 950,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 151,
        name: 'ADDICTION 水透癮防曬乳',
        picture_url: 'https://i.imgur.com/JnO1e4x.jpg',
        info: `
        高效防護 抵擋紫外線 防止肌膚乾燥老化 ❤`,
        price: 130,
        quantity: 1,
        delivery: '1',
        delivery_location: '台南',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 151,
        name: 'NARS 雙色眼影',
        picture_url: 'https://i.imgur.com/hReovLq.jpg',
        info: `
        紅糖棕 x 栗褐色  `,
        price: 990,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 151,
        name: 'Laura mercier 蘿拉蜜思 霓彩眼影 ',
        picture_url: 'https://i.imgur.com/j6a7lNg.jpg',
        info: `
        經典乾燥玫瑰色 `,
        price: 760,
        quantity: 1,
        delivery: '1',
        delivery_location: '彰化',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 151,
        name: 'Lily lolo 唇膏 Natural lipstick',
        picture_url: 'https://i.imgur.com/uAC0DCs.jpg',
        info: `
        經典潤唇膏▫️Natural Lipstick`,
        price: 850,
        quantity: 1,
        delivery: '1',
        delivery_location: '彰化',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 161,
        name: 'Jo malone 香水30/100ml ',
        picture_url: 'https://i.imgur.com/7UekBMl.jpg',
        info: `
        韓國免稅帶回
        不用怕是假貨，可提供購買證明！
        英國梨與小蒼蘭香水/牡丹與胭紅麂絨/英國橡樹與榛果`,
        price: 3800,
        quantity: 1,
        delivery: '1',
        delivery_location: '桃園',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 161,
        name: 'Bobbi brown 芭比布朗冬蟲夏草粉底液',
        picture_url: 'https://i.imgur.com/QdBrlUs.jpg',
        info: `
        Bobbi brown芭比布朗冬蟲夏草系列
        能抑制油分生成之餘能帶給底妝100%飽水力👍🏻👍🏻
        `,
        price: 1720,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 161,
        name: '✈️BYREDO✈️香水',
        picture_url: 'https://i.imgur.com/d0zrf9q.jpg',
        info: `
        全部香味目前都有現貨 全新正品 原裝貨✈️
        懷舊書香
        無人之境
        返樸歸真
        `,
        price: 1380,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 171,
        name: '🕯️BYREDO 🕯️純柔絨棉黑色時尚蠟燭 cotton poplin',
        picture_url: 'https://i.imgur.com/6tmaA1C.jpg',
        info: `
        這款精緻維妙的香氣靈感來自於點綴了藍色洋甘菊的乾淨床單，非常適合於臥室及浴室使用。
        香調 :藍色洋甘菊、亞麻以及甜麝香
        `,
        price: 1100,
        quantity: 1,
        delivery: '1',
        delivery_location: '新北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 171,
        name: 'Le Labo 香水',
        picture_url: 'https://i.imgur.com/Io0wOpN.jpg',
        info: `
        Lelabo的香水追求的是像是意外創造的美好。
        `,
        price: 680,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 171,
        name: 'diptyque',
        picture_url: 'https://i.imgur.com/NIkCg0A.jpg',
        info: `
        無花果----PHILOSYKOS
        分類：EDT淡香水
        屬性：中性香水
        前 味：無花果葉 無花果
        中 味：椰子 綠葉
        後 味：雪松 木質香 無花果
        `,
        price: 790,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 181,
        name: 'Chloe 經典淡香精',
        picture_url: 'https://i.imgur.com/4yS0chb.jpg',
        info: `
        香調 :柔美花香調
        前味： 小蒼蘭、 粉色牡丹、 荔枝
        中味： 木蘭花、 玫瑰花、 鈴蘭
        後味： 香柏木、 甜蜜、 琥珀
        `,
        price: 800,
        quantity: 1,
        delivery: '1',
        delivery_location: '基隆',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 181,
        name: 'Mac 口紅',
        picture_url: 'https://i.imgur.com/KZt94Yn.jpg',
        info: `
        亞洲最暢銷的色號，一直是斷貨王，啞光的質地，雖拔乾但
        顯色度高，楓葉磚紅色，薄塗厚塗都很好看，不挑皮膚，黃皮膚也可以很好的駕馭~
        `,
        price: 380,
        quantity: 1,
        delivery: '1',
        delivery_location: '苗栗',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 181,
        name: 'ysl 口紅 ',
        picture_url: 'https://i.imgur.com/5RgPMdP.jpg',
        info: `
        nude underwater 這個顏色是屬於一個肉桂奶茶色的哦，但是官方簡介上說這是一個泰奶色，哎呀 不管啦，好看就行了，這一款真的非常好看了，非常的溫柔的一個顏色，但是這一只顏色比較淺，屬於千人千色哦，唇色深的水水不建議使用
        `,
        price: 500,
        quantity: 1,
        delivery: '1',
        delivery_location: '雲林',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 191,
        name: 'NYX 眼影盤 Ultimate16色',
        picture_url: 'https://i.imgur.com/XzLtWrC.jpg',
        info: `
        顏色分類: 16色03號大地色
        保質期: 3年（開封1年）
        適合膚質: 任何膚質
        `,
        price: 550,
        quantity: 1,
        delivery: '1',
        delivery_location: '新北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 191,
        name: 'Etude House 九宮格眼影盤 ',
        picture_url: 'https://i.imgur.com/cKC6apd.jpg',
        info: `
        超顯色眼影盤，網友激推超燒！
        打造出有如身處在秋天的芒草海中一樣邊散步邊看這漸漸落下的太陽
        `,
        price: 520,
        quantity: 1,
        delivery: '1',
        delivery_location: '台中',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 191,
        name: 'aesop 香水',
        picture_url: 'https://i.imgur.com/4StB2mn.jpg',
        info: `
        悟香水 熾香水 馬拉喀香水
        `,
        price: 3389,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 151,
        name: 'AESOP 香芹籽抗氧化精華',
        picture_url: 'https://i.imgur.com/oafBffI.jpg',
        info: `
        滋潤、清爽不黏膩
        `,
        price: 700,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 151,
        name: 'AESOP 賦活芳香護手霜 75ml/500ml',
        picture_url: 'https://i.imgur.com/EDza6xO.jpg',
        info: `
        成分：中國柑皮、迷迭香葉、大西洋雪松
        樹木清香、土壤氣息、煙燻風味
        `,
        price: 700,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 41,
        UserId: 151,
        name: 'PS4 惡靈古堡5',
        picture_url: 'https://i.imgur.com/UAkr3G7.jpg',
        info: `
        Aesop家的超級明星商品 肌膚調理凝露
        
        `,
        price: 2680,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 151,
        name: '谷關 伊豆溫泉 泡湯票卷 泡湯卷',
        picture_url: 'https://i.imgur.com/lNQ2lem.jpg',
        info: `
        公共露天風呂
        別於一般的室內湯池，露天的設計，讓您在享受溫泉滋潤肌膚的片刻，便呼吸到大自然的芬多精。
        冷熱雙池、SPA沖擊，更是促進新陳代謝、幫助體內循環，達到養生的目的。
        `,
        price: 1000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 161,
        name: '【日本東京台場・大江戶溫泉物語】實體票卷',
        picture_url: 'https://i.imgur.com/jZsXfc7.jpg',
        info: `
        台場大江戶溫泉物語是是東京首屈一指的「溫泉主題樂園」
        園內擁有從地下深1,400公尺處汲取的天然溫泉風呂，有可以仰望星空的露天風呂，可以在占地2,300平方公尺的日本庭園泡足湯溫泉，館內再現東京舊稱的江戶古街面貌，在這裡既可親身體驗昔時古風情景
        `,
        price: 1250,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 161,
        name: '【大阪周遊卡1日券／2日券】實體票卷',
        picture_url: 'https://i.imgur.com/WPlZZ34.jpg',
        info: `
        大阪匯集了從繁華鬧市、大阪城到環球影城等變化豐富的庶民文化，加上依山傍海的地理優勢，自古就是日本的魚米之鄉，發展出豐富多元的飲食文化，也因而被稱為「日本廚房」。來到大阪，會看到有別於東京的日本庶民風格。大阪周遊卡是大阪自由行的必買票券，除了可以無限搭乘市內公車和9條地鐵線外，還可免費進入超過30項的觀光設施！有了大阪周遊卡，無論是想進入從豐臣秀吉時代，那屹立不搖的大阪城天守閣，或是在大阪今昔生活館中，感受江戶時代的市街風光，皆能輕鬆造訪。若是玩累了，就前往浪速之湯泡一泡天然的溫泉吧！
        `,
        price: 2330,
        quantity: 5,
        delivery: '1',
        delivery_location: '基隆',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 161,
        name: '【JR・關西廣域周遊券・5日券】實體票卷',
        picture_url: 'https://i.imgur.com/mbB8PDt.jpg',
        info: `
        適用於關西機場前往大阪、京都、神戶、奈良、姬路及岡山．倉敷、和歌山、白濱、城崎溫泉、滋賀 ．敦賀、天橋立地區，依購買天數自由乘坐JR西日本的新快速列車、快速列車、普通列車之自由席
        `,
        price: 2210,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 171,
        name: '【JR・關西鐵路周遊券・1~3日券】實體票卷',
        picture_url: 'https://i.imgur.com/YVJGPap.jpg',
        info: `
        可搭乘關空特急列車はるかHARUKA號(關西機場-大阪、京都間)的普通車自由席。
        適用區域內西日本JR巴士。
        `,
        price: 1100,
        quantity: 1,
        delivery: '1',
        delivery_location: '台南',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 171,
        name: '【大阪地鐵＆巴士乘車券・1日卷】實體票卷',
        picture_url: 'https://i.imgur.com/DwnIGcr.jpg',
        info: `
        大阪市營1日乘車券 OSAKA 1day pass
        使用車票搭乘大阪市營地鐵、新電車New Tram、巴士1日暢遊大阪      
        `,
        price: 1500,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 171,
        name: '<大阪票卷>日本環球影城',
        picture_url: 'https://i.imgur.com/dOjylz6.jpg',
        info: `
        日本環球影城，擁有多項頂尖獨特的遊樂設施與景點，融匯電影主題的嶄新項目及表演，包括：變形金剛3D對決 之終極戰鬥、史瑞克4-D 影院、馬達加斯加、侏羅紀河流探險、哈利波特...等！大朋友、小朋友都愛的新加坡景點之一。趕快來身歷其境，體驗遊玩，共享歡樂時刻吧！
        `,
        price: 3895,
        quantity: 10,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 181,
        name: '朝日溫泉全票卷',
        picture_url: 'https://i.imgur.com/5tG8HZT.jpg',
        info: `
        嘉義台南可面交
        `,
        price: 200,
        quantity: 4,
        delivery: '1',
        delivery_location: '台南',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 181,
        name: '花蓮］維納司 遊艇 賞鯨票卷 ',
        picture_url: 'https://i.imgur.com/HAMP8IX.jpg',
        info: `
        2成人套票組
        `,
        price: 1000,
        quantity: 5,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 181,
        name: '美國加州迪士尼平季兒童票 單日券 電子票卷',
        picture_url: 'https://i.imgur.com/ogYMIx2.jpg',
        info: `
        出示手機憑證即可入園 
        `,
        price: 3200,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 191,
        name: '日本票卷 京都 貴船 鞍馬 一日卷 現貨 兩張雙人套票',
        picture_url: 'https://i.imgur.com/VS9wmsP.jpg',
        info: `
        內含市區巴士一日通用
        `,
        price: 60,
        quantity: 5,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 191,
        name: '世田谷散策一日券',
        picture_url: 'https://i.imgur.com/XLVQ5AP.jpg',
        info: `
        隨性地走進當地小店或來場咖啡巡禮，這個套票很值得入手一次！
        `,
        price: 1200,
        quantity: 5,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 191,
        name: '太宰府柳川觀光套票',
        picture_url: 'https://i.imgur.com/6moBCMi.jpg',
        info: `
        裡面包含可以在各景點指定的設施與店家使用的優惠券、使用說明及地圖。車票有效期限為使用開始日的兩天內

        `,
        price: 400,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 151,
        name: '關西&北陸地區鐵路周遊券',
        picture_url: 'https://i.imgur.com/jTGDoHt.jpg',
        info: `
        在指定的七天內可以不限次數搭乘新幹線（自由座）的優惠票券。不只關西地區，也來趟划算的岡山、城崎溫泉、天橋立、鳥取、貴志、白濱、紀伊勝浦、北陸地區（富山、石川、福井）之旅吧！
        `,
        price: 3260,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 151,
        name: '岡山&廣島&山口地區鐵路周遊券',
        picture_url: 'https://i.imgur.com/UujK7b8.jpg',
        info: `
        這張專為外籍旅客推出的優惠票券，不但在指定地區內可以無限次乘坐當地鐵路電車與新幹線，還可以搭乘可愛的Hello Kitty新幹線。此外，包含廣島的宮島渡輪，以及車站附近的JR西日本自行車租借服務「Ekirin Kun」，也都能夠使用本票券，用途相當廣泛
        `,
        price: 2350,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 151,
        name: '九州自由行最強票券「西鐵SUNQ PASS」 ',
        picture_url: 'https://i.imgur.com/GfhOqON.jpg',
        info: `
        能夠在指定期間內無限次數搭乘部分渡輪。可利用的巴士多達約2,400條，再加上渡輪航線，說是用一張周遊券就能玩盡九州也不為過，是張相當便捷的周遊券。
        `,
        price: 2400,
        quantity: 1,
        delivery: '1',
        delivery_location: '桃園',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 161,
        name: '交通票券「Tokyo Subway Ticket」 ',
        picture_url: 'https://i.imgur.com/600gLx1.jpg',
        info: `
        在限定時間內可以任意搭乘「東京Metro地鐵」以及「都營地鐵」全線的交通票券，以東京23區為中心，在約280個車站皆可以自由上下電車。使用24小時通票在24小時內乘車5次以上、48小時通票在24小時內乘車4次以上、72小時通票在24小時內乘車3次以上，就一定會比較划算。
        `,
        price: 1120,
        quantity: 1,
        delivery: '1',
        delivery_location: '桃園',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 161,
        name: '超值一日券「百合海鷗號一日票」 ',
        picture_url: 'https://i.imgur.com/P6wHRkq.jpg',
        info: `
        是採用自動導引捷運系統（AGT）的列車，前往休閒運動設施密布的台場時相當方便。台場的人氣景點眾多，像是「台場海濱公園」、溫泉設施「大江戶溫泉物語」等等，而「百合海鷗號」沿線更是坐擁許多其他觀光景點，搭上列車就能開心暢玩一整天
        `,
        price: 1020,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 161,
        name: '超值車票「Tokyo Subway Ticket」',
        picture_url: 'https://i.imgur.com/mipQs5v.jpg',
        info: `
        在24小時、48小時、72小時的有效期限內，均能自由搭乘東京的地鐵，而且憑車票還能在超過350處設施享受折扣等優惠
        `,
        price: 500,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 171,
        name: '昇龍道巴士周遊券（廣域路線）」',
        picture_url: 'https://i.imgur.com/1H8KHhU.png',
        info: `
        使用「昇龍道巴士周遊券（廣域路線）」套票，完成縱斷北陸中部的5日遊。從名古屋到松本、奧飛驒溫泉鄉、飛驒高山、白川鄉、五箇山、高岡、富山、輪島、金澤，所到之處皆可享受豐富的旅程
        `,
        price: 3000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 171,
        name: '「Izuko通票」',
        picture_url: 'https://i.imgur.com/FMVhOsn.jpg',
        info: `
        通票走訪兩部日劇的拍攝地——「三島市」和「修善寺溫泉」，分別是日劇《對不起青春！》（ごめんね青春!）與《月薪嬌妻》（又名：逃避雖可恥但有用）（逃げるは恥だが役に立つ）的拍攝地，這兩個地區都是頗負盛名的觀光地，即使是沒看過日劇的人，相信去了就會立刻愛上這趟被潺潺流水環繞的療癒之旅！
        `,
        price: 220,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 51,
        UserId: 171,
        name: '「奈良‧斑鳩一日券」',
        picture_url: 'https://i.imgur.com/bKjydKL.jpg',
        info: `
        優點為造訪奈良地區的神社寺院及設施時，能在28間神社寺院及設施裡享有各式各樣的折扣與額外優惠，相當划算。例如：「春日大社」、「奈良國立博物館」等設施所在的「奈良公園周邊地區」，「唐招提寺」、「藥師寺」所坐落的「平城宮跡、西京周邊地區」，還有以「中宮寺」而聞名的「斑鳩周邊地區」等地皆可使用
        `,
        price: 400,
        quantity: 2,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ProductCategoryId: 61,
        UserId: 101,
        name: '少年Pi的奇幻旅程',
        picture_url: 'https://i.imgur.com/pHI7Cwb.jpg',
        info:
          '近全新，雙北可面交，《少年Pi的奇幻漂流》是近年來在國際文壇備受讚譽的經典傑作！作者楊．馬泰爾將文學的想像力推展到了極致，如真似幻的海上歷險與天真、殘酷並存的人性矛盾，在書中不但巧妙契合，更激盪出高潮不斷的閱讀驚喜。全新推出的『繪圖版』由歐洲插畫名家特別精心繪製了四十張全彩插圖，呈現出最精緻的文學質感，值得所有讀者傳家珍藏！',
        price: 150,
        quantity: 1,
        delivery: '1',
        delivery_location: '新北市',
        delivery_time: 7,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 11,
        name: '8天重新認識JavaScript',
        picture_url: 'https://i.imgur.com/bgSxxVcl.jpg',
        info:
          '缺封皮，但不影響閱讀。本書內容是由作者在2018 iT邦幫忙鐵人賽 -「重新認識JavaScript」的系列文章改寫而成，主要針對剛接觸JavaScript或者對JavaScript不是那麼熟悉的讀者，說明JavaScript的基礎與常見的誤區。',
        price: 180,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 21,
        name: '重構：改善既有程式的設計',
        picture_url: 'https://i.imgur.com/CgXnZTm.jpg',
        info:
          '這本書只看一次左右。書籍簡介：二十多年來，世界各地經驗豐富的程式員都使用Martin Fowler的《重構》來改善既有程式的設計、提升軟體的易維護性，以及讓既有的程式更容易被人瞭解。為了反映程式設計領域的重大變化，作者全面翻新書籍內容，推出這本備受期待的新版本。《重構 第二版》提供了新的重構名錄，加入JavaScript範例程式以及新的實用範例來展示各種重構。這個版本與第一版一樣，將解釋什麼是重構、為何重構、如何認出需要重構的程式，以及如何成功地重構，無論你是使用哪一種語言。',
        price: 300,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 31,
        name: '在黑洞中我看見自己的眼睛',
        picture_url: 'https://i.imgur.com/pcrAbfU.jpg',
        info:
          '近全新，附作者簽名。書本介紹：青年詩人徐珮芬從日常的語言中凝聚出簡單的詩句，調皮的意象跳躍在文字之間，天馬行空的想像帶來意想不到的閱讀驚喜。書中收錄新銳插畫家吳睿哲為每一首詩創作的插畫，襯托詩人細膩的內心世界。',
        price: 800,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 41,
        name: '滌這個不正常的人',
        picture_url: 'https://i.imgur.com/h11OVw4.jpg',
        info:
          '超級好看，大推，簡介：這是一篇描繪家庭情感的長散文，一份記錄困難關係的報導，一部近身拍攝的紙上紀錄片。作者書寫時，沒有預設，無從計畫，她不知道會如何發展，更不知道終點在哪裡，只能「且走且看」的記錄下這一切，並盡可能誠實。或許正因為如此，才更顯真實。不雕鏤文字，卻總是精準切中；不渲染情感，反因為節制而動人；沒有高潮起伏，仍引領讀者一路讀下去。那些層疊細碎的家庭日常，讓我們無比熟悉；每個家人的現實處境，與我們這般接近。',
        price: 250,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 51,
        name: '從 Hooks 開始，讓你的網頁 React 起來',
        picture_url: 'https://i.imgur.com/Q2RQJPe.jpg',
        info: 'Hook 入門很棒的一本書，推薦給大家。',
        price: 300,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 61,
        name: '行銷管理(15版)',
        picture_url: 'https://i.imgur.com/svYilJe.jpg',
        info:
          '台大管理學指定課本，近全新，書籍簡介：如何在快速變動的科技發展時代掌握行銷的趨勢脈動，是頂尖行銷人員不可或缺的技能。當代行銷學之父、美國西北大學凱洛管理學院名譽教授Philip Kotler所著之《行銷管理》一書自1967年第一次出版以來，即成為國際各頂尖商管學院最常使用的教材，更被英國《金融時報》評選為史上最偉大的商管書籍之一，是有志成為優秀行銷人士必讀的經典。',
        price: 400,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 71,
        name: '賈樟柯電影手記',
        picture_url: 'https://i.imgur.com/hJFRucx.jpg',
        info: '賈樟柯的電影筆記，內容不錯，近全新。',
        price: 100,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 81,
        name: '複眼人',
        picture_url: 'https://i.imgur.com/JlHdkHG.jpg',
        info:
          '珍藏多年的書半價售出，讀過幾本吳明益的小說，在他臉書結束貼文前也長期追蹤。總是喜愛閱讀吳明益，而在所有作品裡，最喜歡的就屬《複眼人》了。',
        price: 180,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 91,
        name: '家離水邊那麼近',
        picture_url: 'https://i.imgur.com/eaa0rGu.jpg',
        info:
          '書不在家中，在台南老家，如果有下單請等候我週末回台南才可以寄出。本書是自然寫作者吳明益繼2003年出版的《蝶道》之後的動人作品。喜歡自然寫作的人對《蝶道》應該不陌生，這是一本十分動人的生態散文，出版後即獲得讀者和書評家們的一致擁戴和好評，不但叫座也叫好。獲得該年度中時的十大好書獎同時也獲選為金石堂該年度最具影響力的好書之一。沈寂四年後再推出的《家離水邊這麼近》更是叫人驚艷。本書是吳明益這四年間，流連在溪邊、湖邊、和海邊的生活、行走、坐臥觀察、反思和記錄的動人創作。',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 10,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 101,
        name: '再見楊德昌',
        picture_url: 'https://i.imgur.com/4Mvcru9.jpg',
        info:
          '楊德昌影迷必買，僅此一本。本書深度專訪十六位曾與楊德昌共事的電影人——小野、吳念真、柯一正、余為彥、舒國治、杜篤之、廖慶松、陳博文、張惠恭、鴻鴻、陳以文、王維明、陳駿霖、金燕玲、張震、柯宇綸。他們涵蓋了制片、導演、編劇、錄音師、剪輯師、攝影師、演員等多重身份。他們或是以友人的立場發聲，或是從師徒的關系出發，抑或循着個人的專業提出見解，情理交織，全面回顧了楊德昌的創作生涯，多側面、立體式地還原了這位電影哲人及其作品。藉由這些所網羅的珍貴的第一手史料，藉由這些走過台灣新電影的資深電影人對那段相濡以沫的美好時光的追憶、緬懷與思索，揭開了台灣電影史上異常動人的一頁，為熱愛台灣電影的人們留下了珍貴的時代記錄，也為讀者親近楊德昌電影作品獨辟了一條非凡的蹊徑。',
        price: 400,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 111,
        name: '愛何必百分百',
        picture_url: 'https://i.imgur.com/3ZovLlV.jpg',
        info:
          '我們何必用許多假設，甚至設計各種方法，去驗證自己的愛人？我們可以心裡知道，愛情有深淺、性格有剛柔、每個人看待事情的態度也不同，所以到了緊要關頭，身邊人可能棄我們而去。但是今天、現在－－他閃亮、他堅強、他溫柔，如同百分之百的真鑽，就當他是真鑽吧！就在太平歲月，快快樂樂，相依相偎過一生吧！',
        price: 90,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 121,
        name: '鯨背月色',
        picture_url: 'https://i.imgur.com/Vkpgci6.jpg',
        info:
          '吳明益老師推薦，他的啟蒙讀物。書籍介紹：跟隨美國著名博物學家一起觀察、發現、認知迷人的自然世界與動物。在幽深的山洞里觀察2000萬只倒掛着的蝙蝠、在北美古城聖奧古斯丁鱷魚農場捕捉鱷魚、在大海里聽鯨魚唱歌、乘船去南極了解很通人性的動物——企鵝。戴安娜·阿克曼對生命的激情與活力令我們動容。她遭到過鱷魚的攻擊，游進過鯨魚嘴里，攀登過峭壁，也嘗過極地寒風凜冽的滋味，卻仍然認為所有的生命都是那麼的迷人，這些經歷讓她收獲了特別的東西，關乎自然，也關乎人類處境。',
        price: 190,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 131,
        name: '人生的四大秘密',
        picture_url: 'https://i.imgur.com/c4i2PfR.png',
        info:
          '我也不知道是什麼書，家裡書櫃發現的。書本簡介：本書收藏了四十個不可思議的奇遇故事。故事的主人公是一位神祕的中國老人，他將帶給你四十個幸運心法。啟發你運用與生俱有的內在力量，活出幸福的人生！翻開這本書，你的人生就有了逆轉勝的可能。',
        price: 60,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 141,
        name: '想我眷村的兄弟們',
        picture_url: 'https://i.imgur.com/XOO88gQ.jpg',
        info:
          '媽媽的書，她不看了所以賣掉。書本介紹；《想我眷村的兄弟們》為在城市裡散落、在記憶中淡去的族群留下一個無須質疑立場的口述歷史記錄。當信仰逐漸化約成教條，當所謂的選擇只能經過唯一的真理標準檢驗，當文學幾乎被所有人忽略它最重要的價值，我們不能忘記朱天心曾以這樣的筆和勇氣書寫過台灣。',
        price: 140,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 7,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 151,
        name: '如何讓馬飛起來：物聯網之父創新與思考的9種態度',
        picture_url: 'https://i.imgur.com/M9WPos3.jpg',
        info:
          '老師送的書，全新沒看過，缺錢買遊戲。書本介紹：「想激發創意潛能，讀這本書就夠了！」讀了這本書，每個人都會變得更聰明，還會讓馬飛起來',
        price: 60,
        quantity: 1,
        delivery: '1',
        delivery_location: '基隆',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 161,
        name: '淡江記',
        picture_url: 'https://i.imgur.com/e2nZ5jC.jpg',
        info:
          '朱天文五年前送我的書，附作者簽名以及我和她的合影。本書為朱天文散文集，多為記述淡江大學的同輩交往情誼、創辦三三書坊的過程，以及「沒有名目的大志」。',
        price: 600,
        quantity: 1,
        delivery: '1',
        delivery_location: '苗栗',
        delivery_time: 10,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 171,
        name: '圖解第一次買股票就上手',
        picture_url: 'https://i.imgur.com/eQQvK0Y.jpg',
        info:
          '感謝這本書讓我賺到五套房。介紹：本書以淺顯易懂的語言，從股票市場的基本概念談起，循序漸進地介紹選股的步驟、判斷行情時機的方法、買賣時必須注意的細節、計算獲利的方式，並提供靈活可用的投資策略。九大篇章囊括了新手投資人最需要的實戰技巧，回應入門者真正會面臨的疑難雜症，對症下藥！',
        price: 120,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 181,
        name: '感官之旅',
        picture_url: 'https://i.imgur.com/1S8K0YP.jpg',
        info:
          '本書探索了：五官知覺的起源與發展，它們在各文化間的差異，它們的範疇、聲譽，傳說及科學根據，我們談論世界時所用的感官片語，以及一些特別議',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '紐約',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 61,
        UserId: 191,
        name: '讓 TypeScript 成為你全端開發的 ACE',
        picture_url: 'https://i.imgur.com/MtbdZWz.jpg',
        info:
          '四大重點 ➣ 漸進式型別系統：原始、物件、泛用與常用進階型別等。 本書一大重點在於型別系統的重要性以及使用方式；除此之外，可以從型別系統來認識一門語言的特性、運作過程、效果與細節，對於程式語言本身的設計會有更深層的理解。 ➣ TypeScript 高效技巧：除錯、規格查詢、結合 JavaScript 專案的方法。好的 TypeScript 程式碼除了可以提升開發效率外，除錯（Debug）的痛苦程度會大大的降低；並且也會介紹原生 JavaScript 專案是如何不需全部重寫成 TypeScript 就可以結合 TypeScript 專案的秘密。 ➣ 標準物件導向程式設計入門：類別、介面、 SOLID 原則。TypeScript 對於物件導向程式設計方面的語法支援完備度較現階段的 JavaScript 以及 ECMAScript 標準高，因此讀者可以藉由 TypeScript 學習到物件導向程式設計的觀念。 ➣ TypeScript & ECMAScript：語法糖的使用、非同步程式設計。本書不僅會討論到 JavaScript、ECMAScript 以及 TypeScript 之間的關係，並且也會介紹在 TypeScript 使用 ECMAScript 標準語法時需要注意的事項。',
        price: 100,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 101,
        name: '喵星人飼料零食 不分售',
        picture_url: 'https://i.imgur.com/H7w2Rqi.jpg',
        info:
          '囍碗全齢貓飼料×1、和風黑酵母機能零食×1、荒野饗宴飼料×2、蒸鮮蟳味棒×1、蒸鮮烏魚條×1、雞鮮生肉泥×1、日清懷石貓湯罐×1、筷子肉乾×2、旺卡貓用營養補給肉泥×1',
        price: 900,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 11,
        name: '無穀成犬飼料2磅',
        picture_url: 'https://i.imgur.com/u3LeoCa.jpg',
        info: '最接近鮮食的乾糧',
        price: 100,
        quantity: 1,
        delivery: '1',
        delivery_location: '',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 21,
        name: '天然小型成犬飼料800g',
        picture_url: 'https://i.imgur.com/X0v0cK0.jpg',
        info: '我家狗狗最愛，買太多了分享給大家',
        price: 200,
        quantity: 2,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 31,
        name: '貓造型深層睡眠貓睡墊',
        picture_url: 'https://i.imgur.com/ua1fCsA.jpg',
        info: '冬天必備，快給家裡的毛小孩一個溫暖的小窩 :3',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '台南',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 41,
        name: '保暖熊熊裝',
        picture_url: 'https://i.imgur.com/WQasXel.jpg',
        info: '超級可愛的熊熊裝，多買了一件，分享給有需要的人',
        price: 100,
        quantity: 1,
        delivery: '1',
        delivery_location: '桃園',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 51,
        name: '鈴鐺貓抓板',
        picture_url: 'https://i.imgur.com/iegijqk.jpg',
        info: '二手貓抓板，低價讓售給有需要的人，東西在台北需要自取',
        price: 10,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 61,
        name: '飲水餵食機不分售',
        picture_url: 'https://i.imgur.com/kjXunRr.jpg',
        info: '好用又便宜的飲水機和餵食機，家中不需要了所以出售',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 71,
        name: '貓貓胸背',
        picture_url: 'https://i.imgur.com/ghp75sZ.jpg',
        info:
          '最適合喵星人的全包覆超美貓胸背，加長型的包覆設計，防止貓貓逃脫更安心',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 81,
        name: '灰色秋田寵物睡墊',
        picture_url: 'https://i.imgur.com/QqCknY4.jpg',
        info: '材質超舒服，狗狗一睡就愛上',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '花蓮',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 91,
        name: '房屋造型睡窩',
        picture_url: 'https://i.imgur.com/89VQa4m.jpg',
        info: '家中狗狗長太大用不到了，便宜出售',
        price: 150,
        quantity: 1,
        delivery: '1',
        delivery_location: '淡水',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 101,
        name: '羊毛狗狗睡墊',
        picture_url: 'https://i.imgur.com/kgDcqzE.jpg',
        info: 'IKEA購入，不含上面的狗狗哦',
        price: 300,
        quantity: 1,
        delivery: '1',
        delivery_location: '中壢',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 111,
        name: '寵物鴨鴨玩具',
        picture_url: 'https://i.imgur.com/EeuqCC9.jpg',
        info: '狗狗的好夥伴，超卡哇伊的寵物鴨鴨玩具',
        price: 50,
        quantity: 4,
        delivery: '1',
        delivery_location: '苗栗',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 121,
        name: '狗狗磨牙骨頭',
        picture_url: 'https://i.imgur.com/5R3sFlt.jpg',
        info: '全新的都沒有用過，只要10元快來帶走吧',
        price: 10,
        quantity: 1,
        delivery: '1',
        delivery_location: '新莊',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 131,
        name: '貓狗都能吃的棒棒糖',
        picture_url: 'https://i.imgur.com/hIwp80b.jpg',
        info: '雙層雞肉棒棒糖*10',
        price: 20,
        quantity: 10,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 7,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 141,
        name: '二手貓籠',
        picture_url: 'https://i.imgur.com/HBL61Ys.jpg',
        info: '家中閒置的貓籠，希望有緣人可以帶走',
        price: 100,
        quantity: 1,
        delivery: '1',
        delivery_location: '台南',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 151,
        name: '保暖寵物睡袋',
        picture_url: 'https://i.imgur.com/DAMz2Fx.jpg',
        info:
          '超可愛日系保暖寵物睡袋❤️❤️，大家都知道毛小孩不管是貓咪還是狗狗都喜歡窩在洞洞裡面，我們家的美短也一樣，看到棉被有洞硬要鑽，這次就來個毛小孩福利，這真的超可愛萌死人的設計',
        price: 280,
        quantity: 3,
        delivery: '1',
        delivery_location: '台中',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 161,
        name: '純雞肉鱈魚片寵物零食',
        picture_url: 'https://i.imgur.com/lwszMJG.jpg',
        info: '無鹽分、無香精、無誘食劑，狗狗最愛吃的哦。',
        price: 60,
        quantity: 5,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 171,
        name: '犬貓免沖洗潔淨慕斯',
        picture_url: 'https://i.imgur.com/rAkcXTC.jpg',
        info:
          '適合什麼時機：外出散步，清腳掌、上完廁所，清屁股、飽餐一頓，擦嘴巴、懶人清潔，擦身體、暫時不便洗澡又需要清潔的毛孩',
        price: 120,
        quantity: 3,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 181,
        name: '手工客製碗架',
        picture_url: 'https://i.imgur.com/qfphPoT.jpg',
        info: '手工製作多少有手工痕跡，高標者勿下單',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 71,
        UserId: 191,
        name: '二手水族箱',
        picture_url: 'https://i.imgur.com/NxOVTGo.jpg',
        info: '玻璃水族箱耐刮 透光性佳',
        price: 1000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 101,
        name: '防燙夾',
        picture_url: 'https://i.imgur.com/8IFQZIp.jpg',
        info: '不鏽鋼 耐熱 料理必備',
        price: 20,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 11,
        name: '多功能電煮鍋',
        picture_url: 'https://i.imgur.com/5p8GlNU.jpg',
        info: '只用過一次，煎炒不沾，雙層保溫防燙',
        price: 300,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 21,
        name: '防水工作圍裙',
        picture_url: 'https://i.imgur.com/6djsAHi.jpg',
        info:
          '五成新 半身圍裙 口袋 素色 防水防油圍裙 適用於美髮 美容 料理 烹飪 廚房',
        price: 100,
        quantity: 1,
        delivery: '3',
        delivery_location: '高雄',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 31,
        name: '計時器',
        picture_url: 'https://i.imgur.com/C0yDqgF.jpg',
        info: '可吊掛 可磁鐵吸附 烹飪考試運動提醒',
        price: 30,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 41,
        name: '全新茶壺',
        picture_url: 'https://i.imgur.com/490oJOd.jpg',
        info: '親友去日本玩贈送，沒有用過，附原包裝盒，送禮自用都適合~',
        price: 1200,
        quantity: 3,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 51,
        name: '琺瑯陶瓷鍋',
        picture_url: 'https://i.imgur.com/lcrGpF5.jpg',
        info:
          '去年在 SOGO 百貨以 2000 元購物，幾乎都沒有使用，所以讓給有需要的人~',
        price: 2399,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 4,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 61,
        name: '碗盤一堆全部出清不分售',
        picture_url: 'https://i.imgur.com/nFOCwfH.jpg',
        info: '要出國了，用不到的碗盤全部出清，桃園可自取',
        price: 500,
        quantity: 1,
        delivery: '1',
        delivery_location: '桃園',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 71,
        name: '胡椒研磨罐',
        picture_url: 'https://i.imgur.com/D8grvCM.jpg',
        info: '土耳其旅遊購買的紀念品，家中紀念品太多所以出售',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '台中',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 81,
        name: 'YETI 咖啡杯',
        picture_url: 'https://i.imgur.com/GBcu5Vp.jpg',
        info: '國外知名品牌限量咖啡杯，值得收藏',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 0,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 91,
        name: '專業咖啡機',
        picture_url: 'https://i.imgur.com/IsGyEF6.jpg',
        info: '店面用專業咖啡機轉讓，台北可以自取',
        price: 19000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 101,
        name: 'SHARP烤箱10L',
        picture_url: 'https://i.imgur.com/CcLx1Mk.jpg',
        info: '功能正常，好用又實惠',
        price: 300,
        quantity: 1,
        delivery: '1',
        delivery_location: '澎湖',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 111,
        name: '10人份大同電鍋',
        picture_url: 'https://i.imgur.com/mH7WFJ6.jpg',
        info: '家中換新電鍋所以便宜售出給有需要的人',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 121,
        name: '家用小型咖啡機',
        picture_url: 'https://i.imgur.com/SojOC2A.jpg',
        info: '適合三人使用，外觀乾淨無污漬',
        price: 200,
        quantity: 1,
        delivery: '1',
        delivery_location: '南港',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 131,
        name: '德國品牌菜刀',
        picture_url: 'https://i.imgur.com/ZoNY6hx.jpg',
        info: '尚未開鋒，附保證書',
        price: 1400,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 141,
        name: '白陶瓷盤',
        picture_url: 'https://i.imgur.com/rRCVgo6.jpg',
        info: '全新的陶瓷盤，份量足質感好',
        price: 100,
        quantity: 6,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 0,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 151,
        name: '多功能廚房櫃',
        picture_url: 'https://i.imgur.com/WnHcavp.jpg',
        info: '租屋處廚房櫃出清，限台南中西區自取',
        price: 900,
        quantity: 1,
        delivery: '1',
        delivery_location: '台南',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 161,
        name: '廚房剪刀',
        picture_url: 'https://i.imgur.com/Bgte3t5.jpg',
        info: '二手廚房剪刀便宜出清',
        price: 40,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 171,
        name: '可愛茶杯茶盤組',
        picture_url: 'https://i.imgur.com/mj5WYIe.jpg',
        info: '超可愛的茶杯茶盤，用不到惹出清給有需要的人',
        price: 40,
        quantity: 1,
        delivery: '1',
        delivery_location: '台中',
        delivery_time: 5,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 181,
        name: '烤麵包機',
        picture_url: 'https://i.imgur.com/F8oWQ5L.jpg',
        info: '近全新，只有用過兩次，台中自取佳',
        price: 250,
        quantity: 1,
        delivery: '1',
        delivery_location: '台中',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 81,
        UserId: 191,
        name: '廚房用不銹鋼水龍頭',
        picture_url: 'https://i.imgur.com/BoH5ZdJ.jpg',
        info: '家裡換了生飲機，原來的不銹鋼水龍頭用不到了，所以出售',
        price: 100,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 0,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        ProductCategoryId: 91,
        UserId: 11,
        name: 'Adidas 長襪',
        picture_url:
          'https://i.pinimg.com/564x/29/86/8b/29868be39c8cdd1794d75c6c19eacc9e.jpg',
        info: `
        男女長度不同
        可以接受者再下單！！！
        長度可以參考圖中實拍
        但是每個人穿起來長度不一定都一樣，因為此尺寸不合所以才拿出來拍賣`,
        price: 110,
        quantity: 6,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 31,
        name: 'Adidas 老帽',
        picture_url:
          'https://i.pinimg.com/564x/d7/ca/e2/d7cae25b63b0523cb5d8d680a6c38618.jpg',
        info: `
        皆為正品 原價880
        老帽8成新
        腰包7成新（底邊邊角有正常使用痕跡）
        可私訊細圖
        寄出前會在幫你做一次清潔`,
        price: 350,
        quantity: 1,
        delivery: '1',
        delivery_location: '桃園',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 51,
        name: 'adidas 350 (白)',
        picture_url:
          'https://i.pinimg.com/564x/9e/77/f2/9e77f293a6ac8d0a8f1e41f487117157.jpg',
        info: `
        350
        八成新 專櫃購入 絕對正品
        size22.5
        售出不退`,
        price: 3500,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 71,
        name: 'adidas NMD 360',
        picture_url:
          'https://i.pinimg.com/564x/d5/bb/d9/d5bbd96e3b14717fae74957c9bdfadaf.jpg',
        info: `
        🎈二手/約九成新/保存良好/鞋底部分已有刷洗
        鞋面，鞋墊，大致上跟新的一樣
        🎈尺寸：us:5.5k=uk:5k=12cm
        🎈商品售出，恕不退換貨🙏`,
        price: 1000,
        quantity: 1,
        delivery: '1',
        delivery_location: '基隆',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 91,
        name: 'Adidas Originals Stan Smith (綠尾)',
        picture_url:
          'https://i.pinimg.com/564x/d9/db/24/d9db24bc3d4444c67b6ba7978ce5663e.jpg',
        info: `
        尺寸：UK：4/21
        只穿約3次，極新`,
        price: 2000,
        quantity: 1,
        delivery: '1',
        delivery_location: '新北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 111,
        name: 'Adidas Yeezy Boost 350 v2 純白',
        picture_url:
          'https://i.pinimg.com/564x/a7/8d/6b/a78d6b906f63bfdb2250d1cae7e466ed.jpg',
        info: `
        US10 鞋盒已不在
        鞋況如圖 約九成新
        平常少穿 便宜給有興趣的人`,
        price: 1600,
        quantity: 1,
        delivery: '1',
        delivery_location: '彰化',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 111,
        name: 'Adidas連帽外套橘紅 xs',
        picture_url:
          'https://i.pinimg.com/564x/ea/58/38/ea5838d155d03c599b84082fa026b4c7.jpg',
        info: `
        約9成新， 橘紅色連帽外套`,
        price: 900,
        quantity: 1,
        delivery: '1',
        delivery_location: '台中',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 131,
        name: 'Adidas x AlexanderWang 運動包',
        picture_url:
          'https://i.pinimg.com/564x/8a/b0/e1/8ab0e11b069c96fb431310ceda5c6a41.jpg',
        info: `
        ADIDAS ORIGINALS BY ALEXANDER WANG
        雙方強大限量聯名!!! 現在已經買不到了!!!

        買來只使用過2次，相當輕便，適合運動&輕旅行～
        保存的還是相當新歐！

        側面圓筒直徑約20cm / 包包長度約50cm / 前面口袋(寬)22cm x (高)14cm`,
        price: 1980,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 2,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 151,
        name: 'adidas 風衣運動外套',
        picture_url:
          'https://i.pinimg.com/564x/d2/5c/1c/d25c1caa681fc46806d4d0d461c73b00.jpg',
        info: `
        XL號  已經買不到了喔 

        穿過一次幾乎全新喔喔

        覺得太小件了 

        只好賣掉`,
        price: 1000,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 171,
        name: 'Adidas Originals Sleek W 女鞋',
        picture_url:
          'https://i.pinimg.com/564x/0d/f2/20/0df220f6e5d7b0e96f7114831f577b4f.jpg',
        info: `
        💡adidas經典小白鞋，超好搭配
        💡因穿起來太小，故便宜出清
        💡只穿過幾次，寄出前會再整理
        💡實際鞋子還是白色的喔
        💡更多實品照片候補喔！
        💡楦頭較窄，適合腳瘦的人穿喔
        📌size：UK6.5`,
        price: 1500,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 191,
        name: 'Adidas愛迪達飛行內刷毛短外套',
        picture_url:
          'https://i.pinimg.com/564x/01/ce/83/01ce837b551c5d8d7a44e34c907451e5.jpg',
        info: `
        軍綠色內刷毛尺寸L號，這款版型偏小，原本我穿S號，因不想穿太合身，買L號，原價3680元，使用過1次，內刷毛很保暖，短版很修身
        衣長60cm
        袖長62cm
        胸寬53cm
        近全新`,
        price: 2000,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 1,
        name: 'Adidas Yeezy Boost 700 V2 Static/反光/老爹鞋',
        picture_url:
          'https://i.pinimg.com/564x/08/98/2e/08982e635b42b01366ea61de3d178a84.jpg',
        info: `
        Adidas Yeezy Boost 700 V2 Static 反光老爹鞋
        已送洗！
        尺寸太大
        尺寸
        us10、cm28`,
        price: 2600,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 21,
        name: '二手 adidas x9000L4 boost針織透氣鞋面 運動慢跑鞋',
        picture_url:
          'https://i.pinimg.com/564x/d8/37/88/d837880e53f97c8fbbb8484bdd9aac38.jpg',
        info: `
        水貨 頂級原單品 
        二手 adidas x9000L4 boost針織透氣鞋面 運動慢跑鞋 休閒鞋
        約九成新
        US9號 27cm （版型偏大9.5號也可穿）`,
        price: 1200,
        quantity: 1,
        delivery: '1',
        delivery_location: '雲林',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 41,
        name: 'Adidas Climalite 運動短袖',
        picture_url:
          'https://i.pinimg.com/236x/48/92/a9/4892a94902152b54e24ecf34fb0b0094.jpg',
        info: `
        尺寸XS
        只穿過一次，由於屬於二手商品，無法退貨`,
        price: 1200,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 61,
        name: 'Pure boost US9',
        picture_url:
          'https://i.pinimg.com/564x/7e/b1/f7/7eb1f720932a434fe367e9b81defd5c9.jpg',
        info: `
        US9 狀況很好外觀很新 絕對正品outlet購入`,
        price: 1200,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 81,
        name: 'Adidas 長袖運動外套',
        picture_url:
          'https://i.pinimg.com/564x/0e/88/08/0e8808deaee8889b0cc3a6d40c743106.jpg',
        info: `
        穿大概兩次而已，很新，尺寸L`,
        price: 800,
        quantity: 1,
        delivery: '1',
        delivery_location: '南投',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 1,
        name: 'NIKE Air max 95',
        picture_url:
          'https://i.pinimg.com/564x/d3/09/6f/d3096f09b6c4f36fef01f5c7c4997cb4.jpg',
        info: `
        現貨Size:5.5Y 23.4cm
        鞋盒有輕微壓到。`,
        price: 3900,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 121,
        name: 'Nike air max 97',
        picture_url:
          'https://i.pinimg.com/564x/5f/3d/4e/5f3d4e85be4b64984d7eb93361ed4748.jpg',
        info: `
        穿不到3次，因尺寸太大，無鞋盒`,
        price: 2100,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 141,
        name: 'Nike 後背包',
        picture_url:
          'https://i.pinimg.com/564x/c6/b5/ec/c6b5ec82fab2ab56e112ae6ec76d2579.jpg',
        info: `
        自己太愛這個小背包
        買了同款五個不同配色的
        買太多了
        有的根本放著就沒在背
        所以才售出的
        絕對是正品`,
        price: 400,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 91,
        UserId: 161,
        name: 'Nike lunar 3 flyknit 慢跑鞋',
        picture_url:
          'https://i.pinimg.com/564x/66/fe/59/66fe594d36b542d0e36bdc72c41fbf69.jpg',
        info: `
        Nike lunar 3 flyknit 慢跑鞋 只穿2次 9.9成新`,
        price: 1980,
        quantity: 1,
        delivery: '1',
        delivery_location: '台中',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 1,
        name: '遊戲歐汀 新超級瑪利歐兄弟Wii',
        picture_url:
          'https://i.pinimg.com/564x/c3/bd/ec/c3bdec833a5215938bd21451e888840d.jpg',
        info: `
        原廠盒裝

        讀取正常`,
        price: 450,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 1,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 21,
        name: 'Nintendo Switch NS 薩爾達傳說：曠野之息',
        picture_url:
          'https://i.pinimg.com/564x/85/e2/26/85e22613cf96bcb3190814e56c04c3bb.jpg',
        info: `
        不分版本更新有中文，二手片。注重商品包裝外觀者,請您購買新品,以免有爭議~

        主機平台：Switch
        遊戲類型：冒險
        發售日期：2017-03-03
        遊戲售價：NT 2090
        遊戲人數：1人
        作品分級：保護級`,
        price: 700,
        quantity: 1,
        delivery: '1',
        delivery_location: '台南',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 41,
        name: 'PSP 主機+16G 全套配件+第二電池',
        picture_url:
          'https://i.pinimg.com/564x/b1/06/a0/b106a096f3d542ee55b2203df66e9c3e.jpg',
        info: `
        該商品已經停產   並非全新  請特別留意

        商品保修一年  請放心購買  不用擔心售後問題

        套裝 全新配件含: 高品質電池X2 快速充電器 保護貼 主機軟包  主機繩 傳輸線 16G記憶卡 讀卡器 果凍套 

        主機外觀 9成新  `,
        price: 2550,
        quantity: 1,
        delivery: '1',
        delivery_location: '彰化',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 61,
        name: 'PS2原廠手把',
        picture_url:
          'https://i.pinimg.com/564x/98/67/21/986721f07ea48b4a4a242232dc3ef5be.jpg',
        info: `
        PS2原廠搖桿/手把，有線震動，功能都正常，另外PS1主機也可適用，規格是相同的請放心`,
        price: 320,
        quantity: 1,
        delivery: '1',
        delivery_location: '彰化',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 81,
        name: 'PS4 漫威蜘蛛人 中文版',
        picture_url:
          'https://i.pinimg.com/564x/dd/d3/01/ddd30107c0b5625873922f8ff8247c50.jpg',
        info: `
        狀態：二手品, 盒裝完整
        特典：商品選項含特典序號者, 內容參考照片, 特典序號期限至2021/09/07
        語系：中文版`,
        price: 850,
        quantity: 1,
        delivery: '1',
        delivery_location: '彰化',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 1,
        name: 'PS4 俠盜獵車手5:GTA5 中文版',
        picture_url:
          'https://i.pinimg.com/564x/b2/f5/bb/b2f5bb68257808f80e9ec4f727ad35f8.jpg',
        info: `
        保存說明:
        BD藍光保存良好
        盒子.說明書.封面紙 皆有
        特典說明:
        無特典序號
        附註說明:
        所有的網路DLC安裝更新檔皆內含在藍光內)
        字幕:中文
        語音:英文`,
        price: 550,
        quantity: 1,
        delivery: '1',
        delivery_location: '桃園',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 121,
        name: 'PS4 決勝時刻 黑色行動3 中文版',
        picture_url:
          'https://i.pinimg.com/564x/2b/96/8a/2b968a3780e3a09dbc42f4373ffdcde9.jpg',
        info: `
        狀態：二手品, 盒裝完整
        語系：中文版
        `,
        price: 500,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 141,
        name: 'PS2 復活邪神：吟遊詩人之歌',
        picture_url:
          'https://i.pinimg.com/564x/1a/90/8b/1a908b998814c6a534a2a6c22165113d.jpg',
        info: `
        遊戲名稱：復活邪神：吟遊詩人之歌
        遊戲語音：日文
        遊戲字幕：日文
        遊戲版本：純日版
        遊戲平台：SONY PS2
        軟體分級：普遍級
        商品狀況：二手 
        `,
        price: 300,
        quantity: 1,
        delivery: '1',
        delivery_location: '新竹',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 161,
        name: 'PS3 惡靈古堡 6',
        picture_url:
          'https://i.pinimg.com/564x/d2/62/de/d262def43c09d3a1ddbdd4d968aac332.jpg',
        info: `
        遊戲名稱：惡靈古堡 6
        遊戲語音：英文
        遊戲字幕：英文、日文
        遊戲版本：純日版 
        遊戲平台：SONY PS3
        軟體分級：限制級
        商品狀況：二手 
        `,
        price: 160,
        quantity: 1,
        delivery: '1',
        delivery_location: '新北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 181,
        name: 'PS4 古墓奇兵:崛起',
        picture_url:
          'https://i.pinimg.com/564x/66/ef/ff/66efffdbe1332712b09c002177e271ee.jpg',
        info: `
        保存說明:
        BD藍光保存良好
        盒子.封面紙 皆有

        特典說明:
        無特典

        附註說明:
        遊戲公司已經採用電子說明書,不再印製實體說明書
        字幕:中文
        語音:中文.英文
        `,
        price: 680,
        quantity: 1,
        delivery: '1',
        delivery_location: '高雄',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 11,
        name: 'PS4 決勝時刻 COD:二戰-中文版',
        picture_url:
          'https://i.pinimg.com/564x/54/b2/50/54b25094bd59b0c4868cc991e27295fc.jpg',
        info: `
        保存說明:
        BD藍光保存良好
        盒子.封面紙 皆有

        特典說明:
        無特典序號或實體特典

        附註說明:
        遊戲公司沒有印製實體說明書,特此告知並非缺件
        字幕:中文.英文
        語音:英文
        `,
        price: 390,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 31,
        name: 'PS4 汪達與巨像 中文版',
        picture_url:
          'https://i.pinimg.com/564x/f8/d3/cf/f8d3cfe5d95c3e503b47175d4114a710.jpg',
        info: `
        保存說明:
        BD藍光保存良好
        盒子.封面紙 皆有

        特典說明:
        特典下載卡未用(下載卡內容請看照片2-限定台灣PSN帳號登入兌換)

        附註說明:
        原廠已經採用電子說明書-不再印製實體說明書
        語音:原創
        字幕:中文.英文
        `,
        price: 800,
        quantity: 1,
        delivery: '1',
        delivery_location: '基隆',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 51,
        name: 'PS4 魔物獵人 世界 中文版',
        picture_url:
          'https://i.pinimg.com/564x/5d/d2/0f/5dd20f39c2787b7c9582331886e8ba59.jpg',
        info: `
        狀態：二手品, 盒書完整, 需先線上更新到最新版才會出現中文
        特典：商品選項含特典序號者, 內容參考照片4, 特典序號期限至2023/01/26
        語系：中文版
        `,
        price: 780,
        quantity: 1,
        delivery: '1',
        delivery_location: '苗栗',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 71,
        name: 'PS4 刺客教條 中文版',
        picture_url:
          'https://i.pinimg.com/564x/f6/12/56/f61256a157563ce61408f001b6aa21c7.jpg',
        info: `
        保存說明:
        BD藍光保存良好
        盒子.封面紙.說明書 皆有
        
        特典說明:
        無特典序號
        
        收錄說明:
        刺客教條2代
        刺客教條:兄弟會
        刺客教條:啟示錄
        
        附註說明:
        語音:英文
        字幕:中文(繁/簡).英文
        `,
        price: 500,
        quantity: 1,
        delivery: '1',
        delivery_location: '雲林',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 91,
        name: 'PS4 巫師3 中文版',
        picture_url:
          'https://i.pinimg.com/564x/13/5e/c7/135ec724c567c70fa1ddee2d9219c859.jpg',
        info: `
        狀態：盒裝完整
        語系：中文版
        `,
        price: 550,
        quantity: 1,
        delivery: '1',
        delivery_location: '新北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 111,
        name: 'PS4 決勝時刻 無盡戰爭 中文版',
        picture_url:
          'https://i.pinimg.com/564x/d3/18/8d/d3188d090fd435051c075499db0c94d3.jpg',
        info: `
        狀態：二手品, 盒裝完整
        特典：商品選項含特典序號者, 內容參考照片4, 特典序號期限至2021/11/04
        語系：中文版
        `,
        price: 520,
        quantity: 1,
        delivery: '1',
        delivery_location: '台中',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 131,
        name: 'PS4 血源詛咒  中文版',
        picture_url:
          'https://i.pinimg.com/564x/32/bb/2e/32bb2eef44fc0a88dae0feda3ddeb5b0.jpg',
        info: `
        狀態：二手品, 盒裝完整, 此為初版, 非遠古獵人版
        特典：商品選項含特典序號者, 內容參考照片4, 特典卡無標註期限, 但有可能已經過期無法兌換
        語系：中文版
        `,
        price: 499,
        quantity: 1,
        delivery: '1',
        delivery_location: '彰化',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 151,
        name: 'PS4 惡魔獵人 5 日文版',
        picture_url:
          'https://i.pinimg.com/564x/53/80/ab/5380abf337a321877e8d9babdb84e276.jpg',
        info: `
        遊戲名稱：惡魔獵人 5
        遊戲語音：日文
        遊戲字幕：日文
        遊戲版本：純日版
        遊戲平台：SONY PS2
        軟體分級：輔15級
        商品狀況：二手 
        `,
        price: 700,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 171,
        name: 'PS4 刺客教條',
        picture_url:
          'https://i.pinimg.com/564x/02/bc/ea/02bcea0d3af94415a5f60d5bbd13a0a7.jpg',
        info: `
        保存說明:
        BD藍光保存良好
        盒子.封面紙.說明書 皆有


        特典說明:
        無特典序號

        收錄說明:
        刺客教條2代
        刺客教條:兄弟會
        刺客教條:啟示錄
        `,
        price: 700,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 101,
        UserId: 191,
        name: 'PS4 惡靈古堡5',
        picture_url:
          'https://i.pinimg.com/564x/15/98/15/1598150924225b746b7d6515fd46814b.jpg',
        info: `
        保存說明:
        BD藍光保存良好
        盒子.封面紙 皆有
        
        特典說明:
        無特典序號
        
        附註說明:
        可單機雙人遊戲
        遊戲公司採用電子說明書-不再印製實體說明書
        字幕:中文.英文.日文
        語音:英文
        `,
        price: 600,
        quantity: 1,
        delivery: '1',
        delivery_location: '嘉義',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 1,
        name: 'LV LOUIS VUITTON SLENDER 短夾',
        picture_url:
          'https://i.pinimg.com/564x/61/db/bb/61dbbb82beb5803c7bb8403db2a94a3f.jpg',
        info: `
        二手95新
        1.0 x 9.0 x 2.0 cm 
        (長度 x 高度 x 闊度) 

        - 4.3 x 3.5 英吋
        - 塗層帆布
        - 8個信用卡夾層
        - 1個紙幣隔層
        - 法國製造或西班牙製造
        `,
        price: 4000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 11,
        name: '毛帽',
        picture_url:
          'https://i.pinimg.com/564x/ba/94/87/ba9487dae3109e24984c85cfc73e4d5b.jpg',
        info: `
        二手 極新
        沒在戴了，便宜賣了
        `,
        price: 150,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 11,
        name: '工具鉗',
        picture_url:
          'https://i.pinimg.com/564x/2c/8b/90/2c8b903d94a19684c5d6f88bef1fcd3b.jpg',
        info: `
        二手，商品因在倉庫放置有放置痕跡 生鏽

        皆已上油清理，不影響使用
        `,
        price: 80,
        quantity: 5,
        delivery: '1',
        delivery_location: '基隆',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 21,
        name: '開瓶器',
        picture_url:
          'https://i.pinimg.com/564x/87/df/79/87df79dada121e5411379e27b0372964.jpg',
        info: `
        商品有放置痕跡 無生鏽 未使用
        此商品為二手商品不影響其使用。
        `,
        price: 210,
        quantity: 1,
        delivery: '1',
        delivery_location: '台南',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 31,
        name: '滅火器',
        picture_url:
          'https://i.pinimg.com/564x/a4/80/d9/a480d92a427141729e5006e07e3827f3.jpg',
        info: `
        商品規格
        射程:5M以上
        噴射時間:10秒
        藥劑重量:3.5KG
        容器重量:2.5KG
        總重:6KG
        乾粉更換..法定3年有期限
        `,
        price: 500,
        quantity: 1,
        delivery: '1',
        delivery_location: '台南',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 41,
        name: '剪刀',
        picture_url:
          'https://i.pinimg.com/564x/2c/50/db/2c50db81314e92ef06d88a798ef047cd.jpg',
        info: `
        商品如圖

        包裝損毀 裸裝出貨
        
        刀面有髒污 痕跡
        
        功能正常        
        `,
        price: 500,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 51,
        name: '收納衣架',
        picture_url:
          'https://i.pinimg.com/564x/ac/42/96/ac4296e4caecfeac8260231591bfd988.jpg',
        info: `
        二手商品有使用痕跡，高標買家請買全新品 
        `,
        price: 15,
        quantity: 10,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 61,
        name: '陶瓷碗',
        picture_url:
          'https://i.pinimg.com/564x/de/e7/5c/dee75cfcf53838ed7cbeae6a9b60ca97.jpg',
        info: `
        二手商品有使用痕跡，高標買家請買全新品 
        `,
        price: 40,
        quantity: 4,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 71,
        name: '茶杯',
        picture_url:
          'https://i.pinimg.com/564x/80/eb/b1/80ebb148a4b17fa98335870292fa3443.jpg',
        info: `
        二手商品有使用痕跡，高標買家請買全新品 
        `,
        price: 60,
        quantity: 5,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 81,
        name: '餐具組',
        picture_url:
          'https://i.pinimg.com/564x/27/1f/37/271f376c140748e626fa7f61152d3b5c.jpg',
        info: `
        二手商品有使用痕跡，高標買家請買全新品 
        `,
        price: 540,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 91,
        name: '紙膠帶',
        picture_url:
          'https://i.pinimg.com/564x/09/f2/01/09f201bbadc30bb72c41428929c69eaf.jpg',
        info: `
        二手商品有使用痕跡，高標買家請買全新品 
        `,
        price: 60,
        quantity: 5,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 1,
        name: 'Kodak 柯達50年代古董底片罐',
        picture_url:
          'https://i.pinimg.com/564x/93/e7/d2/93e7d2753da0d7db103955032d252ab3.jpg',
        info: `
        購於美國
        保存算很好的老古董
        但仍有些微痕跡
        介意者請不要購買
        `,
        price: 300,
        quantity: 5,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 111,
        name: 'Minolta 古董蛇腹相機皮套',
        picture_url:
          'https://i.pinimg.com/564x/6e/11/6b/6e116be3b257861d097a52016a0cc3ea.jpg',
        info: `
        Minolta 古董蛇腹相機皮套，由於年代久遠，外觀些微老化，牛皮接縫處無脫線，手拿皮帶完整
        `,
        price: 400,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 121,
        name: 'FUJIFILM 富士 X-TRA 400 135底片 15入',
        picture_url:
          'https://i.pinimg.com/564x/d9/4f/a6/d94fa6d98c9993d1a5c408e1fbe4bf7c.jpg',
        info: `
        盒子有點毀損，未拆封
        `,
        price: 160,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 131,
        name: '安全帽',
        picture_url:
          'https://i.pinimg.com/564x/5f/2f/3e/5f2f3e722f8190e10c2d3e1727902102.jpg',
        info: `
        九成新尺吋XL
        戴不到5次雙D扣
        `,
        price: 750,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 141,
        name: '行車記錄器 ',
        picture_url:
          'https://i.pinimg.com/564x/a1/c5/be/a1c5be375de68a37f6ff7bbaa11d1a52.jpg',
        info: `
        二手商品，功能使用正常

        附8G記憶卡
        `,
        price: 300,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 151,
        name: '夜燈 ',
        picture_url:
          'https://i.pinimg.com/564x/60/c3/f3/60c3f33fcd50e2695db40db6f1fca974.jpg',
        info: `
        用了四個月，沒有損壞
        `,
        price: 120,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 161,
        name: '紀念幣 ',
        picture_url:
          'https://i.pinimg.com/564x/30/7a/7b/307a7bbf5126067172b2265bd672dd6d.jpg',
        info: `
        因不知真假，所以當成是假的參考幣販售，買回去如果不滿意，可以換購有保證書的外國真銀幣.
        `,
        price: 120,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 161,
        name: '巧克力醬',
        picture_url:
          'https://i.pinimg.com/564x/00/47/49/0047491b305aecd6105a0d8aa364f556.jpg',
        info: `
        效期到2021年10月
        約還有9分滿
        `,
        price: 50,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 171,
        name: '沙發',
        picture_url:
          'https://i.pinimg.com/564x/25/f4/20/25f420d4071f35e555b5021fc4c75413.jpg',
        info: `
        椅子幾乎全新，功能皆正常
        `,
        price: 3000,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 181,
        name: '杯子',
        picture_url:
          'https://i.pinimg.com/564x/b2/11/3c/b2113c1aafd62e441ed23f01c6517fb1.jpg',
        info: `
        全新沒有使用過
        質感很細緻
        `,
        price: 120,
        quantity: 1,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 111,
        UserId: 191,
        name: '托盤',
        picture_url:
          'https://i.pinimg.com/564x/55/ac/17/55ac17ba8a7056e5b338e81a6d34cb5d.jpg',
        info: `
        商品狀況：約 8 誠心 僅擺設 
        有使用痕跡和些微刮痕
        `,
        price: 3000,
        quantity: 2,
        delivery: '1',
        delivery_location: '屏東',
        delivery_time: 3,
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
