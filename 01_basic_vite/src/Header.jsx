function Header() {
  return (
    <>
      <nav className="nav">
        <div className="image">
          <div className="profile"></div>
        </div>
        <div className="option_List">
          <a href="#" className="option">
            option
          </a>
          <a href="#" className="option">
            option
          </a>
          <a href="#" className="option">
            option
          </a>
          <a href="#" className="option">
            option
          </a>
        </div>
        <div className="button">
          <button className="login">Login</button>
          <button className="Sign_up">Sign up</button>
        </div>
      </nav>
    </>
  );
}

export default Header;
