import CartWidget from "./CartWidget";
import "../styles/NavBar.css";
import Logo from "../../logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to="/">
        <div>
          <img className="nav-brand" src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="navegacion">
        <NavLink
          className={({ isActive }) =>
            isActive ? "claseActive" : "claseInactive"
          }
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "claseActive" : "claseInactive"
          }
          to="/productos/plantas"
        >
          Plantas
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "claseActive" : "claseInactive"
          }
          to="/productos/suculentas"
        >
          Suculentas
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "claseActive" : "claseInactive"
          }
          to="/productos/cactus"
        >
          Cactus
        </NavLink>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
