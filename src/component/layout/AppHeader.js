import { Link } from "react-router-dom";

function AppHeader(props) {
  return (
    <nav
      className="navbar bg-dark navbar-light text-white font-weight-bold 
                    justify-content-between"
    >
      <Link to="/" className="navbar-brand text-white">
        <img src="/logo512.png" alt="" width="30" height="30" className="align-top" /> React
      </Link>
    </nav>
  );
}

export default AppHeader;