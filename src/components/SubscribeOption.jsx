import React from "react";

const SubscribeOption = ({data}) => {

    
    // console.log(data)
  return (
    <div className="">
      <h1 className="font-bold text-xl ml-3">{data?.snippet?.title}</h1>

      <div className="flex ">

        <div className="flex">

        
        <div className="p-2 m-2 flex items-center gap-3">
             <img className="h-8" src="/image/avatar.png" />
          <h2>{data?.snippet?.channelTitle}</h2>
          {/* <h3>1.3k subscribs</h3> */}
        </div>

        <button className="p-3 px-6 m-4 outline-none bg-black text-white rounded-4xl hover:bg-gray-900">
          Subscribe
        </button>

        </div>
        
        <div className="flex">

        

        <div className="flex  m-4  items-center">
          <button className="bg-gray-100 px-4 rounded-l-4xl hover:bg-gray-200 h-10">
            <img className="h-5 px-2" src="/image/like.png" />
          </button>
          <button className="bg-gray-100 px-4 rounded-r-4xl hover:bg-gray-200 h-10">
            <img className="h-5 px-2" src="/image/negative-vote.png" />
          </button>
        </div>

        <div className="flex  items-center">
          <button className="bg-gray-100 rounded-4xl m-1 px-8 h-9 flex items-center gap-3 hover:bg-gray-200 ">
            <span>
              <img className="h-5" src="/image/share.png" />
            </span>
            Share
          </button>
          <button className="bg-gray-100 rounded-4xl m-1 px-8 h-9 flex items-center gap-3 hover:bg-gray-200  ">
            <span>
              <img className="h-5" src="/image/download.png" />
            </span>
            Download
          </button>

          <button className="bg-gray-100 rounded-full m-1 px-2 h-9 flex font-bold  items-center text-1xl hover:bg-gray-200 ">
            <span>
              <img className="h-5" src="/image/dots.png" />
            </span>
          </button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default SubscribeOption;
