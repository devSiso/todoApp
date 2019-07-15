//requiring mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//exporting and connecting mongose to mongodb
module.exports = mongoose.connect('mongodb://localhost/todo');