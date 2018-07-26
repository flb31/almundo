import Hotel from '../../models/hotels';

module.exports = function(app) {

    app.get('/v1/hotels', (req, res) => {

        Hotel.get(req, (result) => {
            
            // delay on purpose
            setTimeout(() => {
                res.status(200).json(result);
            }, 1500);
        });
    });
}
