import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCaretakersAsync, selectCaretakers } from '../store/caretakerSlice';

const Caretakers = () => {
    const dispatch = useDispatch();
    const caretakers = useSelector(selectCaretakers)
    
    useEffect(() => {
        dispatch(fetchCaretakersAsync())
    }, [])

    return (
        <>
        <div>
            <h1>Caretakers</h1>
            <div></div>
            <ul>
                {caretakers.length ? caretakers.map((person) => {
                    return (
                        <li key={person.id}>{person.name}</li>
                    )
                }) : 'none'}
            </ul>
        </div>
        </>
    )
}; 

export default Caretakers;