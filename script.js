'use strict';
const taskTrigger = document.getElementById('task_trigger');
const taskValue = document.getElementById('task_value');
const taskTable = document.getElementById('table');
const todos = [];

const createStatusButton = (todo, status) => {
  const statusButton = document.createElement('button');
  statusButton.innerText = todo.status;
  status.appendChild(statusButton);
  statusButton.addEventListener('click', () => {
    if (statusButton.innerText === '作業中') {
      todo.status = '完了';
      statusButton.innerText = todo.status;
      changeStatus();
      return;
    }
    todo.status = '作業中';
    statusButton.innerText = todo.status;
    changeStatus();
  });
}

const createRemoveButton = (remove, row) => {
  const removeButton = document.createElement('button');
  removeButton.innerText = '削除';
  remove.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    const index = row.rowIndex - 1;
    todos.splice(index, 1);
    changeStatus(); 
  });
}

//タスク表示切り替え
const changeStatus = () => {
  const filterTodos = [];
  if (radio[1].checked) {
    todos.forEach((todo) => {
      if (todo.status === '作業中') {
        filterTodos.push(todo);
      }
    });
    return showTasks(filterTodos);
  } else if (radio[2].checked) {
    todos.forEach((todo) => {
      if (todo.status === '完了') {
        filterTodos.push(todo);
      }
    });
    return showTasks(filterTodos);
  } else {
    todos.forEach((todo) => {
      filterTodos.push(todo);
    });
    return showTasks(filterTodos);
  }
}

const showTasks = (filterTodos) => {
  taskTable.innerText = '';
  filterTodos.forEach((todo) => {
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
    createStatusButton(todo, status, row);
    createRemoveButton(remove, row);
  });
}

//task追加機能発火
taskTrigger.addEventListener('click', () => {
  const todo = { task: taskValue.value, status: '作業中' }
  todos.push(todo);
  changeStatus();
  taskValue.value = '';
});

//タスク表示切り替え発火
const radio = document.getElementsByName('radio_button');
radio.forEach(e => {
  e.addEventListener('change', () => {
    changeStatus();
  });
});
