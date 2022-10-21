import React from 'react'
import Habit from './Habit'

const Habits = ({habits, onDelete}) => {
  return (
    <div>
    {habits.map((habit)=>(
        <Habit key={habit.id} habit= {habit} onDelete={onDelete}/>
    ))}
    </div>
  )
}

export default Habits