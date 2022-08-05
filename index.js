// Create a new task by adding to the object
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    completeTask: function () {
      this.complete = true;
    },
    logState: function () {
      const title = this.title;
      const complete = this.complete;
      console.log(`${title} has${complete ? " " : " not "}been completed`);
    },
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
