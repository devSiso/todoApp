module.exports = function (req, res, next) {
    //switch on response with another port/origin
    res.header('Access-Control-Allow-Origin', '*');
    //listing available methods
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept');

    next();
}