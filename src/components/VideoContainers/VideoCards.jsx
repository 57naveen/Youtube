import React from "react";

const VideoCards = ({ data }) => {
  function timeAgo(dateStr) {
    const now = new Date();
    const past = new Date(dateStr);
    const diff = Math.floor((now - past) / (1000 * 60 * 60 * 24)); // days
    return diff === 0 ? "Today" : diff === 1 ? "1 day ago" : `${diff} days ago`;
  }

  return (
    <div className=" p-3 m-1 w-1xl ">
      <div className="relative w-96 pt-[56.25%] rounded-lg overflow-hidden">
        <img
          alt="thumbnail"
          src={data.snippet?.thumbnails?.high?.url}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-nowrap gap-6">
        {/* <img alt='logo' src={""} /> */}
        <span className="">
          {data.snippet?.localized?.title?.length > 40
            ? data.snippet?.localized?.title.slice(0, 40) + "..."
            : data.snippet?.localized?.title}
        </span>
      </div>
      <h2>{data.snippet?.channelTitle}</h2>
      <div className="flex gap-3">
        <h3>{Math.floor(Number(data.statistics?.viewCount) / 1000)}K views </h3>

        <h3>{timeAgo(data.snippet?.publishedAt)}</h3>
      </div>
    </div>
  );
};

export default VideoCards;
