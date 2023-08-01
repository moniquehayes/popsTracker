import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { fetchTasksAsync, selectTasks } from "../store/taskSlice";

const Tasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    console.log(tasks)

    useEffect(() => {
        dispatch(fetchTasksAsync())
    }, []);

    return (
        <>
        <h1 className='bg-green-300 border-green-600'>Tasks</h1>
        {/**basically want task list on left, most recent categories on right. */}
        <div id='task-container'> 
        <div>
        <ul>
            {tasks.length ? tasks.map((task) => {
                return (
                    <li key={task.id}>{task.type}, {task.date}</li>
                )
            }): 'no tasks documented'}
        </ul>
        </div>
        <div>
            <h3>Most Recent</h3>
            <h5>Shower: </h5>
            <h5>Meal: </h5>
            <h5>Exercise: </h5>
            <h5>Underwear Change: </h5>
        </div>
        </div>
        </>
    )
};

export default Tasks;