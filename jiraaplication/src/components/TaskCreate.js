import {useState} from 'react'
function TaskCreate({onCreate,task,taskFormUpdate,onUpdate}) {


  const [title, setTitle]= useState(task ? task.title : '');
  const [taskDesc, setTaskDesc]= useState(task ? task.taskDesc : '');
  const handleChange=(event)=>{
    setTitle(event.target.value);
  }
  const handleTaskChange=(event)=>{
    setTaskDesc(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
if (taskFormUpdate){
  onUpdate(task.id,title,taskDesc)
} 
else{
  onCreate(title,taskDesc);
}  
    setTitle('');
    setTaskDesc('');
  }
    return (
      <div>{taskFormUpdate ? <div className="taskUpdate">

      <h3>Lütfen Task'ı düzenleyiniz !</h3>
      <form className='taskForm'>

       <label className='taskLabel'> Lütfen başlığı düzenleyiniz !</label>
       <input value={title} onChange={handleChange} className='taskInput'/>
     <label className='taskLabel'> Task'ı düzenleyiniz !</label>
     <textarea  onChange={handleTaskChange} value={taskDesc} className='taskInput' rows={5}/>
     <button className='taskButton updateButton' onClick={handleSubmit}>Düzenle</button>
      </form>
   </div> : <div className="task-create">

<h3>Lütfen Task Ekleyiniz !</h3>
<form className='taskForm'>

 <label className='taskLabel'> Başlık</label>
 <input value={title} onChange={handleChange} className='taskInput'/>
<label className='taskLabel'>Task Giriniz !</label>
<textarea  onChange={handleTaskChange} value={taskDesc} className='taskInput' rows={5}/>
<button className='taskButton' onClick={handleSubmit}>Oluştur</button>
</form>
</div> }</div>
  );
}

export default  TaskCreate;