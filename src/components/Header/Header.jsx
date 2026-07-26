import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useWatchLater } from "../../context/WatchLaterContext";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const { watchLater } = useWatchLater();

  const handleLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login");
  };

  return (
    <header className="app-header">
      <Link to="/" className="app-logo">
        NXTFLIX
      </Link>

      <nav className="app-nav">
        <Link to="/" className="app-nav-link">
          Home
        </Link>

        <Link to="/watch-later" className="app-nav-link">
          Watch Later
          {watchLater.length > 0 && (
            <span className="watch-later-badge">{watchLater.length}</span>
          )}
        </Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;