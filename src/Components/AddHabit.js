// IMPORTING USESTATE HOOK FROM REACT 

import { useState } from 'react';
import React from 'react'

const AddHabit = ({ onAdding }) => {

    // SETTING MULTIPLE STATES SO CAN BE CHANGED LATER ! 

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false);


    // HANDLING ONSUBMIT EVENT 

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a Habit')
            return
        }
        onAdding({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }


    return (

        // INPUT FORM OF OUR APP 

        <form className='add-habit' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Habit</label>
                <input type="text" placeholder='Add a new Habit' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value='Save Habit' className='btn btn-block' />

            <section className='weekNames'>
                    <ul className='days'>
                        <li>Sunday</li>
                        <li>Monday</li>
                        <li>Tuesday</li>
                        <li>Wednesday</li>
                        <li>Thursday</li>
                        <li>Friday</li>
                        <li>Saturday</li>
                    </ul>

            </section>

        </form>
    )
}

export default AddHabit