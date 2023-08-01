import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAsync } from '../store/taskSlice';

const AddTask = () => {
    const [type, setType] = useState('');
    const [mealtype, setMealtype] = useState(null);
    const [date, setDate] = useState('');
    const [description, setDescription] = useState(null);

    const dispatch = useDispatch();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await dispatch(addTaskAsync({type, mealtype, date, description}));
        setType('');
        setMealtype(null);
        setDate('');
        setDescription(null);
    }

    return (
        // form to add //
        <div>
            
        </div>
    )
}

export default AddTask;