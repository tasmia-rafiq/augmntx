import { useState, useEffect } from "react";

const useProfileList = () => {
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch(
          "https://augmntx.com/api/profile_list"
        );
        if (response.ok) {
          const data = await response.json();
          setProfileList(data);
        } else {
          console.error("Error fetching Profiles:", response.statusText);
        }
      } catch (error) {
        console.log("Internal Server Error", error);
      }
    };

    fetchProfiles();
  }, []);

  return profileList;
};

export default useProfileList;
