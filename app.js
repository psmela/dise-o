
let tasks = [];

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `
      <span>${task}</span>
      <div>
        <button type="button" class="btn btn-warning btn-sm mr-2" onclick="completeTask(${index})">Completar</button>
        <button type="button" class="btn btn-danger btn-sm mr-2" onclick="deleteTask(${index})">Eliminar</button>
        <button type="button" class="btn btn-secondary btn-sm" onclick="editTask(${index})">Editar</button>
      </div>
    `;
    taskList.appendChild(listItem);
  });
}

//Agregar una tarea nueva
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push(taskText);
    renderTasks();
    taskInput.value = '';
  }
}

// norrar una tarea
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

//Tarea completada
function completeTask(index) {

  deleteTask(index);
}

// Editar una tarea
function editTask(index) {
  const newTaskText = prompt('Editar tarea:', tasks[index]);
  if (newTaskText !== null) {
    tasks[index] = newTaskText.trim();
    renderTasks();
  }
}

//Agregar una tarea
document.getElementById('addTaskBtn').addEventListener('click', addTask);


renderTasks();
console.log