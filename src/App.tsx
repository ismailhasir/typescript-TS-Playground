import React, { useState } from "react";
import "./App.css";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([]);

  return (
    <div className="App">
      <h1>People Invited to Our Party</h1>
    </div>
  );
}

export default App;
