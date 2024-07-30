import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import logo from '/logo.png';

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link className="logo" to="/">
          <img  src={logo} alt="logo"/>
          <span>LAMA AI</span>
        </Link>
        <div className="user">
          User
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
