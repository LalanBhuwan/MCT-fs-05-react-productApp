import {Link } from "react-router-dom";

const Nav = () => {
  return (

    <div className="nav_container ">
      <nav className="nv">
        <button>
          <Link to={"/home"} className="link">
            Home
          </Link>
        </button>
        <button>
          <Link to={"/product"} className="link">
            Products
          </Link>
        </button>
        <button>
          <Link to={"/user"} className="link">
            Users
          </Link>
        </button>
        <button>
          <Link to={"/contact"} className="link">
            Contact
          </Link>
        </button>
        {/* <Outlet /> */}
      </nav>
    </div>
  );
};
export default Nav;
