// on line 27, the delete operator is used which doesn't affect the array length. This returns an incorrect value on line 34. A sparse array is also created with an empty slot. Therefore, when the function completeTasks is called again, the first element of the array is undefined. Thus, we don't return our intended task on line 26.

let todos = [
  'wash car',
  'exercise',
  'buy groceries',
  'balance budget',
  'call plumber',
  'feed fido',
  'get gas',
  'organize closet',
];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift();
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();
