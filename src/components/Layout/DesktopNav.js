import React from "react";

const DesktopNav = () => {
  return (
    <div>
      <div>
        <span>Phoenix Tech</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <div>{/* <Cart /> */}</div>
    </div>
  );
};

export default DesktopNav;
