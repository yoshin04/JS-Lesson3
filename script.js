'use strict';
  const taskTrigger = document.getElementById('task_trigger');
  const taskTarget = document.getElementById('task_target');
  const taskValue = document.getElementById('task_value');
  let  taskId = 0;

  const addTask = (task, id) => {
      const tableItem = document.createElement('tr');
      taskTarget.appendChild(tableItem);
      const taskId = document.createElement('td');
      taskId.innerText = id;
      tableItem.appendChild(taskId);
      const taskContent = document.createElement('td');
      taskContent.innerText = task;
      tableItem.appendChild(taskContent);
      const status = document.createElement('td');
      tableItem.appendChild(status);
      const statusButton = document.createElement('button');
      statusButton.innerText = '作業中';
      status.appendChild(statusButton);
      const remove = document.createElement('td');
      tableItem.appendChild(remove);
      const removeButton = document.createElement('button');
      removeButton.innerText = '削除';
      remove.appendChild(removeButton);
  } 
    

  taskTrigger.addEventListener('click', () => {
    const task = taskValue.value;
    addTask(task, taskId++);
    taskValue.value = '';
  });
  