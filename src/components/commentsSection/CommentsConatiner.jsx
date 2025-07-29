import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";

const commentsData = [
  {
    id: 1,
    name: "Naveen Kishore",
    text: "This video was super helpful, thanks!",
    timestamp: "2 hours ago",
    likes: 12,
    replies: [
      {
        id: 2,
        name: "Raj Singh",
        text: "Agreed! I learned a lot.",
        timestamp: "1 hour ago",
        likes: 4,
        replies: [],
      },
      {
        id: 3,
        name: "Anjali Sharma",
        text: "Could you explain more about the last part?",
        timestamp: "45 minutes ago",
        likes: 2,
        replies: [
          {
            id: 4,
            name: "Naveen Kishore",
            text: "Sure! I’ll add a reply with details.",
            timestamp: "30 minutes ago",
            likes: 1,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Amit Verma",
    text: "Time stamps please!",
    timestamp: "3 hours ago",
    likes: 6,
    replies: [],
  },
  {
    id: 6,
    name: "Sneha Mehta",
    text: "Amazing content 🔥",
    timestamp: "4 hours ago",
    likes: 9,
    replies: [
      {
        id: 7,
        name: "Rahul",
        text: "Totally agree!",
        timestamp: "3 hours ago",
        likes: 2,
        replies: [],
      },
    ],
  },
];





const CommentsContainer = () => {
  return (
    <div className="m-5 p-5 mb-20 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};


export default CommentsContainer;
