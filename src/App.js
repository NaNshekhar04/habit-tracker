import { useState } from "react";
import Header from "./Components/Header";
import Habits from "./Components/Habits";
import AddHabit from "./Components/AddHabit";

function App() {
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [habits, setHabits] = useState([
    // INITIAL STATE OF OUR HABITS 
    {
      id: 1,
      text: 'Go For a Walk',
      day: 'Oct 5th at 7:00am',
      reminder: true
    },
    {
      id: 2,
      text: 'Going to Gym',
      day: 'Oct 5th at 8:00am',
      reminder: true
    },
    {
      id: 3,
      text: 'Start Studying',
      day: 'Oct 5th at 10:00am',
      reminder: true
    }
  ])


  // ADD HABITS

  const addHabit = (habit) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newHabit = { id, ...habit }
    setHabits([...habits, newHabit]);
  }


  //DELETE HABITS

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  }


  //SWITCHING REMAINDER

  const switchReminder = (id) => {
    setHabits(habits.map((habit) => habit.id === id ? { ...habit, reminder: !habit.reminder } : habit))
  }

  return (
    <div className="container">
      <Header onAdding={() => setShowAddHabit
        (!showAddHabit)} showAdd={showAddHabit} />

      {showAddHabit && <AddHabit onAdding={addHabit} />}

      {habits.length > 0 ? (<Habits habits={habits} onDelete={deleteHabit} onSwitch={switchReminder} />) : ('No Habits to Track !')}
    </div>
  );
}

export default App;
