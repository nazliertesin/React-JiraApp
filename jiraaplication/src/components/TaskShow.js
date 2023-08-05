import { useState } from "react";
import TaskCreate from "./TaskCreate";

function  TaskShow({task,onDelete,onUpdate}) {
   const [showEdit, setShowEdit] = useState(false)
    const handleDeleteClick=()=>{
 onDelete(task.id)
    };
    const handleEditClick=()=>
    {
      setShowEdit(!showEdit);
    };
    const handleSubmit=(id,updatedTitle,updatedTaskDesc)=>
    {
      setShowEdit(false);
      onUpdate(id,updatedTitle,updatedTaskDesc);
    };
         

    return ( 
      
        <div className="taskShow">
         {showEdit?<TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>:<div>
         <h3 className="taskTitle">Göreviniz</h3>
 <p>{task.title}</p>
 <h3 className="taskTitle">Yapılacaklar</h3>
 <p>{task.taskDesc}</p>
 <div>
    <button className="taskDelete" onClick={handleDeleteClick}>Sil</button>
    <button className="taskButtonUpdate" onClick={handleEditClick}>Güncelle</button>
 </div>
            </div>}

        </div>
     );
}

export default TaskShow ;