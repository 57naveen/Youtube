import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsConatiner from "./commentsSection/CommentsConatiner";
import LiveChat from "./LiveChat/LiveChat";
import SubscribeOption from "./SubscribeOption";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    getChannelData();
  }, []);

  const getChannelData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    const videoId = searchParams.get("v");

    const filtered = json.items.find(
      (item) => item.id === videoId
    );

    setChannelData(filtered);
    console.log(json.items[0]);
  };

  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" py-1 flex flex-col">
      <div className="flex px-5 w-full">
        <div className="">
          <iframe
            width="1100"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <div className="-mt-17">
        <SubscribeOption data={channelData} />
      </div>

      <CommentsConatiner />
    </div>
  );
};

export default WatchPage;
