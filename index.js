require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');
const manageRoutes = require('./routes/manageRoutes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('trust proxy', 1);
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.listen(port, () => {
  console.log(`「 超級 Give++ 二手交易平台 の API 伺服器 」啟動啦！！Listening on http://localhost:${port}`);
});

app.options('*', cors());
app.use('/v1/users', userRoutes);
app.use('/v1/products', productRoutes);
app.use('/v1/orders', orderRoutes);
app.use('/v1/carts', cartRoutes);
app.use('/v1/manages', manageRoutes);