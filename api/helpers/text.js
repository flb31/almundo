function search (query, attr) {
    if(!attr) {
        throw 'Attribute is empty';
    }
    return (element) => element[attr].toLowerCase().indexOf( query.toLowerCase() ) > -1;
}

module.exports = {
    search
}