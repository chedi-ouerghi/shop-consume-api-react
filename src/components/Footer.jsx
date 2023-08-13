import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-links">
          View Source on Github
        <span> https://github.com/chedi-ouerghi </span>
        <span> /? </span>
        <span> /! </span>
          Read My Blog
      </p>
      <p>
        &copy; {currentYear} <strong>SHOPY</strong> - Organic Blue Store
      </p>
    </footer>
  );
};

export default Footer;
