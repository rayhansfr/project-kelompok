import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-[#38b000] text-white mt-4">
      <div className="container mx-auto px-4">
      <ItemsContainer />
      <div
        className="grid items-center h-full"
      >
        <span>© 2023. All About Kerak Telor.</span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;


