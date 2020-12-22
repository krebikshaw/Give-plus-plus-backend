'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'seller01',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Yoan',
        email: 'seller01@gmail.com',
        address: '台北市信義區松高路192號',
        is_admin: 0,
        is_vendor: 1,
        announcement:
          '喜歡從容的生活步調，所以不定時生產 不定時上架。我們認為，每一種產品都應該製造成可以使用的，而不僅僅是在貨架上看起來漂亮或有趣。雖然我們認為它也應該看起來很漂亮，但是仍然很有趣。因此，每種產品都是針對多種功能而設計的。為什麼？因為我們有很多地方可以去，所以無盡激動人心的活動正等著我們加入！',
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url:
          'https://i.pinimg.com/236x/36/9a/8d/369a8d520b7a84465e88de3b0dda45b8.jpg',
        banner_url:
          'https://images.pexels.com/photos/4328961/pexels-photo-4328961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'pretty01',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Zeka',
        email: 'pretty@gmail.com',
        address: '台北市北投區西門路32號',
        is_admin: 0,
        is_vendor: 1,
        announcement:
          '產品結合新潮家庭時尚需求，廣為人知。立於「人有我有」的理念，價值是結合時尚的圖案設計和實用功能，成為每人每天生活的必需品。每人都成為新潮時尚小家品的代言人。',
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url:
          'https://i.pinimg.com/236x/c9/e4/01/c9e401be5a0fb99adcf25e9c11e1e965.jpg',
        banner_url:
          'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'lucky01',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Paw',
        email: 'lucky@gmail.com',
        address: '台北市中正區民族路127號',
        is_admin: 0,
        is_vendor: 1,
        announcement:
          '雖然現在沒有在實體攤位面與大家見面、聊天。但還是可以在網路上服務大家！歡迎大家提出自己想要的商品',
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url:
          'https://i.pinimg.com/236x/98/82/79/98827997e6d52ce37cf31d29ff6b35a0.jpg',
        banner_url:
          'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'hallow01',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'NanYo',
        email: 'hallow01@gmail.com',
        address: '新北市中和區景平路99號',
        is_admin: 0,
        is_vendor: 1,
        announcement:
          '發現從未踏足的領域，發現從未了解的自己。一個問號賦予旅程的意義，一個背包收集答案的碎片，一條手鏈發掘水晶的力量。「好奇而行」正正代表著我們的理念，讓你盛載好奇的種子出發',
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url:
          'https://i.pinimg.com/236x/5d/eb/4b/5deb4b44d5254183cf518aa3dead1d52.jpg',
        banner_url:
          'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'what01',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Can',
        email: 'can0134@gmail.com',
        address: '新北市新莊區中正路94號',
        is_admin: 0,
        is_vendor: 1,
        announcement:
          '透過不斷的實驗跟學習，希望創作出有意義跟故事的作品，它不一定是流行跟必須，卻能時刻提醒我們熱愛生活跟關心周遭的人事物。',
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url:
          'https://i.pinimg.com/236x/4a/08/d0/4a08d0747ceb46ca019e0b46c1a63378.jpg',
        banner_url:
          'https://images.pexels.com/photos/3598435/pexels-photo-3598435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'claygao123',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'claygao',
        email: 'claygao@gmail.com',
        address: '新北市淡水區中正東路一段三巷5樓',
        is_admin: 0,
        is_vendor: 1,
        announcement: '歡迎來到我的賣場哦，這裡有好用好玩的二手商品。',
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url: 'https://i.imgur.com/ww3KQEY.jpg',
        banner_url: 'https://i.imgur.com/FOSGdok.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'nicolakacha',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: '尼可可可拉',
        email: 'nicola@gmail.com',
        address: '台北市仁愛路三段112巷6樓',
        is_admin: 0,
        is_vendor: 1,
        announcement:
          '節能減碳，一起為地球盡一份心力，我銷售的物品主要以書籍為主，歡迎來我的小商店看看~',
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url: 'https://i.imgur.com/rH7rqm3.jpg',
        banner_url: 'https://i.imgur.com/silTKoU.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'nicole0214',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: '妮可',
        email: 'nicole@gmail.com',
        address: '台北市忠孝東路一段218巷9樓',
        is_admin: 0,
        is_vendor: 1,
        announcement:
          '嗚嗚嗚，有很多漂釀的衣服都不能穿惹，拜託幫我帶走它們吧 >__<',
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/HRepmgV.jpg',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url: 'https://i.imgur.com/MZjfLCM.jpg',
        banner_url: 'https://i.imgur.com/YzjoDH7.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'kevin1023',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: '凱文小子',
        email: 'kevin@gmail.com',
        address: '新北市泰山區明志路一段11號1樓',
        is_admin: 0,
        is_vendor: 1,
        announcement: '大學生畢業雜物出清',
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url: 'https://i.imgur.com/Bp5nXnT.jpg',
        banner_url: 'https://i.imgur.com/vj63PIH.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'CarolinaYang123',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Carolina',
        email: 'carolina@gmail.com',
        address: '基隆市安樂路87號6樓',
        is_admin: 0,
        is_vendor: 1,
        announcement: '這裡會賣很多我失心瘋買的小物wwwww',
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url: 'https://i.imgur.com/NpdXdQQ.jpg',
        banner_url: 'https://i.imgur.com/tUkUt2o.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Alan',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Alan',
        email: 'Alan@gmail.com',
        address: '台北市二手區交易路平台巷1號',
        is_admin: 0,
        is_vendor: 1,
        announcement: `Alan 購物解決你生活上的所有需求❤️
      喜歡我們商品的話
      也希望您能給我們優良的評價，支持我們唷⭐️⭐️⭐️⭐️⭐️
      您的支持與鼓勵，是 Alan 購物前進的動力
      希望有機會能再為您服務，感謝您！
      ❗️有任何問題，歡迎來電詢問，我們將有專人為您服務
      ❗️ Alan 購物，出貨前會將嚴格把關每項商品品質`,
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url:
          'https://mir-s3-cdn-cf.behance.net/project_modules/disp/599e3b95636919.5eb96c0445ea7.jpg',
        banner_url:
          'https://www.muralswallpaper.com/app/uploads/pink-and-green-tropical-leaf-design-plain-820x532.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Dean',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Dean',
        email: 'Dean@gmail.com',
        address: '苗栗市二手區交易路平台巷1號',
        is_admin: 0,
        is_vendor: 1,
        announcement: `
      ● 您好，歡迎光臨 Dean 小鋪
      ● 禮拜五休假，不發貨的哦，無法處理事件，請大家諒解
      ● 購買前請註意商品超出45公分麻煩下標宅配或貨到付款喔！因超出了門市的限定尺寸超取是無法寄出的`,
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url:
          'https://mir-s3-cdn-cf.behance.net/project_modules/disp/2091e695636919.5eb96c04456ac.jpg',
        banner_url:
          'https://www.muralswallpaper.com/app/uploads/light-blue-cloudy-sky-watercolour-wallpaper-mural-Plain-820x532@2x.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Eric',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Eric',
        email: 'Eric@gmail.com',
        address: '新竹市二手區交易路平台巷1號',
        is_admin: 0,
        is_vendor: 1,
        announcement: `
      😁您好，歡迎光臨 【Eric】小店 💕
      💗覺得商品很棒的可以加入關注
      ✔️關於商品有任何問題請與我們聯繫`,
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url:
          'https://mir-s3-cdn-cf.behance.net/project_modules/disp/30fb0e95636919.5fa1329549940.jpg',
        banner_url:
          'https://www.muralswallpaper.com/app/uploads/mint-green-ancient-greek-olive-branch-pattern-wallpaper-mural-Plain-820x532.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Gary',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Gary',
        email: 'Gary@gmail.com',
        address: '桃園市二手區交易路平台巷1號',
        is_admin: 0,
        is_vendor: 1,
        announcement: `
      商品金額皆為含稅價,如需抬頭統編請下標後備註
      ◆ 賣場中的所有產品都可以合併運費.如您不知如何計算.可提問幫忙計算總金額
      ◆ 週六/日和國定假日沒有提供寄送服務,如果很急的網友請勿下標 ^^
      ◆ 超商取貨需3-5天(決定於超商的速度)如果很急的網友請使用宅配服務喔 ^^
      ◆ 店面因為商品流動快速 ,自取前請先電話聯絡比較安全喔 ^^`,
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url:
          'https://i.pinimg.com/originals/aa/36/e3/aa36e31e8f310864fd90a7ec43a12bf4.jpg',
        banner_url:
          'https://www.muralswallpaper.com/app/uploads/black-marble-textures-plain-820x532.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Jeff',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Jeff',
        email: 'Jeff@gmail.com',
        address: '嘉義市二手區交易路平台巷1號',
        is_admin: 0,
        is_vendor: 1,
        announcement: `
      您好，歡迎光臨 Jeff 生活館!
      一.我們專注做好每一件事。只為成就最滿意的你
      二.努力，讓顧客感動”！"為顧客創造價值“”我會做的更好
      三.客服每天在線時間：8：00-22:00
      四.一般下標后4至7天為您配送到`,
        account: '1234-5678-9012',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '2020-12-31 23:32:56',
        id_card_no: 'A121212121',
        avatar_url:
          'https://mir-s3-cdn-cf.behance.net/project_modules/disp/34ddd795636919.5f187f5026d27.jpg',
        banner_url:
          'https://www.muralswallpaper.com/app/uploads/3d-leaf-tropical-design-plain-820x532.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Rose',
        password:
          '$2b$10$VuXJ8XmYcnUgY0CbokzEJ.LtiIWn1GG1osbjgNHnC6ETsxdweH.42',
        nickname: 'Rose',
        email: 'Rose@gmail.com',
        address: '台中市西屯區大祥街15號',
        is_admin: 0,
        is_vendor: 1,
        announcement: `🐰 由於本人是購物狂，在專櫃購入被當盤子很久...🤬!意外發現國外百貨公司竟然價錢非常可愛😍，於是這間代購賣場就誕生了🥳！想省錢又怕買到假貨的寶寶們！請在本店安心選購吧😘`,
        account: '1234-5678-9000',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '1994-08-13 23:32:56',
        id_card_no: 'H121212334',
        avatar_url: 'https://i.imgur.com/5Skz4dU.jpg',
        banner_url: 'https://i.imgur.com/dBuGJw7.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Lisa',
        password:
          '$2b$10$vL5pN4ikqIQVDRSVM/C3meRwz0F2pOjs1YUK5s1CgKZdlhKK1H.w6',
        nickname: 'Lisa',
        email: 'Lisa@gmail.com',
        address: '高雄市岡山區義大路',
        is_admin: 0,
        is_vendor: 1,
        announcement: `
      ● 沒有列出的歐美保養、彩妝品牌皆可代購。歡迎聊聊洽詢 ～
      ● 賣場商品都是正貨。我不賣假貨、不賣仿冒品 ~
      ● 賣場商品所購入的明細收據、發票皆會保存二年。如果有任何疑問，隨時可以提的出商品購入來源明細收據或發票。`,
        account: '1234-5678-8888',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '1995-05-22 23:32:56',
        id_card_no: 'A121212232',
        avatar_url: 'https://i.imgur.com/uC0MFYN.jpg',
        banner_url: 'https://i.imgur.com/4EOvqby.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'IU',
        password:
          '$2b$10$mWUcOriUT7rdE05ODT8WJ.0BOAPZvUeWDya9Lg0cb8Av4DAySQmfu',
        nickname: 'IU',
        email: 'IU@gmail.com',
        address: '花蓮市瑞穗鄉大藝路',
        is_admin: 0,
        is_vendor: 1,
        announcement: `
      ♾ 有機－讓大地喘息 ♾
      ♾ 減量－能去蕪存菁 ♾
      ♾ 空瓶－是至高敬意 ♾`,
        account: '1234-5678-97978',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '1996-09-24 23:32:56',
        id_card_no: 'A121212888',
        avatar_url: 'https://i.imgur.com/q6dYPRx.jpg',
        banner_url: 'https://i.imgur.com/RYEAISJ.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'SuzyBaby',
        password:
          '$2b$10$wem.xyB2/VBRQaSay56qxe85j9xiTfTsqKNsUZDaWYZvspMaiY3C2',
        nickname: 'Suzy',
        email: 'Suzy@gmail.com',
        address: '南投市魚池鄉花日路',
        is_admin: 0,
        is_vendor: 1,
        announcement: `
      千萬不用怕買到假貨哦，SuzyBaby對自己賣的商品都會負責任😊
      ❤️賣場內商品主要來自韓國，少量美國和澳洲代購商品絕對為正品，無須再問喔!!!
      也有販售正韓貨服飾🇰🇷
      💔期許能讓每個買家們買得安心用的開心，希望能建立買賣雙方互相信任，互相有禮尊重的優質購物環境，再次感謝您的光臨!!!!😽🙏🏻
      出貨速度較慢！🐰`,
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '1997-04-11 23:32:56',
        id_card_no: 'A121212777',
        avatar_url: 'https://i.imgur.com/Stc8rhD.jpg',
        banner_url: 'https://i.imgur.com/9uUtQFt.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'DabeChen',
        password:
          '$2b$10$QB3WdJ/WgmBmM8K6gpXZw.wofnHWRyzgRerpg.sDSpicIFdtDnezC',
        nickname: 'DabeChen',
        email: 'DabeChen@gmail.com',
        address: '嘉義市南港區大岡路',
        is_admin: 0,
        is_vendor: 1,
        announcement: `
      歡迎來到我的超美賣場喔~~ 🐰
      本賣場均有 LV  GUCCi CHANEL..等等國際大牌喔
      我是非常注重細節的人 本賣場有15天鑒賞期 粉粉們更放心喔
      專櫃商品  最優惠的價格  你值得擁有呢  加關注還有折扣優惠喔 
      `,
        account: '1234-5678-6666',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '1999-11-02 23:32:56',
        id_card_no: 'A121212555',
        avatar_url: 'https://i.imgur.com/gg2WGbz.jpg',
        banner_url: 'https://i.imgur.com/Z3Y6iRG.jpg',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Admin01',
        password:
          '$2b$10$CCGN4qGHNBaIyVk9uFLYOePbx0EFWoxcTwTJJ9Zsac.5sQULS9DFy',
        nickname: 'Give++ 管理員',
        email: 'admin@gmail.com',
        address: '天庭',
        is_admin: 1,
        is_vendor: 1,
        announcement: `不守規矩會被停權唷！`,
        account: '1234-5678-6666',
        socialmedia_id: 'https://i.imgur.com/fD59hgy.png',
        birthday: '1999-11-02 23:32:56',
        id_card_no: 'A121212555',
        avatar_url:
          'https://i.pinimg.com/236x/6d/df/22/6ddf22da1b3e6a5a0fa05dbfaf2fd741.jpg',
        banner_url:
          'https://images.pexels.com/photos/5278835/pexels-photo-5278835.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
