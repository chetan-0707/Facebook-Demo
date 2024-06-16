import React from 'react'
import './topbar.css';
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp,IoNotifications } from "react-icons/io5";
import { BsChatLeftTextFill } from "react-icons/bs";

function Topbar() {
  return (
    <div className='topbar-container'>
        <div className="left-side"> 
         <span className="logo">Facebook</span>
        </div>

        <div className="center-side"> 
        <div className="searchbar">
          <FaSearch className='searchicon'/>
          <input  placeholder='Search for friend,post or video' type="text" className="searchInput" />
        </div>
        </div>


        <div className="right-side"> 
          <div className="topbarlinks">
            <span className="topbarlink">Home Page</span>
            <span className="topbarlink">Timeline</span>
          </div>
          <div className="topbaricons">
            <div className="topbariconitem">
              <IoPersonSharp/>
              <span className="tobariconbadge">1</span>
            </div>

            <div className="topbariconitem">
              <BsChatLeftTextFill/>
              <span className="tobariconbadge">1</span>
            </div>

            <div className="topbariconitem">
              <IoNotifications/>
              <span className="tobariconbadge">1</span>
            </div>

            <img src="/assets/person/1.jpeg" alt="" className='topbarimg'/>

          </div>
        
        </div>
        
    </div>
  )
}

export default Topbar
