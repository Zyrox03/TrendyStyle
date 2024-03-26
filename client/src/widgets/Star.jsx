import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setStarCounter } from "../toolkit/productSlice";

export const Star = () => {
  const [starred, setStarred] = useState(false);
  const { stars } = useSelector((state) => state.products);


  useEffect(() => {
    // Fetch initial star count from the server
    const isStarred = localStorage.getItem("likedStore");
    if (isStarred === "true") {
      setStarred(true);
    }
  }, []);

  // const starCounter
  const dispatch = useDispatch();
  const updateStarCount = async () => {
    try {

      let newStarCount;
      let isStarred = localStorage.getItem("likedStore");

   

      if (isStarred === "true") {
        // If already starred, remove the like

        newStarCount = stars - 1;
        localStorage.setItem("likedStore", "false");
      } else {
        // If not starred, add the like

        newStarCount = stars + 1;
        localStorage.setItem("likedStore", "true");
      }
      const response = await axios.put(
        `${import.meta.env.VITE_TOP_SHOE_DZ_BASE_API}/stars`,
        { stars: newStarCount, storeAdmin: import.meta.env.VITE_ADMIN_EMAIL }
      );
      const { updatedStarCount } = response.data;
      setStarred(!starred);
      dispatch(setStarCounter(updatedStarCount));
    } catch (error) {
      console.error("Error updating star count:", error);
    }
  };

  return (
    <div className="container bg-slate-100 flex items-center justify-center text-center   p-4 rounded-lg w-80">
      <p className="mb-4">هل أعجبك الموقع؟ أعطنا نجمة</p>
      <span
        className={`star text-purple-600 ${starred ? "starred" : "unstarred"} `}
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
