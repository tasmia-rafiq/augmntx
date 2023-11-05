import {
  BsArrowLeftShort,
  BsCalendarCheck,
  BsCodeSlash,
  BsHourglass,
  BsBriefcase,
  BsNut,
  BsPatchCheck,
} from "react-icons/bs";
import { PiGraduationCap } from "react-icons/pi";
import { IoLanguageSharp } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import Skills from "../components/Skills/Skills";
import CTA from "../components/CTA/CTA";
import ProfileServices from "../components/ProfileServices/ProfileServices";
import useProfileData from "../Hooks/useProfileData";
import useProfileList from "../Hooks/useProfileList";

const SingleProfilePage = () => {
  const profileData = useProfileData();
  const profileList = useProfileList();
  const { unique_id } = useParams();

  // Find the profile in profileList that matches the unique_id
  const profile = profileList.find(
    (profile) => profile.unique_id === unique_id
  );

  const softSkillArray = profileData?.profile_info?.soft_skill
    ? profileData?.profile_info?.soft_skill.split(",")
    : [];

  return (
    <section className="single_profile_page">
      <div className="container">
        <div className="navigation">
          <BsArrowLeftShort className="left_icon" />
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/">Developers</Link>
          <span> / {profileData?.profile_info?.unique_id}</span>
        </div>

        {/* PROFILE DETAILS */}
        <div className="profile grid">
          <div className="profile_img">
            <img
              src={
                profileData?.profile_info?.userPhoto === "uploads/"
                  ? "https://augmntx.com/assets/img/noimage.jpg"
                  : `https://augmntx.com/${profileData?.profile_info?.userPhoto}`
              }
              alt="Profile"
            />
          </div>

          <div className="profile_desc">
            <div className="username">
              <h3>{`${profileData?.profile_info?.last_name ?? ""} ${
                profileData?.profile_info?.first_name ?? ""
              }`}</h3>
              <span className="profile_id">
                {profileData?.profile_info?.unique_id}
              </span>
              <span className="status">Active</span>
            </div>

            {profileData?.profile_info?.primary_title && (
              <div className="title">
                {`${profileData?.profile_info?.primary_title} in ${profileData?.profile_info?.city}`}
              </div>
            )}
            <p className="summary">{profileData?.profile_info?.bio}</p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="skills">
          {profileData.skills
            ? profileData.skills.map((skill, index) => (
                <Skills skill={skill.name} key={index} />
              ))
            : []}
        </div>

        {/* INDUSTRIES */}
        <div className="industries">
          <strong>Industries : &nbsp;</strong>
          {profile
            ? profile.profile_industries.map((industry, index) => (
                <p key={index}>
                  {industry}{" "}
                  {index !== profile.profile_industries.length - 1 ? ", " : ""}
                </p>
              ))
            : []}
        </div>

        {/* ACTION BUTTONS */}
        <CTA
          name={`${profileData?.profile_info?.last_name} ${profileData?.profile_info?.first_name}`}
        />

        {/* SERVICES */}
        <div
          className="services"
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            borderTop: "1px solid #cacaca",
          }}
        >
          <ProfileServices
            icon={<BsCalendarCheck />}
            title={"Availability"}
            desc={profileData?.profile_info?.comittment}
          />

          <ProfileServices
            icon={<BsHourglass />}
            title="Total Experience"
            desc={
              profileData?.profile_info?.experience === "0"
                ? `< 1 years`
                : `${profileData?.profile_info?.experience} years`
            }
          />

          <ProfileServices
            icon={<BsCodeSlash />}
            title={"Technical Skills"}
            desc={
              profileData.skills
                ? profileData.skills.map((skill) => ({
                    name: skill.name,
                    experience:
                      skill.month > 0 && skill.year > 0 ? `${skill.year} Years & ${skill.month} Months` : skill.year === "0" ? `${skill.month} Months` : `${skill.year} Years`,
                  }))
                : []
            }
          />

          <ProfileServices
            icon={<SlSettings />}
            title="Projects"
            desc={profileData?.projects}
          />

          {profileData?.experience?.some((exp) => exp.title !== "") && (
            <ProfileServices
              icon={<BsBriefcase />}
              title="Work history"
              desc={
                profileData?.experience
                  ? profileData?.experience.map((exp) =>
                      exp.start !== "" && exp.end !== ""
                        ? {
                            title: `${exp.title} • ${exp.start} to ${exp.end}`,
                            company: exp.company_name,
                            description: exp.description,
                          }
                        : exp.start !== ""
                        ? {
                            title: `${exp.title} • ${exp.start}`,
                            company: exp.company_name,
                            description: exp.description,
                          }
                        : exp.end !== ""
                        ? {
                            title: `${exp.title} • ${exp.end}`,
                            company: exp.company_name,
                            description: exp.description,
                          }
                        : {
                            title: exp.title,
                            company: exp.company_name,
                            description: exp.description,
                          }
                    )
                  : []
              }
            />
          )}

          {softSkillArray.length > 0 && (
            <ProfileServices
              icon={<BsNut />}
              title={"Soft skills"}
              desc={softSkillArray.map((skill) => ({
                softskills: skill,
              }))}
            />
          )}

          {profileData?.certifications && (
            <ProfileServices
              icon={<BsPatchCheck />}
              title={"Certifications"}
              desc={
                profileData?.certifications
                  ? profileData?.certifications.map((certificate) => ({
                      name:
                        certificate.issuer === ""
                          ? certificate.name
                          : `${certificate.name} by ${certificate.issuer}`,
                      experience: certificate.year,
                    }))
                  : []
              }
            />
          )}

          <ProfileServices
            icon={<PiGraduationCap />}
            title="Education"
            desc={
              profileData?.education
                ? profileData?.education.map((edu) => ({
                    name: `${edu.degree} degree in ${edu.major}`,
                    experience: edu.univ,
                    i3: `${edu.edu_start} to ${edu.edu_end}`,
                  }))
                : []
            }
          />

          <ProfileServices
            icon={<IoLanguageSharp />}
            title="Language"
            desc={`English - ${profileData?.profile_info?.english}`}
          />
        </div>

        <CTA
          name={`${profileData?.profile_info?.last_name} ${profileData?.profile_info?.first_name}`}
        />
      </div>

      {/* JOIN CTA */}
      <div className="join_banner">
        <div className="row">
          <div className="col">
            <h2>
              Hire software
              <br />
              developers today
            </h2>
            <a
              href="https://augmntx.com/hire"
              target="_blank"
              className="btn btn-primary"
            >
              Connect with us
            </a>
          </div>
          <div className="col">
            <h2>
              Join the
              <br />
              developer network
            </h2>
            <a
              href="https://augmntx.com/join"
              target="_blank"
              className="btn btn-primary"
            >
              Join AugmntX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProfilePage;
