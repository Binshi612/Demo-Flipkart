import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <div className="navb">
      <div className="log">
        <img
          className="logo1"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt=""
        />
        <a className="text" href="https://www.flipkart.com/plus">
          Explore
          <span className="span">plus</span>
          <img
            className="dot"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
          ></img>
        </a>
      </div>
      {/* <SearchIcon className="icon" /> */}
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <span></span>
      <div className="login">
        <button className="btn">
          Login
          <div className="options">
            <span>New Customer Signup</span>
            <span>Profile</span>
            <span>Orders</span>
            <span>Wishlist</span>
          </div>
        </button>
      </div>
      <span>Become a seller</span>
      <div className="profile">
        <div className="Obj">
          <span>More</span>
          <ArrowDropDownIcon />
        </div>
        <div className="options">
          <span>Notification preference</span>
          <span>Download</span>
        </div>
      </div>{" "}
      <div className="Obj">
        <ShoppingCartIcon></ShoppingCartIcon>
        <span>cart</span>
      </div>
    </div>
  );
}

export default Navbar;
