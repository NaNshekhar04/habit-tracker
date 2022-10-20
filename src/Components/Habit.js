import React from 'react'

const Habit = ({habit}) => {
  return (
    <div className='habit'>
        <h3>{habit.text}</h3>
        <p>{habit.day}</p>
        </div>
  )
}

export default Habit