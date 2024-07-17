import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

const Navbar = ({cart}) => {
  const navigate = useNavigate()
  const [SearchTerm, SetsearchTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${SearchTerm}`)
    // alert("Your Form has been Submitted" + SearchTerm);
    SetsearchTerm("")
  };
  return (
    <>
      <div className="nav_bar">
        <Link to={"/"} className="brand">
          <img src={logo} alt="" />
        </Link>

        <form className="search_bar" onSubmit={submitHandler}>
          <FaSearch />{" "}
          <input
            type="text"
            placeholder="Search product...  "
            value={SearchTerm}
            onChange={(e) => SetsearchTerm(e.target.value)}
          />
        </form>
        <div className="cart mx-3">
          <Link to={"/Card"} type="button" className="btn btn-primary position-relative">
            <FaShoppingCart style={{ fontSize: "1.5 rem" }} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
