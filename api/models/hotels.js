import data from '../data/data';
import Text from '../helpers/text';

let firtTime = true;
const hotelModel = {};

hotelModel.get = (q, req, callback) => {
    if(!data) {
        throw error;
    }

    if(firtTime) {
        Text.setUrlImages(data, req);
        firtTime = false;
    }

    const hotels = (q) ? data.filter(Text.search(q, 'name')) : data;

    callback(hotels);
}


module.exports = hotelModel;
