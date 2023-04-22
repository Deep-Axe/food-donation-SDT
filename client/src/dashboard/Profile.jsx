import React from "react";
import "./Profile.css";
import {FaDonate} from "react-icons/fa"
import {BsCartPlusFill, BsFillTelephoneFill} from "react-icons/bs"
import { FaHandsHelping } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Profile = () => {
  return <div>

<div class="wrapper">
  <div class="profile">
    <div class="profile_img_info">         
             <div class="img">   
             </div>
             <div class="info">
                  <p class="name">Aditya Gaikwad</p>
               <p class="place"><span></span>
                    Australia
                  </p>
             </div>
        </div>
    <div class="profile_skills">
            <div class="skills">
                <p>User Info</p>
                <ul>
                    <li><span class="icon"><MdEmail /></span>
                       <span class="title"> abhyuday7176@gmail.com</span>
                  </li>
                    <li><span class="icon"><BsFillTelephoneFill /></span>
                       <span class="title"> 9140949375</span></li> 
                </ul>
            </div>
            <div class="tags_wrap">
                <span class="tag">Edit Profile</span>
              <span class="tag">Change Username</span>
              <span class="tag">Change Password</span>
              <span class="tag">Add Funds</span>
            </div>
        </div>
  </div>
  <div class="profile_counts">
        <div class="profile_counts_wrap">
           <div class="item">
             <div class="icon"><FaDonate /></div>
             <div class="title">30 Donations</div>
          </div>
        </div>
        <div class="profile_counts_wrap">
           <div class="item">
             <div class="icon"><BsCartPlusFill /></div>
           <div class="title">Donate More</div>
          </div>
        </div>
        <div class="profile_counts_wrap">
           <div class="item">
             <div class="icon"><FaHandsHelping /></div>
           <div class="title">117 People Helped</div>
          </div>
        </div>
    </div>
  
</div>

  </div>;
};

export default Profile;
