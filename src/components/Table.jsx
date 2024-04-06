import React, { useState, useRef, useEffect } from "react";
import edit from '../assets/edit.svg'
import Delete from '../assets/delete.svg'

const Table = ({ data, deleteTodo, editTodo }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editingItem !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingItem]);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleEdit = (number) => {
    setEditingItem(number);
  };

  const handleSave = (number, newActivityName) => {
    editTodo(number, newActivityName);
    setEditingItem(null);
  };

  const handleKeyPress = (event, number, newActivityName) => {
    if (event.key === "Enter") {
      handleSave(number, newActivityName);
    }
  };

  return (
    <div className="text-center m-7 font-bold text-white">
      <div className="mx-5">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Activity Name</th>
              <th className="px-4 py-2">Finished</th>
              <th className="px-4 py-2">Edit</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.number}</td>
                <td className={`border px-4 py-2 ${checkedItems[index] ? 'line-through decoration-red-500 decoration-4' : ''}`}>
                  {editingItem === item.number ? (
                    <input
                      ref={inputRef}
                      type="text"
                      value={item.activityName}
                      onChange={(e) => editTodo(item.number, e.target.value)}
                      onKeyPress={(e) => handleKeyPress(e, item.number, e.target.value)}
                      className="text-center"
                    />
                  ) : (
                    item.activityName
                  )}
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-700"
                    checked={checkedItems[index] || false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td className="border px-4 py-2">
                  {editingItem === item.number ? (
                    <button onClick={() => handleSave(item.number, item.activityName)}>Save</button>
                  ) : (
                    <img src={edit} className='w-5 h-5 cursor-pointer mx-auto' alt="edit" onClick={() => handleEdit(item.number)} />
                  )}
                </td>
                <td className="border px-4 py-2">
                  <img src={Delete} className='w-5 h-5 cursor-pointer mx-auto' alt="delete" onClick={() => deleteTodo(item.number)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
