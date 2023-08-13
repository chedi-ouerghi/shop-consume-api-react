import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="wrapper">
        <div className="auth-brand">
          <Link to="/">
            <img
              className="logo"
               id="logoSHOP"
              src="https://png.pngtree.com/template/20210428/ourlarge/pngtree-online-shop-logo-template-image_517862.jpg"
              alt="Shop"
            />
          </Link>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
