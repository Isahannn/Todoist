import React from "react";
import './todoItem.css';
import { getSeverityLabel } from '../utils/GenerateTodos';  

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      held: false,
      showDeleteMenu: false,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.todo.checked !== this.props.todo.checked) {
      console.log(`Todo ${this.props.todo.name} checked state changed.`);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.todo.checked !== this.props.todo.checked ||
      nextProps.todo.name !== this.props.todo.name ||
      nextState.showDeleteMenu !== this.state.showDeleteMenu
    );
  }

  handleMouseDown = () => {
    if (window.innerWidth < 768) {
      this.setState({ held: true });
      this.timer = setTimeout(() => {
        this.setState({ showDeleteMenu: true });
      }, 200);
    }
  };

  handleMouseUp = () => {
    if (window.innerWidth < 768) {
      this.setState({ held: false });
      clearTimeout(this.timer);
    }
  };

  handleMouseLeave = () => {
    this.setState({ held: false, showDeleteMenu: false });
    clearTimeout(this.timer);
  };

  handleDelete = () => {
    const { onDelete, todo } = this.props;
    onDelete(todo.id);
    this.setState({ showDeleteMenu: false });
  };

  handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      this.setState({ showDeleteMenu: true });
    }
  };

  handleCheckboxChange = () => {
    this.props.onChecked(this.props.todo.id);
  };

  render() {
    const { todo } = this.props;
    const { showDeleteMenu } = this.state;

    console.log(`todo ${todo.name} renders`);

    return (
      <div
        className="todo-item"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        onMouseEnter={this.handleMouseEnter}
        onTouchStart={this.handleMouseDown}
        onTouchEnd={this.handleMouseUp}
      >
        <div className="todo-content">
          <input
            type="checkbox"
            className="checkbox"
            checked={todo.checked}
            onChange={this.handleCheckboxChange}
          />
          <div className="todo-text">
            <span className={`todo-name ${todo.checked ? 'text-checked' : ''}`}>
              {todo.name}
            </span>
            <div className="todo-description">{todo.description}</div>
            <span className={`todo-severity ${todo.severity}`}>
              {getSeverityLabel(todo.severity)} 
            </span>
          </div>
          <div className="timestamp">{new Date(todo.timestamp).toLocaleString()}</div>
        </div>
        {showDeleteMenu && (
          <div className="delete-popup">
            <button className="delete-button" onClick={this.handleDelete}>
              ❌
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default TodoItem;
