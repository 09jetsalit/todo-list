import React from 'react';
import ListItem from './ListItem';

const Table = ({ data, toggleLine, deleteTodo }) => {
  return (
    <div>
      <div className="text-center m-7 font-bold text-white">Todo List</div>
      <div className="">
        <table className="table mx-5">
          <thead>
            <tr className="bg-base-200 text-white">
              <th>No.</th>
              <th>Activity Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <ListItem deleteTodo={deleteTodo} key={index} item={item} onClick={() => toggleLine(index)} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
