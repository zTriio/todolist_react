import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useEffect, useState } from 'react';
import {v4} from 'uuid';

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  // salvar tarefas e atulizar o localStorage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]); 

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