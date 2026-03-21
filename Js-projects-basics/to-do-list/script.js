const body = document.body;
const toggleBtn = document.querySelector('.theme-toggle');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');




toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light');
    toggleBtn.textContent = body.classList.contains('light') ? 'light_mode' : 'dark_mode';
});



function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    const task = document.createElement('span');
    task.className = 'task';
    task.textContent = taskText;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const doneBtn = document.createElement('button');
    doneBtn.className = 'material-symbols-outlined';
    doneBtn.textContent = 'check';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'material-symbols-outlined';
    deleteBtn.textContent = 'delete';

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(task);
    li.appendChild(actions);

    taskList.appendChild(li);
    taskInput.value = '';


    doneBtn.addEventListener('click', () => {
        task.classList.toggle('done');
    });


    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
}


addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTask();
});
