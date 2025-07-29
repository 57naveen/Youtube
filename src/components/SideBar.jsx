import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
      {isMenuOpen && (
        <div className="shadow-lg w-42 ">
          <Link to={"/"}>
            <h1 className="font-medium px-5 pt-4 flex gap-4  text-sm hover:bg-gray-200 py-3">
              <span>
                <img className="h-6" src="/image/home.png" />
              </span>
              Home
            </h1>
          </Link>
          <h1 className=" font-medium px-5 pt-4 flex gap-4  text-sm hover:bg-gray-200 py-3">
            {" "}
            <span>
              <img className="h-6" src="/image/ui-element.png" />
            </span>
            Shorts
          </h1>
          <h1 className="font-medium  px-5 pt-4 flex gap-4 text-sm hover:bg-gray-200 py-3">
            {" "}
            <span>
              <img className="h-6" src="/image/subscribe.png" />
            </span>
            Subscriptions
          </h1>
          <p className="border border-b-white opacity-20 w-35 ml-3 mt-3 "></p>
          <h1 className=" font-medium px-5 pt-4 flex gap-4  text-sm hover:bg-gray-200 py-3 ">
            <span>
              <img className="h-6" src="/image/history.png" />
            </span>
            History
          </h1>
          <h1 className=" font-medium px-5 pt-4 flex gap-4  text-sm hover:bg-gray-200 py-3 ">
            <span>
              <img className="h-6" src="/image/playlist.png" />
            </span>
            Playlists
          </h1>
          <h1 className=" font-medium px-5 pt-4 flex gap-4  text-sm hover:bg-gray-200 py-3">
            <span>
              <img className="h-6" src="/image/youtube (1).png" />
            </span>
            Your videos
          </h1>
          <h1 className=" font-medium px-5 pt-4 flex gap-4  text-sm hover:bg-gray-200 py-3 ">
            <span>
              <img className="h-6" src="/image/online-learning.png" />
            </span>
            Your Courses
          </h1>
          <h1 className=" font-medium px-5 pt-4 flex gap-4  text-sm  hover:bg-gray-200 py-3">
            <span>
              <img className="h-6" src="/image/clock.png" />
            </span>{" "}
            Watch later
          </h1>
          <h1 className=" font-medium px-5 pt-4 flex gap-4  text-sm hover:bg-gray-200 py-3">
            <span>
              <img className="h-6" src="/image/video.png" />
            </span>
            Liked videos
          </h1>
          <h1 className=" font-medium px-5 pt-4 flex gap-4  text-sm hover:bg-gray-200 py-3">
            <span>
              <img className="h-6" src="/image/video-editing.png" />
            </span>
            Your clips
          </h1>
          <p className="border border-b-white opacity-20 w-35 ml-3 mt-3  "></p>
        </div>
      )}
    </>
  );
};

export default SideBar;
