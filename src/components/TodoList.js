/* eslint-disable no-tabs */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Todo from './Todo';


const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) =>
    	(<div key={todo.id}>
			<Todo {...todo}
				onClick={() => toggleTodo(todo.id)}
			/>
			<Link to={{
				pathname: '/onetask/' + todo.id,
				state:todo,
				onclick:toggleTodo
				  
	}}>MORE---</Link>
		</div>))
		}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
