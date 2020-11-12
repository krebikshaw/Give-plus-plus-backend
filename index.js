const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const cors = require('cors');

const app = express();
const port = 3001;
/*
const xxController = require('./controllers/xx');
const ooController = require('./controllers/oo');
*/
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());

app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));

app.use((req, res, next) => {
  res.locals.username = req.session.username;
  res.locals.errorMessage = req.flash('errorMessage');
  next();
});
/*
app.get('/', xxController.index);
app.get('/getApi', cors(), xxController.getApi);
*/
function redirectBack(req, res) {
  res.redirect('back');
}
/*
app.get('/add', xxController.add);
app.post('/add', xxController.handleAdd);
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});