import data from '../data/data';
import Text from '../helpers/text';

let firtTime = true;
const hotelModel = {};

hotelModel.get = (req, callback) => {
    if(!data) {
        throw error;
    }

    const q = req.query.q;

    if(firtTime) {
        Text.setUrlImages(data, req);
        firtTime = false;
    }

    let hotels = (q) ? data.filter(Text.search(q, 'name')) : data;
    

    // refactor dynamic attributes
    const stars = req.query.stars; 
    if(stars) {
        const arr = stars.split(',');

        let temp = [];
        for(const star of arr ) {
            const find = hotels.filter( hotel => star == hotel.stars );
            temp = temp.concat(find);
        }

        hotels = temp;
    }
    

    callback(hotels);
}


module.exports = hotelModel;
