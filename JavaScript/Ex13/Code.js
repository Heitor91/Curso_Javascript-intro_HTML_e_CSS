function meuEscopo (){
    //Scope Variables------------------------------------------
    const inputTask = document.querySelector('.input-task');
    const pushTask = document.querySelector('.push');
    const task = document.querySelector('.tasks');


    //Functions -----------------------------------------------
    function newTask(taskText){
        const li = document.createElement('li');
        li.innerText = taskText;
        task.appendChild(li);
        clearInput();
        newClearButton(li);
        saveTasks();
    }

    function clearInput(){
        inputTask.value = '';
        inputTask.focus();
    }

    function newClearButton(li){
        li.innerText += ' ';
        const clearButton = document.createElement('button');
        clearButton.innerHTML = 'Apagar';
        clearButton.setAttribute('class', 'clear');
        li.appendChild(clearButton);
    }

    function saveTasks(){
        const liTasks = task.querySelectorAll('li')
        const taskList = [];
        for(let tasks of liTasks){
            let taskText  = tasks.innerText;
            taskText = taskText.replace('Apagar', '').trim();
            taskList.push(taskText);
        }
        const jsonTasks = JSON.stringify(taskList);
        localStorage.setItem('tasks', jsonTasks);
    }

    function addSavedTask(){
        const tasks = localStorage.getItem('tasks');
        const taskList = JSON.parse(tasks);
        for(let task of taskList){
            newTask(task);
        }
    }

    //Event Listeners------------------------------------------

    pushTask.addEventListener('click', function(e){
        if(!inputTask.value) return;
        newTask(inputTask.value);
    })

    inputTask.addEventListener('keypress', function(e){
        if(e.keyCode === 13){
            if(!inputTask.value) return;
            newTask(inputTask.value);
        }
    });

    document.addEventListener('click', function(e){
        const el = e.target;
        if(el.classList.contains('clear')){
             el.parentElement.remove();
             saveTasks();
        }
    });

    //Call Functions --------------------------------------------
    addSavedTask();
}

meuEscopo();