import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table.jsx";

const mockdata = [
  {
    number: 1,
    activityName: "activityName1",
  },
  {
    number: 2,
    activityName: "activityName2",
  },
  {
    number: 3,
    activityName: "activityName3",
  },
];

function App() {
  const [data, setData] = useState([]);
  const [newActivityName, setNewActivityName] = useState("");

  useEffect(() => {
    setData(mockdata);
  }, []);

  const handleData = () => {
    const newData = [
      ...data,
      {
        number: data.length > 0 ? data[data.length - 1].number + 1 : 1,
        activityName: newActivityName,
      },
    ];
    setData(newData);
    setNewActivityName("");
  };

  const deleteTodo = (number) => {
    const newData = data.filter((item) => item.number !== number);
    setData(newData.map((item, index) => ({ ...item, number: index + 1 })));
  };

  const editTodo = (number, newActivityName) => {
    const newData = data.map((item) => {
      if (item.number === number) {
        return { ...item, activityName: newActivityName };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <div>
      <div className="text-center m-7 font-bold text-white">
        <h1>Todo List</h1>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center mb-4"
      >
        <label htmlFor="addactivity" className="mr-2 flex items-center">
          Activity Name:{" "}
        </label>
        <input
          type="text"
          name="addactivity"
          value={newActivityName}
          onChange={(e) => setNewActivityName(e.target.value)}
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
        />
        <button className="mx-2" onClick={handleData}>
          Add
        </button>
      </form>
      <Table data={data} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
