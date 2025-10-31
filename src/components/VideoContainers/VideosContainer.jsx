import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

const VideosContainer = () => {
  const getVideos = async ({ pageParam = "" }) => {
    if (pageParam === false) return { items: [] };

    const url =
      pageParam === ""
        ? `${YOUTUBE_VIDEOS_API}&maxResults=20`
        : `${YOUTUBE_VIDEOS_API}&maxResults=10&pageToken=${pageParam}`;

    const data = await fetch(url);
    const json = await data.json();
    // console.log(json.items);
    // setVideos(json.items);
    // console.log("Fetched page token:", json.nextPageToken);
    return json;
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["Youtube-videos"],
    queryFn: getVideos,
    getNextPageParam: (lastPage) => lastPage.nextPageToken ?? false,
  });

  // console.log(data?.pages)

  const { ref, inView } = useInView();

  useEffect(() => {
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <h3>Video is loading....</h3>;
  }

  if (isError) {
    return <h3>Something Went Wrong...{error.message}</h3>;
  }

  return (
    <div className="flex flex-wrap px-9  ">
      {/* {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          {" "}
          <VideoCards data={video} />{" "}
        </Link>
      ))} */}

      {data.pages.map((page) =>
        page.items.map((item) => (
          <Link key={item.id} to={"/watch?v=" + item.id}>
            {" "}
            <VideoCards data={item} />{" "}
          </Link>
        ))
      )}

      <div ref={ref}>{isFetching ? "Loading..." : "No More Data"}</div>

      {!hasNextPage && (
        <p className="w-full text-center py-4 text-gray-500">
          🎉 You’ve reached the end of the list.
        </p>
      )}
    </div>
  );
};

export default VideosContainer;
