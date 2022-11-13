// import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
const Habit = ({ habit, onDelete, onSwitch }) => {
  // const [isChecked, setIsChecked] = useState(false)

  return (

    // SINGLE HABIT COMPONENT !

    <div className='habitsList'>
      <div className={`habit ${habit.reminder ? 'reminder' : ''}`} onDoubleClick={() => onSwitch(habit.id)}>
      
        <h3 className='habit-Heading'>{habit.text}
        
          <div class="toggle">
            <input type="checkbox"/>
            <label></label>
          </div>
          <div class="toggle">
            <input type="checkbox" />
            <label></label>
          </div>
          <div class="toggle">
            <input type="checkbox" />
            <label></label>
          </div>
          <div class="toggle">
            <input type="checkbox" />
            <label></label>
          </div>
          <div class="toggle">
            <input type="checkbox" />
            <label></label>
          </div>
          <div class="toggle">
            <input type="checkbox" />
            <label></label>
          </div>
          <div class="toggle">
            <input type="checkbox" />
            <label></label>
          </div>
          <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(habit.id)} /> </h3>
        <p>{habit.day}</p>
      </div>
    </div>
  )
}

export default Habit