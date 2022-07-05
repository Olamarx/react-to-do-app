import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li>
            <input type="checkbox" />
            {this.props.todo.title}
        </li>
  )}
}

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoItem;
