const readline = require ('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function addTask(taskDescription) {
  return new Promise((resolve) => {
    setTimeout(() => {
      task.push({ description: taskDescription, completed: false });
      console.log('Tarea añadida');
      resolve();
    }, 1000); 
  });
}

function deleteTask(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index >= 0 && index < task.length) {
        tasks.splice(index, 1);
        console.log('Tarea eliminada');
        resolve();
      } else {
        reject('Índice no válido');
      }
    }, 1000); 
  });
}

function completeTask(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index >= 0 && index < task.length) {
        task[index].completed = true;
        console.log('Tarea completada');
        resolve();
      } else {
        reject('Índice no válido');
      }
    }, 1000); 
  });
}


async function executeCommand(command) {
  const [action, ...params] = command.split(' ');

  if (action === 'add')
  {
    try 
      {
        await addTask(params.join(' '));
      } 
      catch (error) 
      {
        console.error(error);
      }
  } 
  else if (action === 'delete') 
  {
    try 
    {
      await deleteTask(parseInt(params[0], 10));
    } catch (error) 
    {
      console.error(error);
    }
  } 
  else if (action === 'complete')
  {
    try
    {
      await completeTask(parseInt(params[0], 10));
    } catch (error)
    {
      console.error(error);
    }
  } 
  else if (action === 'list')
  {
    showTasks();
  } 
  else if (action === 'exit') 
  {
    rl.close();
  }
  else 
  {
    console.log('Comando no válido.');
  }
}

  
  console.log('Gestión de tareas con Node.js');
  console.log('Comandos: add <tarea>, delete <índice>, complete <índice>, list, exit');
  
  rl.on('line', (input) => {
    executeCommand(input);
  });