import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      
      {/* This component will return the single comments */}
      <Comment data={comment} />

    {/* if the comment have replies again call the same component and pass that replies comment in porps */}
      {comment.replies?.length > 0 && (
        <div className="ml-6 border-l-2 border-gray-300 pl-4">
          <CommentList comments={comment.replies} />
        </div>
      )}

    </div>
  ));
};

export default  CommentList