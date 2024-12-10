
import React from 'react';

 const TodoControls = ({ filterUncompleted, onToggleFilter, onDeleteAll, onGenerate }) => {
  return (
    <div className="button-container">
      <button className="filter-button" onClick={onToggleFilter}>
        {filterUncompleted ? "Показать все задачи" : "Показать невыполненные"}
      </button>
      <button className="delete-all-button" onClick={onDeleteAll}>
        Удалить все задачи
      </button>
      <button className="generate-todo" onClick={onGenerate}>
        Генерация 1000 задач
      </button>
    </div>
  );
};

export default TodoControls;
