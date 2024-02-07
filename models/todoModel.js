const db = require('./db');
const Todo = require('./todoSchema');


//Send all task
module.exports.getallTodo = async () => {
    const todo = await Todo.find({});
    return todo;
}

//Add new task
module.exports.addnewTask = async (task) => {
    try {
        const newtask = new Todo(task);
        await newtask.save();
        return true;
    } catch (err) {
        throw err;
    }
}

//Update Task
module.exports.updateTask = async (task, id) => {
    try {
        const updateTask = await Todo.findByIdAndUpdate(id, task, ({ runValidators: true }));
        return true;
    } catch (err) {
        throw err;
    }
}

//Delete Task
module.exports.deleteTask = async (id) => {
    try {
        const deletetask = await Todo.findByIdAndDelete(id);
        return true;
    } catch (err) {
        throw err;
    }
}