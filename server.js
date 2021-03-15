const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/connection');
// const session = require('express-session');
// const passport = require('passport');
// const keys = require('./config/keys');
// require('./models/User');
// require('./services/passport');

// create our express app
const app = express();

// connect to MongoDB
connectDB();

// MIDDLEWARE
// dev help debug
app.use(morgan('dev'));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express session middleware
// app.use(
//   session({
//     secret: keys.secret, // secret used to encrypt our cookie
//     maxAge: 6 * 60 * 60 * 1000, // cookie lasts 6 hrs in milliseconds
//     resave: true,
//     saveUninitialized: true,
//   })
// );

// passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// ROUTES
app.get('/', (req, res) => res.send('API running'));
app.use('/api/auth', require('./routes/auth'));

// START the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
