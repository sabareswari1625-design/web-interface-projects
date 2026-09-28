import TodoItem from "./TodoItem";

function TodoList({
  todos,
  toggleTodo,
  deleteTodo
}) {

  if (todos.length === 0) {

    return (

      <div className="empty-state">

        <div className="empty-symbol">
          ✦
        </div>

        <h3>
          Nothing planned yet
        </h3>

        <p>
          Add a task and start making progress.
        </p>

      </div>

    );
  }

  return (

    <div className="task-list">

      {todos.map(todo => (

        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

      ))}

    </div>
  );
}

export default TodoList;