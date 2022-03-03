import React from "react";
import TopHeader from "./TopHeader";
import Nav from './Nav'

const Header = () => {
  return (
    <header className="container mx-auto">
      <TopHeader />
      <Nav />
    </header>
  );
};

export default Header;
