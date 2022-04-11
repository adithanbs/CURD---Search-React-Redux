import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
      <>
    <div className="col-md-12 bg-primary py-2">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid">
    <h1 class="navbar-brand" >Employee List</h1>
    </div>
    </nav>
      {/* <nav className="navbar bg-dark navbar-dark">
        <Link to="/" className="navbar-brand ms-5">
          React Redux Contact Book
        </Link>
      </nav> */}
    </div>
      </>
    );
};

export default Header;