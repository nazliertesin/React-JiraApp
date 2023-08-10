import './App.css';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';
import { useState,useEffect } from 'react';
import axios from 'axios';


function App() {
  const [tasks, setTasks] = useState([])
  const createTask=async (title,taskDesc)=>
  {
  
  const response= await axios.post('http://localhost:3004/tasks',{title,taskDesc});
  console.log(response);
  const createdTasks=[
    ...tasks,
   response.data
];
setTasks(createdTasks);
  };

  const fetchTask= async () =>{
    const response= await axios.get('http://localhost:3004/tasks');
    debugger;
    setTasks(response.data);
  }

  useEffect(() => {
    fetchTask();
  },[]);
  
const deleteTaskById= async (id)=>{
  const response= await axios.delete(`http://localhost:3004/tasks/${id}`);
 const afterDeletingTasks=tasks.filter((task)=>{
  return task.id!==id;
 });
 setTasks(afterDeletingTasks);
};
const editTaskById= async(id,updatedTitle,updatedTaskDesc)=>{
  const response= await axios.put(`http://localhost:3004/tasks/${id}`,{title:updatedTitle,taskDesc:updatedTaskDesc});
  const updatedTasks=tasks.map((task)=>{
    if(task.id===id){
      return {id:id,title:updatedTitle,taskDesc:updatedTaskDesc}
    }
return task;
  });
  setTasks(updatedTasks);
 };


  return (
    <div className="App">
        <TaskCreate onCreate={createTask}/>
       <h1>Görevler</h1>
       <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
   
    </div>
  );
}

export default App;
