import express from 'express';
const app = express();

import morgan from 'morgan';
import bodyParser from 'body-parser';

// Settings
app.set('port', process.env.PORT || 3000 );
app.use(bodyParser.json());

// Middlewares
app.use( morgan('dev') );

// Routes
require('./api/routes/v1')(app);

app.listen(app.get('port'), () => {
    console.log(`API on port ${app.get('port')}`);
});
