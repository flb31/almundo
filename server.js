const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

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
