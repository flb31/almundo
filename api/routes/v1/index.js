module.exports = function(app) {
    
    // Default
    app.get('/v1', (req, res) => {
        res.send('API almundo.com v1');
    });

    // Hotels
    require('./hotels')(app);
}
