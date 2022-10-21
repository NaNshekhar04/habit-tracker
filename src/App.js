import { useState } from "react";
import Header from "./Components/Header";
import Habits from "./Components/Habits";

function App() {
  const[habits, setHabits] = useState([
    {
      id:1,
      text: 'Go For a Walk',
      day: 'Oct 5th at 7:00am',
      reminder: true
    },
    {
      id:2,
      text: 'Go To Gym',
      day: 'Oct 5th at 8:00am',
      reminder: true
    },
  {
    id:3,
      text: 'Start Studying',
      day: 'Oct 5th at 10:00am',
      reminder: true
  }
  ])

  //DELETE HABITS

  const deleteHabit = (id) =>{
    setHabits(habits.filter((habit)=> habit.id !== id));
  }


  return (
    <div className="App">
      <Header/>
      {habits.length>0 ? (<Habits habits={habits} onDelete={deleteHabit} />) :  ('No Habits to Track !')}
    </div>
  );
}

export default App;
