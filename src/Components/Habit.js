import { FaTimes } from 'react-icons/fa'


const Habit = ({ habit, onDelete, onSwitch }) => {
  return (

    // PARTICULAR HABITLIST PASSING DATA AND FUNCTIONS VIA PROPS 

    <div className='habitsList'>
      <div className={`habit ${habit.reminder ? 'reminder' : ''}`} onDoubleClick={() => onSwitch(habit.id)}>
        <h3>{habit.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(habit.id)} /> </h3>
        <p>{habit.day}</p>
      </div>
    </div>
  )
}

export default Habit