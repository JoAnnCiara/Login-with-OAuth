const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Login</span>
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