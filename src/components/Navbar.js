import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Navbar = (props) => {
  //   static propTypes = {

  //   }
  // constructor(){
  //   super()
  // }

  const handleCountry = (e) => {
    // console.log( e.currentTarget.value);
    //  console.log( document.getElementById('yourcountry').value) ;
    e.preventDefault();
    // let x=document.getElementById('yourcountry').value;
    // props.onChange(x);

    props.changeCountry(document.getElementById("yourcountry").value);
    document.getElementById("yourcountry").value = "";
  };

  // let {switchtext,togglemethod,mode} = props
  // let {country} = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark  bg-dark"  >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              {/* <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
       </div>  */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                id="yourcountry"
                placeholder="Country Code"
                aria-label="Search"
              />
              <input
                className="btn btn-outline-success"
                type="submit"
                onClick={handleCountry}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

