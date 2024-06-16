import React from 'react'
import './sidebar.css';
import { Users} from "../../dummyData";

import { SlFeed } from "react-icons/sl";
import { BsChatLeftTextFill ,BsQuestionOctagon} from "react-icons/bs";
import { PiVideoFill } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { LuBookMarked } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { MdEvent } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

import CloseFriend from '../closeFriends/CloseFriend';


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidewrapper">
         <ul className="sidebarList">
          
          <li className="sidebarListItem"> <SlFeed className='sidebarIcon'/>
           <span className='sidebarListItemText'>Feed</span>
          </li>

          <li className="sidebarListItem"> <BsChatLeftTextFill className='sidebarIcon'/>
           <span className='sidebarListItemText'>Chat</span>
          </li>

          <li className="sidebarListItem"> <PiVideoFill className='sidebarIcon'/>
           <span className='sidebarListItemText'>Videos</span>
          </li>

          <li className="sidebarListItem"> <GrGroup className='sidebarIcon'/>
           <span className='sidebarListItemText'>Groups</span>
          </li>

          <li className="sidebarListItem"> <LuBookMarked className='sidebarIcon'/>
           <span className='sidebarListItemText'>Bookmarks</span>
          </li>

          <li className="sidebarListItem"> <BsQuestionOctagon className='sidebarIcon'/>
           <span className='sidebarListItemText'>Questions</span>
          </li>

          <li className="sidebarListItem"> <GrUserWorker className='sidebarIcon'/>
           <span className='sidebarListItemText'>Jobs</span>
          </li>

          <li className="sidebarListItem"> <MdEvent className='sidebarIcon'/>
           <span className='sidebarListItemText'>Event</span>
          </li>

          <li className="sidebarListItem"> <FaGraduationCap className='sidebarIcon'/>
           <span className='sidebarListItemText'>Courses</span>
          </li>

         </ul>

         <button className='sidebarButton'> Show more</button>
         <hr className='sidebarHr' />
         <ul className="sidebarFriendList">
          
          {/* <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
            <span className='sidebarFriendName'> Chetan Bendkule</span>
          </li> */}

         {Users.map( (u) => ( <CloseFriend key={u.id} user ={u}/>))}
          
         </ul>
      </div>
    </div>
  )
}

export default Sidebar
