import { useEffect, useState } from "react";
import axios from "axios";

export const Star = () => {
  const [isStarred, setIsStarred] = useState(() => {
    // Initialize isStarred state based on localStorage or false if not present
    return localStorage.getItem("likedStore") === "true";
  });
  const [stars, setStars] = useState(0);

  const fetchStarsCount = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_TOP_SHOE_DZ_BASE_API}/stars`
      );
      const { stars } = response.data;
      setStars(stars);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStarsCount();
  }, []); // Fetch initial star count only once when component mounts
  // const starCounter
  const updateStarCount = async () => {
    try {
      let newStarCount;

      if (isStarred) {
        // If already isStarred, remove the like

        newStarCount = stars - 1;
        localStorage.setItem("likedStore", "false");
      } else {
        // If not isStarred, add the like

        newStarCount = stars + 1;
        localStorage.setItem("likedStore", "true");
      }

      const response = await axios.put(
        `${import.meta.env.VITE_TOP_SHOE_DZ_BASE_API}/stars`,
        { stars: newStarCount, storeAdmin: import.meta.env.VITE_ADMIN_EMAIL }
      );
      const { updatedStarCount } = response.data;
      setIsStarred(!isStarred);

      setStars(updatedStarCount);
    } catch (error) {
      console.error("Error updating star count:", error);
    }
  };

  return (
    <div className="container bg-slate-100 flex items-center justify-center text-center p-4 rounded-lg w-full md:w-80">
      <p className="mb-4">هل أنت راضٍ بالتعامل معنا؟ أعطنا نجمة</p>
      <span
        className={`star text-purple-600 ${isStarred ? "starred" : "unstarred"} `}
      >
        <span
          onClick={updateStarCount}
          className="star-icon fa fa-star cursor-pointer"
        ></span>
      </span>

      <span className="font-bold"> {stars} </span>
    </div>
  );
};
