import React from 'react'
import Habit from './Habit'

const Habits = ({habits}) => {
  return (
    <div>
    {habits.map((habit)=>(
        <Habit key={habit.id} habit= {habit}/>
    ))}
    </div>
  )
}

export default Habits