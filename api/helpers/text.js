function search (query, attr) {
    if(!attr) {
        throw 'Attribute is empty';
    }
    return (element) => element[attr].toLowerCase().indexOf( query.toLowerCase() ) > -1;
}

function setUrlImages (data, req) {
    // Set route images
    for(const item of data) {
        item.image = `${req.protocol}://${req.get('host')}/static/hotels/${item.image}`;
    }
}

module.exports = {
    search,
    setUrlImages
}