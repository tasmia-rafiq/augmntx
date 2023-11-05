import ProfileSidebar from "../components/ProfileSidebar/ProfileSidebar";
import SearchSkill from "../components/SearchSkill/SearchSkill";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Pagination from "../components/Pagination/Pagination";
import { useRef, useState } from "react";
import useProfileList from "../Hooks/useProfileList";

import i1 from "../assets/star.PNG";
import i2 from "../assets/mail.PNG";
import i3 from "../assets/network.PNG";

const ProfilesPage = () => {
  const profileList = useProfileList();

  const profilesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef();
  const totalProfiles = profileList.length;
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;

  const [inputText, setInputText] = useState("");
  const handleSearch = (term) => {
    setCurrentPage(1);
    setInputText(term);
  };

  const filteredData = profileList.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      const skillsString = el.skills.join(", ");
      return skillsString.toLowerCase().includes(inputText.toLowerCase());
    }
  });

  const currentProfiles = filteredData
    .slice(indexOfFirstProfile, indexOfLastProfile)
    .map((profile, index) => (
      <ProfileCard input={inputText} profile={profile} key={index} />
    ));

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="profile-page" ref={topRef}>
        <div className="container">
          <div className="grid">
            <div className="grid_sidebar">
              <ProfileSidebar />
            </div>
            <div className="grid_right">
              <SearchSkill onSearch={handleSearch} />

              {currentProfiles.length > 0 ? (
                <>
                  <div className="profiles">{currentProfiles}</div>

                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(totalProfiles / profilesPerPage)}
                    onPageChange={handlePageChange}
                  />
                </>
              ) : (
                <div
                  style={{
                    marginTop: "2rem",
                    color: "#60697b",
                    fontWeight: "500",
                    padding: "0 1rem",
                    lineHeight: "1.7",
                  }}
                >
                  <p style={{ paddingBottom: "15px" }}>
                    No result based on your filter
                  </p>
                  <p>
                    Remove filters to get results or{" "}
                    <a
                      style={{ color: "var(--primary-color)" }}
                      href="https://augmntx.com/contact-us"
                      target="_blank"
                    >
                      {" "}
                      Connect with our Expert team
                    </a>{" "}
                    to find the profile for you
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PROFILES */}
      <div className="about_profiles">
        <div className="container">
          <div className="flex">
            <div className="flex_col">
              <img src={i1} alt="Icon" />
              <div>
                <h3>Verified profiles</h3>
                <p>
                  AugmntX vets profiles rigorously & the best candidates are
                  handpicked by our experts.
                </p>
              </div>
            </div>

            <div className="flex_col">
              <img src={i2} alt="Icon" />
              <div>
                <h3>Fast onboarding</h3>
                <p>
                  You'll be able to get an developer working on your project
                  within 2 to 3 business days.
                </p>
              </div>
            </div>

            <div className="flex_col">
              <img src={i3} alt="Icon" />
              <div>
                <h3>Effortless scaling</h3>
                <p>
                  With our large talent pool of dev, you can effortlessly scale
                  your team fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilesPage;
