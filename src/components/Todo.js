import React from 'react';

export default function Todo(props) {
  const { todo } = props;

  if(todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}