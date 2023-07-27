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
        <ul>
            {tasks.length ? tasks.map((task) => {
                return (
                    <li key={task.id}>{task.type}, {task.date}</li>
                )
            }): 'no tasks documented'}
        </ul>
        </>
    )
};

export default Tasks;