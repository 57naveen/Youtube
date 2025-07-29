import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/chatSlice";
import { generateHumanName, generateRandomComment } from "../../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState([]);
  const dispatch = useDispatch();

  const comments = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(
        addMessage({
          name: generateHumanName(),
          message: generateRandomComment(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(),
          dispatch(addMessage({
            name: "Unknown",
            message: liveMessage,
          }))

          setLiveMessage("")
      }}
    >
          <div className="ml-2">
            <h1 className="font-bold text-xl">Live Chat</h1>
          </div>
       

      <div className="ml-2 p-2 h-[500px] w-full border border-slate-300   bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
       
        <div>
          {comments.map((comment, index) => (
            <ChatMessages
              key={index}
              name={comment.name}
              message={comment.message}
            />
          ))}
        </div>
      </div>

      <div className=" shadow-lg mt-1 ml-2 w-full p-4 flex gap-2 rounded-lg">
        <input
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
          className=" bg-gray-200 outline-none p-1 rounded-lg px-2 py-4 w-66 h-7"
        />
        <button className="px-4 rounded-sm items-center bg-green-200 h-7">
          send
        </button>
      </div>
    </form>
  );
};

export default LiveChat;
