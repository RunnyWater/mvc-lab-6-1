const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.set('views', path.join(__dirname, '/views'));



app.use(express.static(path.join(__dirname, '/public'))); 
app.set('view engine', 'ejs'); 
app.use(session({
 secret: 'secret',
 resave: false,
 saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});

const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');

app.use('/user', userRoutes);
app.use('/', bookRoutes);



const errorRoutes = require('./routes/error');
app.use("*", errorRoutes);