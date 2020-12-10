'use strict';
const taskTrigger = document.getElementById('task_trigger');
const taskValue = document.getElementById('task_value');
const taskTable = document.getElementById('table');
const todos = [];

const createStatusButton = (todo, status, row) => {
  const statusButton = document.createElement('button');
  statusButton.innerText = todo.status;
  status.appendChild(statusButton);
  statusButton.addEventListener('click', () => {
    if (statusButton.innerText === '作業中') {
      todo.status = '完了';
      statusButton.innerText = todo.status;
      row.classList.add('finish');
      change();
      return;
    }
    todo.status = '作業中';
    statusButton.innerText = todo.status;
    row.classList.remove('finish');
    change();
  });
}

const createRemoveButton = (remove, row) => {
  const removeButton = document.createElement('button');
  removeButton.innerText = '削除';
  remove.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    const index = row.rowIndex - 1;
    todos.splice(index, 1);
    while (table.rows[0]) table.deleteRow(0);
    showTasks();
  });
}

//タスク表示切り替え
const change = () => {
  const completes = document.querySelectorAll('.finish');
  const unCompletes = document.querySelectorAll('.tasks');

  if (radio[1].checked) {
    unCompletes.forEach((unComplete) => {
      unComplete.style.display = '';
    });
    completes.forEach((complete) => {
      complete.style.display = 'none';
    });
  } else if (radio[2].checked) {
    unCompletes.forEach((unComplete) => {
      unComplete.style.display = 'none';
    });
    completes.forEach((complete) => {
      complete.style.display = '';
    });
  } else {
    unCompletes.forEach((unComplete) => {
      unComplete.style.display = '';
    });
    completes.forEach((complete) => {
      complete.style.display = '';
    });
  }
}

const showTasks = () => {
  taskTable.innerText = '';
  todos.forEach((todo) => {
    const taskId = taskTable.rows.length;
    //最後の行に新しい行を追加
    const row = taskTable.insertRow(-1);
    row.classList.add('tasks');
  
    //各項目の追加
    const id = row.insertCell(0);
    const comment = row.insertCell(1);
    const status = row.insertCell(2);
    const remove = row.insertCell(3);
  
    id.innerText = taskId;
    comment.innerText = todo.task;
    createStatusButton(todo, status, row);
    createRemoveButton(remove, row);
  });
}

//task追加機能発火
taskTrigger.addEventListener('click', () => {
  const todo = { task: taskValue.value, status: '作業中' }
  todos.push(todo);
  showTasks();
  taskValue.value = '';
});

//タスク表示切り替え発火
const radio = document.getElementsByName('radio_button');
radio.forEach(e => {
  e.addEventListener('change', () => {
    change();
  });
});
