import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table.jsx";

const mockdata = [
  {
    number: 1,
    activityName: "activityName1",
    selected: false
  },
  {
    number: 2,
    activityName: "activityName2",
    selected: false
  },
  {
    number: 3,
    activityName: "activityName2",
    selected: false
  },
];

function App() {
  const [data, setData] = useState([]);
  const [newActivityName, setNewActivityName] = useState("");

  useEffect(() => {
    setData(mockdata);
  }, []);

  const handleData = () => {
    const newData = [...data, { number: data.length + 1, activityName: newActivityName, selected: false }];
    setData(newData);
    setNewActivityName("");
  };

  const toggleLine = (index) => {
    const newData = [...data];
    newData[index].selected = !newData[index].selected;
    setData(newData);
  };

  const deleteTodo = (index) => {
    const newData = data.filter((item, i) => i !== index);
    setData(newData);
  };
  

  return (
    <div>
      <div className="text-center m-7 font-bold text-white">Todo List</div>
      <form onSubmit={(e) => e.preventDefault()} className="flex justify-center mb-4">
        <label htmlFor="addactivity" className="mr-2">Activity Name: </label>
        <input
          type="text"
          name="addactivity"
          value={newActivityName}
          onChange={(e) => setNewActivityName(e.target.value)}
        />
        <button className="mx-2" onClick={handleData}>Add</button>
      </form>
      <Table data={data} toggleLine={toggleLine} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
