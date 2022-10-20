import React from 'react'

const Habits = ({habits}) => {
  return (
    <div>
    {habits.map((habit)=>(
        <h3 key={habit.id}>{habit.text}</h3>
    ))}
    </div>
  )
}

export default Habits