import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <style>{`
        .sticky-footer {
          position: fixed;
          bottom: 10px;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 1000;
        }

        .sticky-footer .nav-link {
          color: #007bff;
          text-decoration: none;
        }

        .sticky-footer .nav-link:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="sticky-footer">
        <ul className="navbar-nav m-auto my-2 text-center">
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
