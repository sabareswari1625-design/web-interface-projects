import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Home({
  todos,
  addTodo,
  toggleTodo,
  deleteTodo
}) {

  const completed =
    todos.filter(
      todo => todo.completed
    ).length;

  const progress =
    todos.length === 0
      ? 0
      : Math.round(
          (completed / todos.length) * 100
        );

  return (

    <main className="main-content">

      <section className="welcome">

        <div>

          <span className="eyebrow">
            YOUR PERSONAL WORKSPACE
          </span>

          <h1>
            Make today
            <br />
            <span>count.</span>
          </h1>

          <p>
            Organize your tasks, plan your time,
            and turn your ideas into progress.
          </p>

        </div>

        <div className="welcome-orbit">
          <div className="orbit-inner">
            {progress}%
          </div>
        </div>

      </section>

      <section className="content-card">

        <div className="section-heading">

          <div>
            <span className="section-label">
              QUICK ACTION
            </span>

            <h2>
              Create a task
            </h2>
          </div>

        </div>

        <TodoForm addTodo={addTodo} />

      </section>

      <section className="home-grid">

        <div className="content-card">

          <div className="section-heading">

            <div>
              <span className="section-label">
                YOUR FOCUS
              </span>

              <h2>
                Recent tasks
              </h2>
            </div>

            <span className="task-count">
              {todos.length} tasks
            </span>

          </div>

          <TodoList
            todos={todos.slice(-5).reverse()}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />

        </div>

        <div className="focus-card">

          <span className="section-label">
            TODAY'S FOCUS
          </span>

          <h2>
            Progress
          </h2>

          <div className="big-progress">
            {progress}%
          </div>

          <div className="progress-line">

            <div
              style={{
                width: `${progress}%`
              }}
            />

          </div>

          <p>
            Keep going. Every completed task
            moves you forward.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Home;