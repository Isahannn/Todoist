import React from "react";
import './App.css';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import { generateTodos } from './utils/GenerateTodos';
import SmartSearch from './components/Search/smartSearch';
import SeverityFilter from "./components/Severity/SeverityFilter";
import TodoControls from './components/TodoControls';
import EmptyMessage from './components/EmptyMessage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      description: "",
      severity: 3, 
      todos: [
        {
          id: Date.now(), 
          name: "Сделать дз по веб-проге",
          description: "Надо сделать todoIst на субботу",
          severity: 3,
          checked: true,
          timestamp: new Date().toString(),
        },
      ],
      warning: "",
      hoveredId: null,
      filterUncompleted: false,
      searchQuery: "",
      filterSeverities: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleSeverityChange = (level) => {
    this.setState({ severity: level });
  };

  handleTodoAdd = () => {
    const { value, description, severity, todos } = this.state;
    
    if (!value.trim()) {
      this.setState({ warning: "Название задачи не может быть пустым." });
      return;
    }

    const newTodo = {
      id: Date.now(),
      name: value.trim(),
      severity, 
      description: description.trim(),
      checked: false,
      timestamp: new Date().toString(),
    };

    this.setState(prevState => ({
      todos: [newTodo, ...prevState.todos],
      value: '',
      description: '',
      severity: 3, 
      warning: ''
    }));
  };

  sortTodos(todos) {
    return todos.sort((a, b) => a.checked - b.checked || a.timestamp.localeCompare(b.timestamp));
  }

  handleTodoChecked = (id) => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => 
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
      return { todos: this.sortTodos(updatedTodos) };
    });
  };

  handleTodoDelete = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  handleDeleteAll = () => {
    this.setState({
      todos: [],
      searchQuery: '',
      severity: 3, 
      filterSeverities: [], 
    });
  };

  toggleFilter = () => {
    this.setState(prevState => ({
      filterUncompleted: !prevState.filterUncompleted,
    }));
  };

  handleGenerateTodo = () => {
    const randomTodos = generateTodos(1000);
    this.setState(prevState => {
      const updatedTodos = [...prevState.todos, ...randomTodos];
      return { todos: this.sortTodos(updatedTodos) };
    });
  };

  handleSearchChange = (query) => {
    this.setState({ searchQuery: query });
  };

  handleFilterSeverityChange = (level) => {
    this.setState(prevState => ({
      filterSeverities: prevState.filterSeverities.includes(level)
        ? prevState.filterSeverities.filter(severity => severity !== level)
        : [...prevState.filterSeverities, level],
    }));
  };

  getFilteredTodos = () => {
    const { todos, searchQuery, filterUncompleted, filterSeverities } = this.state;

    const cleanedSearchQuery = searchQuery.replace(/\s+/g, ' ').trim().toLowerCase(); 

    return todos.filter(todo => {
      const cleanedName = todo.name.replace(/\s+/g, ' ').trim().toLowerCase();
      const cleanedDescription = todo.description.replace(/\s+/g, ' ').trim().toLowerCase();

      return (
        (cleanedName.includes(cleanedSearchQuery) || cleanedDescription.includes(cleanedSearchQuery)) &&
        (!filterUncompleted || !todo.checked) &&
        (filterSeverities.length === 0 || filterSeverities.includes(todo.severity))
      );
    });
  };

  render() {
    const { warning, hoveredId } = this.state;
    const filteredTodos = this.getFilteredTodos();
    const isFilteredTodosEmpty = filteredTodos.length === 0;

    return (
      <div className="app-container">
        <h1 className="app-title">Список задач</h1>
        <SmartSearch
          onSearchChange={this.handleSearchChange}
          disabled={this.state.todos.length === 0}
        />
        <SeverityFilter
          filterSeverity={this.state.filterSeverities}
          onFilterChange={this.handleFilterSeverityChange}
        />
        <div className="todo-container">
          {isFilteredTodosEmpty ? (
            <EmptyMessage />
          ) : (
            <TodoList
              todos={filteredTodos}
              onChecked={this.handleTodoChecked}
              onDelete={this.handleTodoDelete}
              hoveredId={hoveredId}
              onMouseEnter={id => this.setState({ hoveredId: id })}
              onMouseLeave={() => this.setState({ hoveredId: null })}
            />
          )}
        </div>
        {warning && <div className="warning">{warning}</div>}
        <div className="add-container">
          <InputTodo
            value={this.state.value}
            description={this.state.description}
            severity={this.state.severity}
            onValueChange={this.handleInputChange}
            onDescriptionChange={this.handleDescriptionChange}
            onSeverityChange={this.handleSeverityChange}
            onAdd={this.handleTodoAdd}
          />
        </div>
        <TodoControls
          filterUncompleted={this.state.filterUncompleted}
          onToggleFilter={this.toggleFilter}
          onDeleteAll={this.handleDeleteAll}
          onGenerate={this.handleGenerateTodo}
        />
      </div>
    );
  }
}

export default App;
