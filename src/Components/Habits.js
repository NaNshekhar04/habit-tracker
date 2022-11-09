import React from 'react'
import Habit from './Habit'

const Habits = ({ habits, onDelete, onSwitch }) => {
  return (

    // MAPPING OVER HABITSLIST AND PASSING FUNCTIONS-DATA VIA PROPS ! 

    <div>
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} onDelete={onDelete} onSwitch={onSwitch} />
      ))}
    </div>
  )
}

export default Habits