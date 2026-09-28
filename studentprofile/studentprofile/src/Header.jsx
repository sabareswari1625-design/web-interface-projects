function Header(props) {
  return (
    <header className="header">
      <div className="header-icon">💻</div>

      <h1>{props.title}</h1>

      <p>{props.subtitle}</p>
    </header>
  );
}

export default Header;