import TodoList from "./TodoList";

function Dashboard({
  todos,
  toggleTodo,
  deleteTodo
}) {

  const completed =
    todos.filter(
      todo => todo.completed
    ).length;

  const pending =
    todos.filter(
      todo => !todo.completed
    ).length;

  const highPriority =
    todos.filter(
      todo =>
        todo.priority === "High" &&
        !todo.completed
    ).length;

  const progress =
    todos.length
      ? Math.round(
          (completed / todos.length) * 100
        )
      : 0;

  return (

    <main className="main-content">

      <div className="page-header">

        <div>

          <span className="section-label">
            OVERVIEW
          </span>

          <h1>
            Dashboard
          </h1>

          <p>
            Here's how your productivity is looking.
          </p>

        </div>

        <div className="dashboard-date">
          ✦ Your productivity space
        </div>

      </div>

      <div className="stats-grid">

        <div className="stat-box purple">
          <span>◈</span>
          <strong>{todos.length}</strong>
          <p>Total Tasks</p>
        </div>

        <div className="stat-box blue">
          <span>◷</span>
          <strong>{pending}</strong>
          <p>Pending</p>
        </div>

        <div className="stat-box green">
          <span>✓</span>
          <strong>{completed}</strong>
          <p>Completed</p>
        </div>

        <div className="stat-box orange">
          <span>!</span>
          <strong>{highPriority}</strong>
          <p>High Priority</p>
        </div>

      </div>

      <div className="dashboard-grid">

        <div className="content-card">

          <div className="section-heading">

            <div>
              <span className="section-label">
                ACTIVITY
              </span>

              <h2>
                Your progress
              </h2>
            </div>

            <strong className="percentage">
              {progress}%
            </strong>

          </div>

          <div className="large-progress">

            <div
              style={{
                width: `${progress}%`
              }}
            />

          </div>

          <div className="progress-info">

            <span>
              {completed} completed
            </span>

            <span>
              {pending} remaining
            </span>

          </div>

        </div>

        <div className="quote-card">

          <div className="quote-mark">
            “
          </div>

          <p>
            Small steps every day create
            remarkable results.
          </p>

          <span>
            — Your future self
          </span>

        </div>

      </div>

      <div className="content-card">

        <div className="section-heading">

          <div>
            <span className="section-label">
              ALL ACTIVITY
            </span>

            <h2>
              Task overview
            </h2>
          </div>

        </div>

        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

      </div>

    </main>
  );
}

export default Dashboard;