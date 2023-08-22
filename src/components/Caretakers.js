import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCaretakersAsync, selectCaretakers, fetchSingleCaretaker } from '../store/caretakerSlice';
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
                            const caretakerName = caretakers.filter((care) => care.id === weekend.caretakerId);
                            const name = caretakerName[0]
                            return (
                                <li key={weekend.id}>{weekend.startDate} - {weekend.endDate}: {name.name}</li>
                            )
                        }) : 'none'}
                    </ul>
                <h3>Add New Weekend Assignment: </h3>
                <div>
                    <form method='post'>
                        <label>Weekend Start Date (Friday): 
                            <select name='start-month'>
                                <option value='month'>-Month-</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                            </select>
                            <span>-</span>
                            <select name='start-date'>
                                <option value='day'>-Day-</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                                <option value='13'>13</option>
                                <option value='14'>14</option>
                                <option value='15'>15</option>
                                <option value='16'>16</option>
                                <option value='17'>17</option>
                                <option value='18'>18</option>
                                <option value='19'>19</option>
                                <option value='20'>20</option>
                                <option value='21'>21</option>
                                <option value='22'>22</option>
                                <option value='23'>23</option>
                                <option value='24'>24</option>
                                <option value='25'>25</option>
                                <option value='26'>26</option>
                                <option value='27'>27</option>
                                <option value='28'>28</option>
                                <option value='29'>29</option>
                                <option value='30'>30</option>
                                <option value='31'>31</option>
                            </select>
                        </label>
                        <label>Weekend End Date (Sunday): 
                            <select name='end-month'>
                                <option value='month'>-Month-</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                            </select>
                            <span>-</span>
                            <select name='end-date'>
                                <option value='day'>-Day-</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                                <option value='13'>13</option>
                                <option value='14'>14</option>
                                <option value='15'>15</option>
                                <option value='16'>16</option>
                                <option value='17'>17</option>
                                <option value='18'>18</option>
                                <option value='19'>19</option>
                                <option value='20'>20</option>
                                <option value='21'>21</option>
                                <option value='22'>22</option>
                                <option value='23'>23</option>
                                <option value='24'>24</option>
                                <option value='25'>25</option>
                                <option value='26'>26</option>
                                <option value='27'>27</option>
                                <option value='28'>28</option>
                                <option value='29'>29</option>
                                <option value='30'>30</option>
                                <option value='31'>31</option>
                            </select>
                        </label>
                        <label>Caretaker: 
                            <select name='caretaker'> 
                                <option>--select name--</option>
                                <option value='1'>Julie</option>
                                <option value='2'>Michael</option>
                                <option value='3'>Yvette</option>
                                <option value='4'>Adele</option>
                                <option value='5'>Adrienne</option>
                                <option value='6'>Karen</option>
                            </select>
                        </label>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}; 

export default Caretakers;