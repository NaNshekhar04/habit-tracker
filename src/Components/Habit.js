import { FaTimes } from 'react-icons/fa'


const Habit = ({ habit, onDelete, onSwitch }) => {

  return (

    // SINGLE HABIT COMPONENT !

    <div className='habitsList'>
      <div className={`habit ${habit.reminder ? 'reminder' : ''}`} onDoubleClick={() => onSwitch(habit.id)}>
        <h3>{habit.text} 
          <div className='dayStatus'>
            <p className='status'><input type="checkbox"/></p>
            <p className='status'><input type="checkbox"/></p>
            <p className='status'><input type="checkbox"/></p>
            <p className='status'><input type="checkbox"/></p>
            <p className='status'><input type="checkbox"/></p>
            <p className='status'><input type="checkbox"/></p>
            <p className='status'><input type="checkbox"/></p>
            
          </div>

         <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(habit.id)} /> </h3>
        <p>{habit.day}</p>
      </div>
    </div>
  )
}

export default Habit