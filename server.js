const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/connection');
const cors = require('cors');
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
app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api/auth', require('./routes/auth'));

// START the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
