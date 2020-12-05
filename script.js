'use strict';
const taskTrigger = document.getElementById('task_trigger');
const taskValue = document.getElementById('task_value');
const taskTable = document.getElementById('table');
const todos = [];

const createStatusButton = (todo, status) => {
  const statusButton = document.createElement('button');
  statusButton.innerText = todo.status;
  status.appendChild(statusButton);
}

const createRemoveButton = (remove, row) => {
  const removeButton = document.createElement('button');
  removeButton.innerText = '削除';
  remove.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    const index = row.rowIndex-1;
    todos.splice(index, 1);
    while(table.rows[0])table.deleteRow(0);
    todos.forEach((todo) => {
      showTasks(todo);
    });
  });
}

const showTasks = todo => {
  const taskId = taskTable.rows.length;

  //最後の行に新しい行を追加
  const row = taskTable.insertRow(-1);

  //各項目の追加
  const id = row.insertCell(0);
  const comment = row.insertCell(1);
  const status = row.insertCell(2);
  const remove = row.insertCell(3);

  id.innerText = taskId;
  comment.innerText = todo.task;
  createStatusButton(todo, status);
  createRemoveButton(remove, row);
}

//task追加機能発火
taskTrigger.addEventListener('click', () => {
  const todo = { task: taskValue.value, status: '作業中' }
  todos.push(todo);
  showTasks(todo);
  taskValue.value = '';
});

