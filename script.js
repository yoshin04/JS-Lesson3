'use strict';
const taskTrigger = document.getElementById('task_trigger');
const taskTarget = document.getElementById('task_target');
const taskValue = document.getElementById('task_value');
const todos = [];

const addTask = () => {
  todos.forEach((todo, index) => {
    const tableItem = document.createElement('tr');
    taskTarget.appendChild(tableItem);
    const taskId = document.createElement('td');
    taskId.innerText = index;
    tableItem.appendChild(taskId);
    const taskContent = document.createElement('td');
    taskContent.innerText = todo.task;
    tableItem.appendChild(taskContent);
    const status = document.createElement('td');
    tableItem.appendChild(status);
    const statusButton = document.createElement('button');
    statusButton.innerText = todo.status;
    status.appendChild(statusButton);
    const remove = document.createElement('td');
    tableItem.appendChild(remove);
    const removeButton = document.createElement('button');
    removeButton.innerText = '削除';
    remove.appendChild(removeButton);
  });
};

taskTrigger.addEventListener('click', () => {
  const comment = taskValue.value;
  const button = '作業中';
  const todo = { task:comment, status:button}
  todos.push(todo);
  addTask(todos);
  taskValue.value = '';
});