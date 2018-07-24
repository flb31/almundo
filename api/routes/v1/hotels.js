import Hotel from '../../models/hotels';

module.exports = function(app) {

    app.get('/v1/hotels', (req, res) => {
        Hotel.get( (result) => {
            res.status(200).json(result);
        });
    });
}
