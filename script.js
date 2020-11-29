'use strict';
const taskTrigger = document.getElementById('task_trigger');
const taskValue = document.getElementById('task_value');
const taskTbl = document.getElementById('tbl');
const todos = [];

//task追加
taskTrigger.addEventListener('click', () => {
  const taskId = todos.length;
  const todo = { task: taskValue.value, status: '作業中' }
  todos.push(todo);
  //最後の行に新しい行を追加
  const row = taskTbl.insertRow(-1);

  //各項目の追加
  const id = row.insertCell(0);
  const comment = row.insertCell(1);
  const status = row.insertCell(2);
  const remove = row.insertCell(3);

  id.innerText = taskId;
  comment.textContent = todo.task;
  const statusBtn = document.createElement('button');
  statusBtn.innerText = todo.status;
  status.appendChild(statusBtn);
  const removeBtn = document.createElement('button');
  removeBtn.innerText = '削除';
  remove.appendChild(removeBtn);
});