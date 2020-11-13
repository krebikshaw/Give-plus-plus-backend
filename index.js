const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');
const manageRoutes = require('./routes/manageRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

app.listen(port, () => {
  console.log(`「 超級 Give++ 二手交易平台 の API 伺服器 」啟動啦！！Listening on http://localhost:${port}`);
});

app.options('*', cors());
app.use('/v1/user', userRoutes);
app.use('/v1/product', productRoutes);
app.use('/v1/order', orderRoutes);
app.use('/v1/cart', cartRoutes);
app.use('/v1/manage', manageRoutes);