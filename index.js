const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

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
  console.log(`Listening on http://localhost:${port}`);
});

app.options('*', cors());
app.use('/v1/user', userRoutes);