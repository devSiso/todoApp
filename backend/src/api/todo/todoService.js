//requiring our schema
const Todo = require('./todo');

//setting available methods and update's configs
Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({ new: true, runValidators: true });

module.exports = Todo;