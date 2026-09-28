function TodoItem({
  todo,
  toggleTodo,
  deleteTodo
}) {

  return (

    <div
      className={
        `task-card ${
          todo.completed
            ? "task-completed"
            : ""
        }`
      }
    >

      <button
        className="task-check"
        onClick={() =>
          toggleTodo(todo.id)
        }
      >
        {todo.completed ? "✓" : ""}
      </button>

      <div className="task-content">

        <h3>
          {todo.text}
        </h3>

        <div className="task-meta">

          {todo.dueDate && (
            <span>
              📅 {todo.dueDate}
            </span>
          )}

          <span
            className={
              `priority ${
                todo.priority.toLowerCase()
              }`
            }
          >
            {todo.priority}
          </span>

        </div>

      </div>

      <button
        className="delete-task"
        onClick={() =>
          deleteTodo(todo.id)
        }
      >
        ×
      </button>

    </div>
  );
}

export default TodoItem;