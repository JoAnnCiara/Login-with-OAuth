import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">
          <Link className="link" to="/">The Florida Tennis Club</Link></span>
        <ul className="list">
            <li className="listItem">
                <img 
                  src="janedoe.jpg" 
                  alt="" 
                  className="avatar"
                />
            </li>
            <li className="listItem">Jane Doe</li>
            <li className="listItem">Logout</li>
        </ul>
    </div>
  );
};

export default Navbar;