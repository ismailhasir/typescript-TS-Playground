import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 30,
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
      note: "He is a good player",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
