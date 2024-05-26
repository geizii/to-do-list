import Task from "./Task";
import React, { useState, useEffect} from "react";

const TaskList = ({tasks, onDeleteTask, onToggleTaskDone  }) => {
    const [hasAddedTask, setHasAddedTask] = useState(false);

    useEffect(() => {
        if (tasks.length > 0) {
            setHasAddedTask(true);
        }
    }, [tasks]);

    if(tasks.length === 0 && hasAddedTask) {
        return <p>Não há tarefas cadastradas !</p>
    }
    return <ul>
        {tasks.map((task) => (
            <Task 
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(task.id)}
            onToggleDone={() => onToggleTaskDone(task.id)}
            />
        ))}
    </ul>
}

export default TaskList;