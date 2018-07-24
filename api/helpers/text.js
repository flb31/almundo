function search (query, attr) {
    return (element) => element[attr].toLowerCase().indexOf( query.toLowerCase() ) > -1;
}

module.exports = {
    search
}