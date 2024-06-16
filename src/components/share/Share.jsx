import React from 'react'
import './share.css';
import { MdPermMedia } from "react-icons/md";
import { MdLabelImportant } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { BsFillEmojiSmileFill } from "react-icons/bs";

function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
            <input className='shareInput' placeholder="What's in your mind" />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
            <MdPermMedia color="tomato" className='shareIcon'/>
                <span className='shareOptionText'> Photo or video</span>
            </div>

            <div className="shareOptions">
            <MdLabelImportant color="blue" className='shareIcon'/>
                <span className='shareOptionText'> Tag</span>
            </div>

            <div className="shareOptions">
            <ImLocation2 color="green" className='shareIcon'/>
                <span className='shareOptionText'>Locations</span>
            </div>

            <div className="shareOptions">
            <BsFillEmojiSmileFill color="goldenrod" className='shareIcon'/>
                <span className='shareOptionText'> Feelings</span>
            </div>
            <button className="shareButton">Share</button>
        </div>
        
      </div>
    </div>
  )
}

export default Share
