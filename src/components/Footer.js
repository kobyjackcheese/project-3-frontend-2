import { Link } from "react-router-dom"

const Footer = (props) => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid white",
    padding: "8px",
    width: "90%",
    margin: "auto",
    position: "absolute",
    bottom: 30,
  };
  return(
    <header>
  <nav style={navStyle}>
    <Link to="https://linkedin.com/in/koby-rape">
      <div>Check Out My Linkedin</div>
    </Link>
    <Link to="https://github.com/kobyjackcheese">
      <div>Check Out My GitHub</div>
    </Link>
  </nav>
</header>
  )
  }
  
  export default Footer