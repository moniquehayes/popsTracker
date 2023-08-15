import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { fetchTasksAsync, selectTasks, fetchMostRecent } from "../store/taskSlice";
import AddTask from "./AddTask";

const Tasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    useEffect(() => {
        dispatch(fetchTasksAsync())
    }, []);

    // TO FIND MOST RECENT NOW HAVE TO CHANGE: 
    // target the createdAt key that Sequelize creates. 
    const filteredShowers = tasks.filter((task) => task.type === 'shower');
    let mostRecentShower = filteredShowers[0];
        if (filteredShowers.length > 1) {
            for (let i=1; i<filteredShowers.length; i++) {
                const task = filteredShowers[i];
                if (task.createdAt > mostRecentShower.createdAt) {
                    mostRecentShower = task
                }
            }
        }

    const filteredMeals = tasks.filter((task) => task.type === 'meal');
    let mostRecentMeal = filteredMeals[0];
        if (filteredMeals.length > 1) {
            for (let i=1; i<filteredMeals.length; i++) {
                const task = filteredMeals[i];
                if (task.createdAt > mostRecentMeal.createdAt) {
                    mostRecentMeal = task
                }
            }
        }
    
    const filteredExercises = tasks.filter((task) => task.type === 'exercise');
    let mostRecentExercise = filteredExercises[0];
        if (filteredExercises.length > 1) {
            for (let i=1; i<filteredExercises.length; i++) {
                const task = filteredExercises[i];
                if (task.createdAt > mostRecentExercise.createdAt) {
                    mostRecentExercise = task
                }
            }
        }

    return (
        <>
        <h1 className='bg-green-300 border-green-600'>Tasks</h1>
        <div id='task-container'> 
        <div>
        <ul>
            {tasks.length ? tasks.map((task) => {
                return (
                    <li key={task.id}>{task.type}, {task.date}, {task.time}</li>
                )
            }): 'no tasks documented'}
        </ul>
        </div>
        <div>
            <h3>Most Recent</h3>
            <h5>Shower: </h5>
            <p>{mostRecentShower ? `${mostRecentShower.date} at ${mostRecentShower.time}` : 'No showers documented'}</p>
            <h5>Meal: </h5>
            <p>{mostRecentMeal ? `${mostRecentMeal.mealtype} at ${mostRecentMeal.date}` : 'No meals documented'}</p>
            <h5>Exercise: </h5>
            <p>{mostRecentMeal ? mostRecentExercise.date : 'No exercises documented'}</p>
            <h5>Underwear Change: </h5>
        </div>
        </div>
        <AddTask/>
        </>
    )
};

export default Tasks;