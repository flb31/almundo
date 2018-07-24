const data = require('../data/data');

const hotelModel = {};

hotelModel.get = (callback) => {
    if(!data) {
        throw error;
    }

    callback(data);
}

module.exports = hotelModel;