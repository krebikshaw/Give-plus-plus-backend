const db = require('../models');
const { Op, json } = require('sequelize');
const { Product, Product_category, User } = db;
const statusSwitch = (status) => {
  switch (status) {
    case 'checking':
      //0: 未審查
      status = '0';
      break;
    case 'all':
      // 全部
      status = ['0', '1', '2'];
      break;
    case 'failed':
      //2:未通過
      status = '2';
      break;
    default:
      //1:已審核通過
      status = '1';
  }
  return status;
};

const checkNumber = (str) => {
  let NumberRgexp = /^([1-9]\d*|[0]{1,1})$/;
  return NumberRgexp.test(str);
};

const checkInteger = (str) => {
  let IntegerRgexp = /^[0-9]*[1-9][0-9]*$/;
  return IntegerRgexp.test(str);
};

const productController = {
  // 撈取所有商品
  getProducts: (req, res) => {
    console.log('==========開始撈取商品===========');
    let { _page, _limit, _sort, _status, _order } = req.query;
    const page = Number(_page) || 1;
    let offset = 0;
    if (page) {
      offset = (page - 1) * (_limit ? parseInt(_limit) : 10);
    }
    const sort = _sort || 'id';
    const order = _order || 'DESC';
    let status = _status || 'passed';
    status = statusSwitch(status);

    console.log('page:', page);
    console.log('limit:', _limit || 10);
    console.log('offset:', offset);
    console.log('product status:', status);

    Product.findAndCountAll({
      where: {
        status,
        quantity: {
          [Op.gt]: 0,
        },
      },
      include: [
        {
          model: Product_category,
          attributes: ['id', 'name'],
        },
        {
          model: User,
          attributes: ['id', 'username', 'nickname'],
        },
      ],
      limit: _limit ? parseInt(_limit) : 10,
      offset: offset,
      order: [[sort, order]],
    })
      .then((products) => {
        if (products.count === 0) {
          console.log('==========撈取商品結束===========');
          return res.status(400).json({ ok: 0, message: '暫無商品' });
        }
        if (products.rows.length !== 0) {
          // console.log(JSON.stringify(products, null, 4));
          console.log('==========撈取商品結束===========');
          return res.status(200).json({
            ok: 1,
            data: {
              count: products.count,
              products: products.rows,
            },
          });
        }
        console.log('==========撈取商品結束===========');
        return res.status(400).json({ ok: 0, message: '無更多商品' });
      })
      .catch((err) => {
        console.log('撈取商品失敗:', err);
        console.log('==========撈取商品結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },

  // 撈取所有分類
  getCategories: (req, res) => {
    console.log('==========開始撈取分類===========');
    Product_category.findAll()
      .then((categories) => {
        if (categories.length !== 0) {
          console.log('==========撈取分類結束===========');
          return res.status(200).json({ ok: 1, data: categories });
        }
        console.log('==========撈取分類結束===========');
        return res.status(400).json({ ok: 0, message: '暫無分類' });
      })
      .catch((err) => {
        console.log('==========撈取分類結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },

  // 撈取該分類商品並可篩選該分類商品的狀態
  getProductsFromCategory: (req, res) => {
    console.log('==========開始撈取該分類商品===========');
    const id = req.params.id;
    console.log('該分類 id:', id);
    let { _page, _limit, _sort, _status, _order } = req.query;
    const page = Number(_page) || 1;
    let offset = 0;
    if (page) {
      offset = (page - 1) * (_limit ? parseInt(_limit) : 10);
    }
    const sort = _sort || 'id';
    const order = _order || 'DESC';
    let status = _status || 'passed';
    status = statusSwitch(status);

    console.log('page:', page);
    console.log('limit:', _limit || 10);
    console.log('offset:', offset);
    console.log('product status:', status);

    Product_category.findOne({
      where: {
        id,
      },
      attributes: ['id', 'name'],
    })
      .then((category) => {
        //console.log(JSON.stringify(category, null, 4));
        if (!category) {
          console.log('==========撈取該分類商品結束===========');
          return res.status(400).json({ ok: 0, message: '查無此分類' });
        }

        Product.findAndCountAll({
          where: {
            ProductCategoryId: category.id,
            status,
            quantity: {
              [Op.gt]: 0,
            },
          },
          include: [
            {
              model: User,
              attributes: ['id', 'username', 'nickname'],
            },
          ],
          limit: _limit ? parseInt(_limit) : 10,
          offset: offset,
          order: [[sort, order]],
        })
          .then((products) => {
            //console.log(JSON.stringify(products, null, 4));
            if (products.count === 0) {
              console.log('==========撈取該分類商品結束===========');
              return res.status(400).json({ ok: 0, message: '此分類暫無商品' });
            }

            if (products.rows.length !== 0) {
              console.log('==========撈取該分類商品結束===========');
              return res.status(200).json({
                ok: 1,
                data: {
                  category: category.name,
                  count: products.count,
                  products: products.rows,
                },
              });
            }
            console.log('==========撈取該分類商品結束===========');
            return res.status(400).json({ ok: 0, message: '無更多商品' });
          })
          .catch((err) => {
            console.log('撈取該分類商品錯誤:', err);
            console.log('==========撈取該分類商品結束===========');
            return res.status(500).json({ ok: 0, message: err });
          });
      })
      .catch((err) => {
        console.log('撈取該分類商品錯誤:', err);
        console.log('==========撈取該分類商品結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },

  // 獲取該賣家商品
  getProductFromVendor: (req, res) => {
    console.log('==========開始撈取該賣家商品===========');
    const id = req.params.id;
    console.log('賣家 id:', id);
    if (!id) {
      console.log('==========撈取該賣家商品結束===========');
      return res.status(400).json({ ok: 0, message: 'params is required' });
    }

    let { _page, _limit, _sort, _status, _order } = req.query;
    const page = Number(_page) || 1;
    let offset = 0;
    if (page) {
      offset = (page - 1) * (_limit ? parseInt(_limit) : 10);
    }
    const sort = _sort || 'id';
    const order = _order || 'DESC';
    let status = _status || 'passed';
    status = statusSwitch(status);

    console.log('page:', page);
    console.log('limit:', _limit || 10);
    console.log('offset:', offset);
    console.log('product status:', status);

    User.findOne({
      where: {
        id,
      },
      attributes: [
        'id',
        'username',
        'nickname',
        'email',
        'address',
        'announcement',
        'account',
        'socialmedia_id',
        'avatar_url',
        'banner_url',
        'is_admin',
        'is_vendor',
      ],
    })
      .then((user) => {
        //console.log(JSON.stringify(user, null, 4));
        if (!user || !user.is_vendor) {
          console.log('==========撈取該賣家商品結束===========');
          return res.status(400).json({ ok: 0, message: '非賣家' });
        }

        Product.findAndCountAll({
          where: {
            UserId: id,
            status,
          },
          include: [
            {
              model: Product_category,
              attributes: ['id', 'name'],
            },
            {
              model: User,
              attributes: ['id', 'username', 'nickname'],
            },
          ],
          limit: _limit ? parseInt(_limit) : 10,
          offset: offset,
          order: [[sort, order]],
        })
          .then((products) => {
            // console.log(JSON.stringify(products, null, 4));
            if (products.count === 0) {
              console.log('==========撈取該賣家商品結束===========');
              return res.status(400).json({ ok: 0, message: '暫無商品' });
            }

            if (products.rows.length !== 0) {
              console.log('==========撈取該賣家商品結束===========');
              return res.status(200).json({
                ok: 1,
                data: {
                  vendorInfo: user,
                  count: products.count,
                  products: products.rows,
                },
              });
            }
            console.log('==========撈取該賣家商品結束===========');
            return res.status(400).json({ ok: 0, message: '無更多商品' });
          })
          .catch((err) => {
            console.log('撈取該賣家商品錯誤:', err);
            console.log('==========撈取該賣家商品結束===========');
            return res.status(500).json({ ok: 0, message: err });
          });
      })
      .catch((err) => {
        console.log('撈取該賣家商品錯誤:', err);
        console.log('==========撈取該賣家商品結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },

  // 搜尋關鍵字商品，中英都可
  searchProduct: (req, res) => {
    console.log('==========開始撈取關鍵字商品===========');
    let { _page, _limit, _sort, _status, _order, _keyword } = req.query;
    if (!_keyword) {
      console.log('==========撈取關鍵字商品結束===========');
      return res.status(400).json({ ok: 0, message: 'keyword is required' });
    }
    const page = Number(_page) || 1;
    let offset = 0;
    if (page) {
      offset = (page - 1) * (_limit ? parseInt(_limit) : 10);
    }
    const sort = _sort || 'id';
    const order = _order || 'DESC';
    let status = _status || 'passed';

    status = statusSwitch(status);

    console.log('keyword:', _keyword);
    console.log('page:', page);
    console.log('limit:', _limit || 10);
    console.log('offset:', offset);
    console.log('product status:', status);

    Product.findAndCountAll({
      where: {
        status,
        name: {
          [Op.like]: `%${_keyword}%`,
        },
        quantity: {
          [Op.gt]: 0,
        },
      },
      include: [
        {
          model: Product_category,
          attributes: ['id', 'name'],
        },
        {
          model: User,
          attributes: ['id', 'username', 'nickname'],
        },
      ],
      limit: _limit ? parseInt(_limit) : 10,
      offset: offset,
      order: [[sort, order]],
    })
      .then((products) => {
        if (products.count === 0) {
          console.log('==========撈取關鍵字商品結束===========');
          return res.status(400).json({ ok: 0, message: '查無此商品' });
        }

        if (products.rows.length !== 0) {
          // console.log(JSON.stringify(products, null, 4));
          console.log('==========撈取關鍵字商品結束===========');
          return res.status(200).json({
            ok: 1,
            data: {
              count: products.count,
              products: products.rows,
            },
          });
        }
        console.log('==========撈取關鍵字商品結束===========');
        return res.status(400).json({ ok: 0, message: '無更多商品' });
      })
      .catch((err) => {
        console.log('==========撈取關鍵字商品結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },

  getProduct: (req, res) => {
    console.log('==========開始撈取單一商品資訊===========');
    const id = req.params.id;
    console.log('商品 id:', id);
    Product.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Product_category,
          attributes: ['id', 'name'],
        },
        {
          model: User,
          attributes: [
            'id',
            'username',
            'nickname',
            'email',
            'address',
            'announcement',
            'account',
            'socialmedia_id',
            'avatar_url',
            'banner_url',
          ],
        },
      ],
    })
      .then((product) => {
        //console.log(JSON.stringify(product, null, 4));
        if (!product) {
          console.log('==========撈取單一商品資訊結束===========');
          return res.status(400).json({ ok: 0, message: '查無此商品' });
        }
        console.log('==========撈取單一商品資訊結束===========');
        return res.status(200).json({
          ok: 1,
          data: {
            category: product.Product_category.name,
            vendorInfo: product.User,
            product: {
              id: product.id,
              name: product.name,
              picture_url: product.picture_url,
              info: product.info,
              price: product.price,
              quantity: product.quantity,
              delivery: product.delivery,
              delivery_location: product.delivery_location,
              delivery_time: product.delivery_time,
              payment_method: product.payment_method,
              remark: product.remark,
              status: product.status,
              deletedAt: product.deletedAt,
              createdAt: product.createdAt,
              updatedAt: product.updatedAt,
              ProductCategoryId: product.ProductCategoryId,
              UserId: product.UserId,
            },
          },
        });
      })
      .catch((err) => {
        console.log('撈取單一商品資訊錯誤:', err);
        console.log('==========撈取單一商品資訊結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },

  addProduct: (req, res) => {
    console.log('==========開始新增商品===========');
    const UserId = req.user.id;
    console.log('使用者 id:', UserId);
    const {
      ProductCategoryId,
      name,
      picture_url,
      info,
      price,
      quantity,
      delivery, // 出貨方式  0:面交、1:郵寄
      delivery_location, // 出貨地點的欄位
      delivery_time, // 備貨時間的欄位
      payment_method, // 付款方式 0:貨到付款
      remark, // 備註
    } = req.body;

    console.log('商品分類:', ProductCategoryId);
    console.log('商品名稱:', name);
    console.log('商品圖片網址:', picture_url);
    console.log('商品介紹:', info);
    console.log('商品價格:', price);
    console.log('商品數量:', quantity);
    console.log('出貨方式:', delivery);
    console.log('出貨地點:', delivery_location);
    console.log('備貨時間:', delivery_time);
    console.log('付款方式:', payment_method);
    console.log('備註:', remark);

    if (
      !checkInteger(price) ||
      !checkInteger(quantity) ||
      !checkNumber(delivery) ||
      !checkInteger(delivery_time) ||
      !checkNumber(payment_method)
    ) {
      console.log('==========新增商品結束===========');
      return res.status(400).json({ ok: 0, message: '欄位格式不符' });
    }

    if (
      !UserId ||
      !ProductCategoryId ||
      !name ||
      !picture_url ||
      !info ||
      !delivery_location ||
      !name.trim() ||
      !picture_url.trim() ||
      !info.trim() ||
      !delivery_location.trim()
    ) {
      console.log('==========新增商品結束===========');
      return res.status(400).json({ ok: 0, message: '資料不齊全' });
    }

    User.findByPk(UserId)
      .then((user) => {
        if (user.status === 1) {
          console.log('==========新增商品結束===========');
          return res.status(404).json({ ok: 0, message: '您已停權' });
        }

        Product.create({
          UserId,
          ProductCategoryId,
          name,
          picture_url,
          info,
          price,
          quantity,
          delivery,
          delivery_location,
          delivery_time,
          payment_method,
          remark,
        })
          .then((_) => {
            console.log('==========新增商品結束===========');
            return res.status(200).json({
              ok: 1,
              message: 'success',
            });
          })
          .catch((err) => {
            console.log('新增商品錯誤:', err);
            console.log('==========新增商品結束===========');
            return res.status(500).json({ ok: 0, message: err });
          });
      })
      .catch((err) => {
        console.log('新增商品錯誤:', err);
        console.log('==========新增商品結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },

  //賣家可編輯自己的商品
  editProduct: (req, res) => {
    console.log('==========開始編輯商品===========');
    const UserId = req.user.id;
    console.log('使用者 id:', UserId);
    const id = req.params.id;
    console.log('商品 id:', id);
    const {
      ProductCategoryId,
      name,
      picture_url,
      info,
      price,
      quantity,
      delivery, // 出貨方式  0:面交、1:郵寄
      delivery_location, // 出貨地點的欄位
      delivery_time, // 備貨時間的欄位
      payment_method, // 付款方式 0:貨到付款
      remark, // 備註
    } = req.body;

    console.log('商品分類:', ProductCategoryId);
    console.log('商品名稱:', name);
    console.log('商品圖片網址:', picture_url);
    console.log('商品介紹:', info);
    console.log('商品價格:', price);
    console.log('商品數量:', quantity);
    console.log('出貨方式:', delivery);
    console.log('出貨地點:', delivery_location);
    console.log('備貨時間:', delivery_time);
    console.log('付款方式:', payment_method);
    console.log('備註:', remark);

    if (
      !checkInteger(price) ||
      !checkInteger(quantity) ||
      !checkNumber(delivery) ||
      !checkInteger(delivery_time) ||
      !checkNumber(payment_method)
    ) {
      return res.status(400).json({ ok: 0, message: '欄位格式不符' });
    }

    if (
      !UserId ||
      !ProductCategoryId ||
      !name ||
      !picture_url ||
      !info ||
      !delivery_location ||
      !name.trim() ||
      !picture_url.trim() ||
      !info.trim() ||
      !delivery_location.trim()
    ) {
      console.log('==========編輯商品結束===========');
      return res.status(400).json({ ok: 0, message: '資料不齊全' });
    }

    Product.findByPk(id)
      .then((product) => {
        if (!product) {
          console.log('==========編輯商品結束===========');
          return res.status(400).json({ ok: 0, message: '查無資料' });
        }

        if (product.UserId !== req.user.id) {
          console.log('==========編輯商品結束===========');
          return res.status(400).json({ ok: 0, message: 'permission denied' });
        }
        // console.log(JSON.stringify(product, null, 4));
        return product
          .update({
            ProductCategoryId,
            name,
            picture_url,
            info,
            price,
            quantity,
            delivery,
            delivery_location,
            delivery_time,
            payment_method,
            remark,
          })
          .then(() => {
            console.log('==========編輯商品結束===========');
            return res.status(200).json({
              ok: 1,
              message: 'success',
            });
          })
          .catch((err) => {
            console.log('編輯商品錯誤:', err);
            console.log('==========編輯商品結束===========');
            return res.status(500).json({ ok: 0, message: err });
          });
      })
      .catch((err) => {
        console.log('編輯商品錯誤:', err);
        console.log('==========編輯商品結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },

  //賣家可刪除自己商品
  deleteProduct: (req, res) => {
    console.log('==========開始刪除商品===========');
    const id = req.params.id;
    console.log('商品 id:', id);
    Product.findByPk(id)
      .then((product) => {
        if (!product) {
          console.log('==========刪除商品結束===========');
          return res.status(400).json({ ok: 0, message: '查無資料' });
        }

        if (product.UserId !== req.user.id && !req.user.is_admin) {
          console.log('==========刪除商品結束===========');
          return res.status(400).json({ ok: 0, message: 'permission denied' });
        }
        // console.log(JSON.stringify(product, null, 4));
        console.log('==========刪除商品結束===========');
        return product
          .destroy()
          .then(() => {
            res.status(200).json({
              ok: 1,
              message: 'success',
            });
          })
          .catch((err) => {
            console.log('刪除商品錯誤:', err);
            console.log('==========刪除商品結束===========');
            return res.status(500).json({ ok: 0, message: err });
          });
      })
      .catch((err) => {
        console.log('刪除商品錯誤:', err);
        console.log('==========刪除商品結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },

  getProductsForAdmin: (req, res) => {
    console.log('==========開始管理員取得商品===========');
    let { _page, _limit, _sort, _status, _order } = req.query;
    const page = Number(_page) || 1;
    let offset = 0;
    if (page) {
      offset = (page - 1) * (_limit ? parseInt(_limit) : 10);
    }
    const sort = _sort || 'id';
    const order = _order || 'DESC';
    let status = _status || 'all';
    status = statusSwitch(status);

    console.log('page:', page);
    console.log('limit:', _limit || 10);
    console.log('offset:', offset);
    console.log('product status:', status);

    Product.findAndCountAll({
      where: {
        status,
      },
      include: [
        {
          model: Product_category,
          attributes: ['id', 'name'],
        },
        {
          model: User,
          attributes: ['id', 'username', 'nickname'],
        },
      ],
      limit: _limit ? parseInt(_limit) : 10,
      offset: offset,
      order: [[sort, order]],
    })
      .then((products) => {
        if (products.count === 0) {
          console.log('==========管理員取得商品結束===========');
          return res.status(400).json({ ok: 0, message: '暫無商品' });
        }
        if (products.rows.length !== 0) {
          // console.log(JSON.stringify(products, null, 4));
          console.log('==========管理員取得商品結束===========');
          return res.status(200).json({
            ok: 1,
            data: {
              count: products.count,
              products: products.rows,
            },
          });
        }
        console.log('==========管理員取得商品結束===========');
        return res.status(400).json({ ok: 0, message: '無更多商品' });
      })
      .catch((err) => {
        console.log('管理員取得商品錯誤:', err);
        console.log('==========管理員取得商品結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },

  searchProductForAdmin: (req, res) => {
    console.log('==========開始管理員搜尋商品===========');
    let { _page, _limit, _sort, _status, _order, _keyword } = req.query;
    if (!_keyword) {
      console.log('==========管理員搜尋商品結束===========');
      return res.status(400).json({ ok: 0, message: 'keyword is required' });
    }
    const page = Number(_page) || 1;
    let offset = 0;
    if (page) {
      offset = (page - 1) * (_limit ? parseInt(_limit) : 10);
    }
    const sort = _sort || 'id';
    const order = _order || 'DESC';
    let status = _status || 'all';
    status = statusSwitch(status);

    console.log('keyword:', _keyword);
    console.log('page:', page);
    console.log('limit:', _limit || 10);
    console.log('offset:', offset);
    console.log('product status:', status);

    Product.findAndCountAll({
      where: {
        status,
        name: {
          [Op.like]: `%${_keyword}%`,
        },
      },
      include: [
        {
          model: Product_category,
          attributes: ['id', 'name'],
        },
        {
          model: User,
          attributes: ['id', 'username', 'nickname'],
        },
      ],
      limit: _limit ? parseInt(_limit) : 10,
      offset: offset,
      order: [[sort, order]],
    })
      .then((products) => {
        if (products.count === 0) {
          console.log('==========管理員搜尋商品結束===========');
          return res.status(400).json({ ok: 0, message: '查無此商品' });
        }
        if (products.rows.length !== 0) {
          // console.log(JSON.stringify(products, null, 4));
          console.log('==========管理員搜尋商品結束===========');
          return res.status(200).json({
            ok: 1,
            data: {
              count: products.count,
              products: products.rows,
            },
          });
        }
        console.log('==========管理員搜尋商品結束===========');
        return res.status(400).json({ ok: 0, message: '無更多商品' });
      })
      .catch((err) => {
        console.log('管理員搜尋商品錯誤:', err);
        console.log('==========管理員搜尋商品結束===========');
        return res.status(500).json({ ok: 0, message: err });
      });
  },
};

module.exports = productController;
