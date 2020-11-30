'use strict';
const taskTrigger = document.getElementById('task_trigger');
const taskValue = document.getElementById('task_value');
const taskTbl = document.getElementById('tbl');
const todos = [];

const pushTask = todo => {
  todos.push(todo);
}

const createStatusBtn = (todo, status) => {
  const statusBtn = document.createElement('button');
  statusBtn.innerText = todo.status;
  status.appendChild(statusBtn);
}

const createRemoveBtn = remove => {
  const removeBtn = document.createElement('button');
  removeBtn.innerText = '削除';
  remove.appendChild(removeBtn);
}

const taskList = todo => {
  const taskId = todos.length;

  //最後の行に新しい行を追加
  const row = taskTbl.insertRow(-1);

  //各項目の追加
  const id = row.insertCell(0);
  const comment = row.insertCell(1);
  const status = row.insertCell(2);
  const remove = row.insertCell(3);

  id.innerText = taskId;
  comment.textContent = todo.task;
  createStatusBtn(todo, status);
  createRemoveBtn(remove);
}

//task追加機能発火
taskTrigger.addEventListener('click', () => {
  const todo = { task: taskValue.value, status: '作業中' }
  pushTask(todo);
  taskList(todo);
});