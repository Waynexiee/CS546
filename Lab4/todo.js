const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;
const uuidV4 = require('uuid/v4');

module.exports = {
  async createTask(title, description) {
    if (!title) throw "You must provide a title for your todo";

    if (!description) throw "You must provide a description for todo";

    const todoCollection = await todoItems();

    let newTodo = {
      _id: uuidV4(),
      title: title,
      description: description,
      completed: false,
      completedAt: null
    };

    const insertInfo = await todoCollection.insertOne(newTodo);
    if (insertInfo.insertedCount === 0) throw "Could not add todo";

    const newId = insertInfo.insertedId;

    const todo = await this.getTask(newId);
    return todo;
  },

  async getAllTasks() {
    const todoCollection = await todoItems();

    const todos = await todoCollection.find({}).toArray();

    return todos;
  },

  async getTask(id) {
    if (!id) throw "You must provide an id to search for";

    const todoCollection = await todoItems();
    const todo = await todoCollection.findOne({ _id: id });
    if (todo === null) throw "No todo with that id";

    return todo;
  },

  async completeTask(taskId) {
    if (!taskId) throw "You must provide an id to search for";

    const todoCollection = await todoItems();
    const completetask = {
      completed: true,
      completedAt: new Date()
    };

    const updateInfo = await todoCollection.updateOne({ _id: taskId },{$set:completetask});
    if (updateInfo.modifiedCount === 0) {
      throw "could not update todo successfully";
    }

  },

  async removeTask(id) {
    if (!id) throw "You must provide an id to search for";

    const todoCollection = await todoItems();
    const deletionInfo = await todoCollection.removeOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete todo with id of ${id}`;
    }
  }

};