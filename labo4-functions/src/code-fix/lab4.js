// TODO: Fix the errors in the functions below!

function addTask(taskList, newTask) {
  taskList.push(newTask);
  return taskList;
}

function deleteTask(taskList, index) {
  taskList.splice(index, 1);
  return taskList;
}

function editTask(taskList, index, editedTask) {
  taskList.splice(index, 1, editedTask);
  return taskList;
}

function completeTask(taskList, index) {
  taskList[index].completed = true;
  return taskList;
}

function clearCompletedTasks(taskList) {
  for (let i = taskList.length - 1; i >= 0; i--) {
    if (taskList[i].completed === true) {
      taskList.splice(i, 1);
    }
  }
  return taskList;
}

function sortTasksByDate(taskList) {
  taskList.sort((a, b) => new Date(a.date) - new Date(b.date));
  return taskList;
}

function filterTasksByKeyword(taskList, keyword) {
  const result = taskList.filter((word) =>
    word.toLowerCase().includes(keyword),
  );
  return result;
}

function getCompletedTasks(taskList) {
  for (let i = taskList.length - 1; i >= 0; i--) {
    if (taskList[i].completed === false) {
      taskList.splice(i, 1);
    }
  }
  return taskList;
}

function getIncompleteTasks(taskList) {
  for (let i = taskList.length - 1; i >= 0; i--) {
    if (taskList[i].completed === true) {
      taskList.splice(i, 1);
    }
  }
  return taskList;
}

function getTaskCount(taskList) {
  return taskList.length;
}

function getCompletedTaskCount(taskList) {
  let count = 0;
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].completed === true) {
      count++;
    }
  }
  return count;
}

function getIncompleteTaskCount(taskList) {
  // maniere pluss simple en reutilisant la fonction du dessus 😶‍🌫️, cela fait moins de mémoire alloué non ?
  return taskList.length - getCompletedTaskCount(taskList);

  /* 
  let count = 0;
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].completed === false) {
      count++;
    }
  }
  return count;
   */
}

function removeCompletedTasks(taskList) {
  for (let i = taskList.length - 1; i >= 0; i--) {
    if (taskList[i].completed === true) {
      taskList.splice(i, 1);
    }
  }
  return taskList;
}

function markAllTasksAsCompleted(taskList) {
  // soit je refais avec le for car je les fait partout

  // for (let i = 0; i < taskList.length; i++) {
  //   taskList[i].completed = true;
  // }
  // soit je fais avec le forEach
  taskList.forEach((element) => {
    element.completed = true;
  });
  return taskList;
}

function markAllTasksAsIncomplete(taskList) {
  taskList.forEach((element) => {
    element.completed = false;
  });
  return taskList;
}

function addTaskToList(taskList, task) {
  taskList.push({ task: task, completed: false });
  return taskList;
}

function deleteTaskFromList(taskList, index) {
  taskList.splice(index, 1);
  return taskList;
}

function editTaskInList(taskList, index, newTask) {
  taskList[index].task = newTask;
  return taskList;
}

function moveTaskUp(taskList, index) {
  if (index === 0) {
    return taskList;
  }
  const newIndex = index - 1;
  taskList.splice(newIndex, 0, taskList.splice(index, 1)[0]);
  return taskList;
}

function moveTaskDown(taskList, index) {
  if (index === taskList.length - 1) {
    return taskList;
  }
  const newIndex = index + 1;
  taskList.splice(newIndex, 0, taskList.splice(index, 1)[0]);
  return taskList;
}

module.exports = {
  addTask,
  deleteTask,
  editTask,
  completeTask,
  clearCompletedTasks,
  sortTasksByDate,
  filterTasksByKeyword,
  getCompletedTasks,
  getCompletedTaskCount,
  getIncompleteTaskCount,
  getTaskCount,
  getIncompleteTasks,
  removeCompletedTasks,
  markAllTasksAsCompleted,
  markAllTasksAsIncomplete,
  addTaskToList,
  editTaskInList,
  deleteTaskFromList,
  moveTaskUp,
  moveTaskDown,
};
