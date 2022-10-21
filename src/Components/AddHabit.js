import React from 'react'

const AddHabit = () => {
  return (
    <form className='add-habit'>
        <div className='form-control'>
            <label>Habit</label>
            <input type="text" placeholder='Add a new Habit' />
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type="text" placeholder='Add Day and Time' />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" />
        </div>

        <input type="submit" value='Save Habit' className='btn btn-block'/>

    </form>
  )
}

export default AddHabit