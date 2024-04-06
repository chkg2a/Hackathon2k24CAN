import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import defaultProfile from "../assets/images/default_profile.png"
import logo from "../assets/images/logo.jpeg"

const Header = () => {
  const {currentUser} = useSelector(state => state.user)
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center mx-auto p-3">
        <Link to="/">
          <img src={logo} className="w-auto h-10"/>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Rainbow</span>
            <span className="text-slate-700">Jobs</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline">
            <Link to="jobs">Find Jobs</Link>
          </li>
          <li className="hidden sm:inline">
            <Link to="addjob">Add Job</Link>
          </li>
          {currentUser ? 
            <Link to="profile"><img className="w-8 h-8 object-cover" src={defaultProfile} alt="Profile Pic"/></Link>
          :
          <li className="hidden sm:inline">
            <Link to="signin">SignIn</Link>
          </li>
          }
        </ul>
      </div>
    </header>
  );
};

export default Header;
