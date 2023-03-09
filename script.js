const tasksContainer = document.getElementById('tasksContainer');

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const taskopcontainer = document.createElement('div');
    taskopcontainer.classList.add('taskopcontainer');
    tasksContainer.prepend(taskopcontainer);
    
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    taskopcontainer.prepend(task);

    const remtask = document.createElement('div');
    remtask.classList.add('remtask', 'roundBorder');
    remtask.addEventListener('click', removeTask)
    remtask.textContent = 'X';
    taskopcontainer.append(remtask);

    event.target.reset();
};

const removeTask = event => {
    event.target.parentElement.remove()
}

const changeTaskState = event => {
    event.target.classList.toggle('done');
};