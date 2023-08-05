import TaskShow from "./TaskShow";

function TaskList ({tasks,onDelete,onUpdate}) {
    
    return (
    <div className="taskList">
{tasks.map((item,index)=>{
    return (
        <TaskShow task={item} key={index} onDelete={onDelete} onUpdate={onUpdate}/>
    )
})}

    </div>  
    );
}

export default TaskList;