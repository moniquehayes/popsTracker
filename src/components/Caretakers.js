import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCaretakersAsync, selectCaretakers } from '../store/caretakerSlice';
import { selectAssignments, fetchAssignmentsAsync } from '../store/assignmentSlice';

const Caretakers = () => {
    const dispatch = useDispatch();
    const caretakers = useSelector(selectCaretakers)
    const assignments = useSelector(selectAssignments)
    
    useEffect(() => {
        dispatch(fetchCaretakersAsync());
        dispatch(fetchAssignmentsAsync())
    }, [])

    return (
        <>
        <div>
            <h1>Caretakers</h1>
            <div>
            <ul>
                {caretakers.length ? caretakers.map((person) => {
                    return (
                        <li key={person.id}>{person.name}</li>
                    )
                }) : 'none'}
            </ul>
            <div>
                <h3>Weekend Assignments:</h3>
                    <ul>
                        {assignments.length? assignments.map((weekend) => {
                            console.log(weekend)
                            // to get caretaker name, will have to use a fetch that accesses the id
                            return (
                                <li key={weekend.id}>{weekend.startDate} - {weekend.endDate}</li>
                            )
                        }) : 'none'}
                    </ul>
                <h3>Add New Weekend Assignment: </h3>
            </div>
            </div>
        </div>
        </>
    )
}; 

export default Caretakers;