import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProfileData = () => {
  const [profileData, setProfileData] = useState([]);
  const { unique_id } = useParams();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          `https://augmntx.com/api/profile/${unique_id}`
        );
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        } else {
          console.error("Error fetching Profile Data:", response.statusText);
        }
      } catch (error) {
        console.log("Internal Server Error", error);
      }
    };

    fetchProfileData();
  }, []);

  return profileData;
};

export default useProfileData;
