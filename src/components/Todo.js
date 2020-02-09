import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({
  onClick,
  done,
  name,
  created,
}) => (
  <>
    <li
      onClick={onClick}
      style={{
        textDecoration: done ? 'line-through' : 'none',
        border: '1px solid grey',
      }}
  >
      {name},   __Date__: {created}
    </li>
  </>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Todo;
