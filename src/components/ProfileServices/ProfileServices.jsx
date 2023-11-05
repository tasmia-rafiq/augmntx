import "./ProfileServices.css";

const ProfileServices = ({ icon, title, desc }) => {
  const isEducation = title === "Education";
  const isProjects = title === "Projects";
  const isWorkHistory = title === "Work history";
  const isSoftSkills = title === "Soft skills";
  const isCertificate = title === "Certifications";

  return (
    <div className="profile_services">
      <div className="row">
        <div className="col service_title">
          {icon}
          <p>{title}</p>
        </div>
        <div className={isSoftSkills ? "col service_desc soft_skills" : "col service_desc"}>
          {Array.isArray(desc) ? (
            desc.map((item, index) => (
              <div
                className={
                  isEducation || isProjects || isWorkHistory || isCertificate
                    ? "inner_row flex_col"
                    : "inner_row"
                }
                key={index}
              >
                {isProjects ? (
                  <>
                    <div className="inner_col">
                      <h3 className="project_title">
                        <span>{item.title}</span>
                        {item.url && (
                          <span className="project_url">
                            <a
                              href={item.url}
                              target="_blank"
                              style={{ color: "var(--primary-color)" }}
                            >
                              View project{" "}
                              <i
                                style={{
                                  fontSize: "12px",
                                  position: "relative",
                                  bottom: "4px",
                                }}
                                className="bi bi-box-arrow-up-right"
                              ></i>
                            </a>
                          </span>
                        )}
                      </h3>
                      {item.pro_start && item.pro_end && (
                        <p className="project_duration">{`${item.pro_start} to ${item.pro_end}`}</p>
                      )}
                      <div className="project_details">
                        <h4>Description</h4>
                        <p>{item.description}</p>

                        <h4>Roles and Responsibilites</h4>
                        <p>{item.responsibilities}</p>

                        <p>
                          <strong>Technologies: </strong>
                          {item.technologies}
                        </p>
                        <p>
                          <strong>Industry: </strong> {item.industry}
                        </p>
                      </div>
                    </div>
                  </>
                ) : isWorkHistory ? (
                  <>
                    {item.title && (
                      <div className="inner_col" style={{ lineHeight: "1.7" }}>
                        <p style={{ color: "#343f52" }}>{item.title}</p>
                        <p style={{ color: "#343f52", padding: "2px 0" }}>{item.company}</p>
                        {item.description && (
                          <p>Description: {item.description}</p>
                        )}
                      </div>
                    )}
                  </>
                ) : isSoftSkills ? (
                  <>
                    {item.softskills && (
                      <p className="soft_skills_list">{item.softskills}</p>
                    )}
                  </>
                ) : (
                  <>
                    {item.name && (
                      <div className="inner_col">
                        <p>{item.name}</p>
                      </div>
                    )}
                    {item.experience && (
                      <div className="inner_col" style={isEducation || isCertificate ? {color: "#aab0bc"} : {color: "#60697b"}}>
                        <p>{item.experience}</p>
                      </div>
                    )}
                    {item.i3 && (
                      <div className="inner_col" style={isEducation ? {color: "#aab0bc"} : {color: "#60697b"}}>
                        <p>{item.i3}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))
          ) : (
            <p>{desc}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileServices;
