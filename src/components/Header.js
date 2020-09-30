import React from "react";

const Header = () => {
  return (
    <header>
      <div className="nav-top">
        <i className="icons" data-feather="chevron-left"></i>
        <p className="secondary-title"> Title her </p>
        <i className="icons" data-feather="search"></i>
        <div className="header-search hide">
            <input className="header-search__input" type="search"/>
        </div>
    </div>
    </header>
  );
};

export default Header;
