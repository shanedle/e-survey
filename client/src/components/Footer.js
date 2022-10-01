import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer white">
      <div className="container black-text">
        <div className="row">
          &copy; {new Date().getFullYear()}, Designed and hand-coded by Shane Le
        </div>
      </div>
    </footer>
  );
};

export default Footer;
