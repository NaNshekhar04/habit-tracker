import React from 'react'
import Habit from './Habit'

const Habits = ({habits, onDelete, onSwitch}) => {
  return (
    <div>
    {habits.map((habit)=>(
        <Habit key={habit.id} habit= {habit} onDelete={onDelete} onSwitch = {onSwitch}/>
    ))}
    </div>
  )
}

export default Habits