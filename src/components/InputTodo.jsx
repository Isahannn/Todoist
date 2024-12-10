import React from 'react';
import './InputTodo.css'; 

const severityLevels = {
  1: "Срочно",
  2: "Средне",
  3: "Не срочно"
};

const InputTodo = ({ value, description, severity, onValueChange, onDescriptionChange, onSeverityChange, onAdd }) => {
  return (
    <div className="input-todo-container">
      <input
        type="text"
        className="input-todo"
        placeholder="Название задачи"
        value={value}
        onChange={onValueChange}
      />
      <textarea
        className="textarea-todo"
        placeholder="Описание задачи"
        value={description}
        onChange={onDescriptionChange}
      />
      <div className="severity-options">
        {Object.keys(severityLevels).map((level) => (
          <button
            key={level}
            className={`severity-button ${severity === Number(level) ? 'active' : ''}`}
            onClick={() => onSeverityChange(Number(level))} 
          >
            {severityLevels[level]}
          </button>
        ))}
      </div>
      <button className="add-todo-button" onClick={onAdd}>Добавить</button>
    </div>
  );
};

export default InputTodo;
