import React from 'react';
import edit from '../assets/edit.svg'
import Delete from '../assets/delete.svg'

const ListItem = ({ item, onClick, deleteTodo }) => {
  const textDecoration = item.selected ? 'line-through' : 'none';

  return (
    <tr onClick={onClick} style={{textDecoration: textDecoration}}>
      <th>{item.number}</th>
      <td>{item.activityName}</td>
      <td><img src={edit} className='w-5 h-5' alt="edit" onClick={() => deleteTodo(item.number)}/></td>
      <td><img src={Delete} className='w-5 h-5 align-middle' alt="edit" /></td>
    </tr>
  );
};

export default ListItem;
