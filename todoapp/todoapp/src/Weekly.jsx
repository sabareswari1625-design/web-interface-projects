import TodoItem from "./TodoItem";

function Weekly({
  todos,
  toggleTodo,
  deleteTodo
}) {

  const today = new Date();

  const weekDays = [];

  for (let i = 0; i < 7; i++) {

    const date = new Date(today);

    date.setDate(
      today.getDate() + i
    );

    const dateString =
      date.toISOString().split("T")[0];

    const tasks =
      todos.filter(
        todo => todo.dueDate === dateString
      );

    weekDays.push({
      date,
      dateString,
      tasks
    });
  }

  return (

    <main className="main-content">

      <div className="page-header">

        <div>

          <span className="section-label">
            NEXT 7 DAYS
          </span>

          <h1>
            Weekly Plan
          </h1>

          <p>
            See what's waiting for you this week.
          </p>

        </div>

      </div>

      <div className="week-grid">

        {weekDays.map(
          ({
            date,
            dateString,
            tasks
          }) => {

            const completed =
              tasks.filter(
                todo => todo.completed
              ).length;

            return (

              <div
                className="day-column"
                key={dateString}
              >

                <div className="day-column-header">

                  <span>
                    {date.toLocaleDateString(
                      "en-US",
                      {
                        weekday: "short"
                      }
                    )}
                  </span>

                  <strong>
                    {date.getDate()}
                  </strong>

                </div>

                <div className="day-task-count">
                  {tasks.length} tasks
                </div>

                <div className="day-tasks">

                  {tasks.length === 0 ? (

                    <div className="no-day-task">
                      —
                    </div>

                  ) : (

                    tasks.map(todo => (

                      <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                      />

                    ))

                  )}

                </div>

                {tasks.length > 0 && (

                  <small>
                    {completed}/{tasks.length}
                    {" "}completed
                  </small>

                )}

              </div>

            );
          }
        )}

      </div>

    </main>
  );
}

export default Weekly;