import React from 'react';

const SingleTodo = (props) => {
  const loc = props[0].location;
  return (

     <li
        onClick={loc.onclick}
        style={{
        textDecoration: loc.state.done ? 'line-through' : 'none'
        }}
    >
    {loc.state.name}, __data__ {loc.state.created}
    </li>
)}


export default SingleTodo;
