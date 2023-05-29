import { Link } from "react-router-dom";


function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    // position: "relative",
    // backgroundColor: "black",
    justifyContent: "space-around",
    border: "3px solid white",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1 className="headerTitle">Simon!</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>PLAY GAME</div>
        </Link>
        <Link to="/leaderboard">
          <div>LEADERBOARD</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;