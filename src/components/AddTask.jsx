import { useState } from "react";

function AddTask(onAddTask) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input onChange={(event) => setTitle(event.target.value)} value={title} type="text" placeholder="Digite o título da tarefa" className=" border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"/>
      <input onChange={(event) => setDescription(event.target.value)} value= {description} type="text" placeholder="Digite a descrição da tarefa" className=" border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"/>
      <button onClick={() => { 
        if (!title.trim || !description.trim) {
            return alert("Por favor, preencha todos os campos");
        }
        onAddTask(title,description);
        setTitle(``);
        setDescription(``)
      }} 
      className="bg-slate-500 text-white px-4 py-2 rounded=md font-medium">Adicionar Tarefa</button>
    </div>
  );
}
export default AddTask;