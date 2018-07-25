import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

// Settings
dotenv.config();
app.set('port', process.env.PORT || 5000 );
app.use(bodyParser.json());

// Access control allow
app.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL_ACCESS_CONTROL);

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// Static files
app.use('/static', express.static('public'));

// Middlewares
app.use( morgan('dev') );

// Routes
require('./api/routes/v1')(app);

app.listen(app.get('port'), () => {
    console.log(`API on port ${app.get('port')}`);
});
