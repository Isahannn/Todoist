import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    const { todos, onChecked, onDelete, onMouseEnter, onMouseLeave } = this.props;

    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChecked={() => onChecked(todo.id)}
            onDelete={() => onDelete(todo.id)}
            onMouseEnter={() => onMouseEnter(todo.id)}
            onMouseLeave={onMouseLeave}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
