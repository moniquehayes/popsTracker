import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAsync } from '../store/taskSlice';

const AddTask = () => {
    const [type, setType] = useState('');
    const [mealtype, setMealtype] = useState();
    const [date, setDate] = useState('');
    const [description, setDescription] = useState();

    const dispatch = useDispatch();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await dispatch(addTaskAsync({type, mealtype, date, description}));
        setType('');
        setMealtype();
        setDate('')
        setDescription();
    }

    return (
        // form to add //
        <div id='add-task'>
            <h3>Add New Task</h3>
            <form id='task-form' onSubmit={handleSubmit}>
                <label htmlFor='type'>Type:</label>
                <input
                    name='type'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                ></input>
                <label htmlFor='mealtype' onSubmit={handleSubmit}>Meal Type (if applicable)</label>
                <input
                    name='mealtype'
                    value={mealtype}
                    onChange={(e) => setMealtype(e.target.value)}
                ></input>
                
        {/** ===== FIGURE OUT FORMAT FOR DATE THAT WILL STILL MAKE THE MOST RECENT FUNCTION WORK! */}
        {/** may need to make it so that if can technically allow null, but then just keep the defaultvalue so that when created that column still populates. And that means it wouldn't need to be passed through the slice */}

                 <label htmlFor='date' onSubmit={handleSubmit}>Date</label> 
                    {/** need to update the input type!! make it date format - could select from calendar or dropdown? */}
                <input
                    name='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                ></input>
                <label htmlFor='description' onSubmit={handleSubmit}>Description</label>
                <input
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></input>
                {/** make note of which are required!! */}
                <button type='submit'>Submit</button>
                <p>Note: date and time will be added when task is submitted</p>

            </form>
        </div>
    )
}

export default AddTask;