import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';
import {v4} from 'uuid';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar React',
      description: 'Estudar React para o projeto de ToDoList',
      isCompleted: false,
    },
    {
        id: 2,
        title: 'Estudar Tailwind',
        description: 'Estudar Tailwind para o projeto de ToDoList',
        isCompleted: false,
    },
    {
        id: 3,
        title: 'Estudar Vite',
        description: 'Estudar Vite para o projeto de ToDoList',
        isCompleted: false,
    }
  ]);

    function onTaskClick(taskId) {
        const newTasks = tasks.map((task) => {
                //preciso atualiar as trarefas
            if (task.id === taskId) {
                return { ...task, isCompleted: !task.isCompleted };
            }
                //nao preciso atualizar a tarefa

            return task;
        });
        setTasks(newTasks);
    }
    function onDeleteTask(taskId) {
        const newTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(newTasks);
    }
    function onAddTask(title, description) {
        const newTask = {
            id: v4(),
            title,
            description,
            isCompleted: false,
        };
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-125 space-y-4">
                <h1 className="text-3xl  text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
                <AddTask  onAddTask={onAddTask}/>
                <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask} />
            </div>  
        </div>
    );
}
export default App;