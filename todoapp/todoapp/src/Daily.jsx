import TodoList from "./TodoList";

function Daily({
  todos,
  toggleTodo,
  deleteTodo
}) {

  const today =
    new Date()
      .toISOString()
      .split("T")[0];

  const todayTasks =
    todos.filter(
      todo => todo.dueDate === today
    );

  const completed =
    todayTasks.filter(
      todo => todo.completed
    ).length;

  return (

    <main className="main-content">

      <div className="page-header">

        <div>

          <span className="section-label">
            TODAY
          </span>

          <h1>
            Daily Plan
          </h1>

          <p>
            Focus on what matters today.
          </p>

        </div>

        <div className="day-badge">
          ☀ Today
        </div>

      </div>

      <div className="daily-banner">

        <div>

          <span>
            TODAY'S PROGRESS
          </span>

          <h2>
            {completed} of {todayTasks.length}
            {" "}tasks completed
          </h2>

        </div>

        <div className="daily-number">
          {todayTasks.length
            ? Math.round(
                (completed /
                  todayTasks.length) *
                  100
              )
            : 0}
          %
        </div>

      </div>

      <div className="content-card">

        <div className="section-heading">

          <div>
            <span className="section-label">
              YOUR DAY
            </span>

            <h2>
              Today's tasks
            </h2>
          </div>

        </div>

        <TodoList
          todos={todayTasks}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

      </div>

    </main>
  );
}

export default Daily;