import React from "react";
import "./ProfileCard.css";
import { PiChatCircleThin } from "react-icons/pi";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";

const ProfileCard = (props) => {
  const { input, profile } = props;

  return (
    <Link to={`profile/${profile.profile_url}/${profile.unique_id}`}>
      <div className="profile_card">
        <div className="profile_card_top">
          <img src={profile.userPhoto === "https://augmntx.com/assets/img/noimage.jpg" ? profile.userPhoto : `https://augmntx.com/${profile.userPhoto}`} alt="Avatar" />
          <div className="user_info">
            <h3 className="username">
              {`${profile.last_name} ${profile.first_name}`} <span>{profile.unique_id}</span>
            </h3>
            <p className="title">{profile.primary_title.length >=20 ? (`${profile.primary_title.substring(0, 20)}..., ${profile.experience} years`) : `${profile.primary_title}, ${profile.experience} years`}</p>

            <div className="skills">
              {profile.skills.slice(0, 3).map((skill, i) => (
                <Skills skill={skill.length >= 7 ? (`${skill.substring(0, 7)}..`) : skill} key={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="profile_summary">
          <p>
            {profile.bio.length > 135
              ? `${profile.bio.substring(0, 135)} ...`
              : profile.bio}
          </p>
        </div>

        <div className="industries">
          <strong>Industries: </strong>
          {profile.profile_industries.map((industry, index) => (
            <p key={index}>{industry}</p>
          ))}
        </div>

        <div className="profile_links">
          <a href="#">
            <PiChatCircleThin /> Hire {`${profile.last_name} ${profile.first_name}`}
          </a>
          <a href="#/">
            <BsDownload /> Download PDF
          </a>
        </div>
      </div>
    </Link>
  );
};

export default ProfileCard;
