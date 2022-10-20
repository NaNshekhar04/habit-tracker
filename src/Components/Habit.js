import {FaTimes} from 'react-icons/fa'


const Habit = ({habit}) => {
  return (
    <div className='habit'>
        <h3>{habit.text} <FaTimes style={{color:'red', cursor: 'pointer' }}/> </h3>
        <p>{habit.day}</p>
        </div>
  )
}

export default Habit