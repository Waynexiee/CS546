const todoItems = require("./todo");
const connection = require("./mongoConnection");
async function main() {
  const task1 = {
    title: "Ponder Dinosaurs",
    description: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
  };

  const task2 = {
    title: "Play Pokemon with Twitch TV",
    description: "Should we revive Helix?"
  };

  const createdTask1 = await todoItems.createTask(task1.title, task1.description);
  console.log(createdTask1);

  const createdTask2 = await todoItems.createTask(task2.title, task2.description);
  console.log(await todoItems.getAllTasks());

  await todoItems.removeTask(createdTask1._id);

  todos = await todoItems.getAllTasks();
  console.log(todos);
  for (let i = 0; i < todos.length; i++) {
    await todoItems.completeTask(todos[i]._id);
  }

  console.log(await todoItems.getAllTasks());

  const db = await connection();
  await db.serverConfig.close();
}

main();