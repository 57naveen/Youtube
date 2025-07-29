import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [Suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const handelToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const searchCache = useSelector((store) => store.search);

  //Debouncing
  // - MAke an api call after every key press
  // - But if the differnece between 2 api calls is <200ms
  // - decline the api call

  useEffect(() => {
    const timer = setTimeout(() => {

      //Caching the search query 
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache

    dispatch(
      cacheResults({
        [searchQuery] : json[1]
      })
    )

    // console.log(json);
  };

  return (
    <div className="grid grid-flow-col shadow-lg p-5 ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => handelToggleMenu()}
          className="h-8 cursor-pointer"
          alt="hambuger-Menu"
          src="/image/menu.png"
        />

        <div className="flex px-8">
          <img className="h-8 " alt="youtubelogo" src="/image/youtube.png" />

          <h3 className="mt-1 px-2 font-bold">Youtube</h3>
        </div>
      </div>

      <div className="flex col-span-10 px-50">
        <div className="flex">
          <input
            className=" px-3 p-2 h-8 w-96 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="h-8  border px-3 border-gray-400 rounded-r-full bg-gray-200">
            <img className="h-4" src="/image/loupe.png" />
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed mt-9 bg-white w-[24rem] shadow-lg py-2 px-2 rounded-lg border border-gray-100 z-10">
            <ul>
              {Suggestions.map((result, index) => (
                <li key={index} className="py-2 px-3  hover:bg-gray-100">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" src="/image/avatar.png" />
      </div>  
    </div>
  );
};

export default Head;
