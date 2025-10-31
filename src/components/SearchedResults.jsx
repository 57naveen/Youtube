import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import VideoCards from "./VideoContainers/VideoCards";

const SearchedResults = () => {
    const { query } = useParams();
  const [videos, setVideos] = useState([]);

   useEffect(() => {
    getSearchResults();
  }, [query,]);

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + query);
    const json = await data.json();
    console.log(json)
    setVideos(json.items || []);
  };


  return (
    <div className="flex flex-wrap px-9">
         {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video?.id}>
          {" "}
          <VideoCards data={video} />{" "}
        </Link>
      ))}
    </div>
  )
}

export default SearchedResults