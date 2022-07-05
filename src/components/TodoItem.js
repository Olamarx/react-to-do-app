import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li>
            <input type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}
            />
            {this.props.todo.title}
        </li>
  )}
}

TodoItem.propTypes = {
  title: PropTypes.string,
};

export default TodoItem;
