const readline = require ('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const task = [];
function addTask(task){
    task.push({description: task, completed: false});
    console.log('Tarea añadida');
    showTask();
}

function deletTask(index){
    if(index >= 0 && index < task.length){
        tasks.splice(index, 1);
        console.log('Tare eliminada');
        showTasks();
    } else{
        console.log('indcice no valido');
    }
}
function completeTask(index){
    if (index >= 0 && index < task.length){
        task[index].completed = true;
        console.log('Tarea completada');
        showTask();       
    } else{
        console.log('indice no valido');
    }
}

function showTask(){
    console.log('Lista de tareas');
    task.forEach((task, index)=>{
        const status = task.completed? 'Completada':'Pendiente';
        console.log('${index}: [${status}] ${task.description}');
    });
}

function executeCommand(command) {
    const [action, ...params] = command.split(' ');
  
    if (action === 'add') {
      addTask(params.join(' '));
    } else if (action === 'delete') {
      deleteTask(parseInt(params[0], 10));
    } else if (action === 'complete') {
      completeTask(parseInt(params[0], 10));
    } else if (action === 'list') {
      showTasks();
    } else if (action === 'exit') {
      rl.close();
    } else {
      console.log('Comando no válido.');
    }
  }
  
  console.log('Gestión de tareas con Node.js');
  console.log('Comandos: add <tarea>, delete <índice>, complete <índice>, list, exit');
  
  rl.on('line', (input) => {
    executeCommand(input);
  });