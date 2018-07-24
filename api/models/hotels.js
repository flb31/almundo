import data from '../data/data';
import Text from '../helpers/text';

const hotelModel = {};

hotelModel.get = (q, callback) => {
    if(!data) {
        throw error;
    }

    const hotels = (q) ? data.filter(Text.search(q, 'name')) : data;

    callback(hotels);
}

module.exports = hotelModel;
