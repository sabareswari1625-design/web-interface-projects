function Goal(props) {
  return (
    <section className="section">

      <h2>Career Goal</h2>

      <div className="goal-box">
        <p>{props.objective}</p>
      </div>

    </section>
  );
}

export default Goal;