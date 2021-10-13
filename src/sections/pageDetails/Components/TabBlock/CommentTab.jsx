import React, { useState } from "react";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
import CommentModal from "~components/Widgets/CommentModal";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

function CommentTab({ comments, submitComment }) {
  const [visible, show] = useState(false);
  const commentHandler = function (values) {
    console.log(values);
    submitComment({ ...values, comment_id: visible || null }, () => show(false));
  }
  if (comments.loading) return <LoaderSpinner />
  else return (
    <>
      <div className="border-left border-right p-5 bg-white border-bottom br-bl-3 br-br-3">
        {comments && comments.map(({
          name,
          created_at,
          id,
          image_url,
          message,
          comments
        }, index) => <CommentCard
            id={id}
            image={image_url}
            title={name}
            tags={[
              // { text: "Helpul", active: true },
              { text: "Comment", active: true, onClick: (e) => show(parseInt(e.target.getAttribute('context'))) },
              // { text: "Report", active: false },
            ]}
            date={created_at}
            text={message}
            key={"comment-" + index}
            comments={comments}
            onComment={commentHandler}
          />)}
      </div>
      <CommentForm submitHandler={commentHandler} />
      <CommentModal {...{ show, visible, submitHandler: commentHandler }} />
    </>
  )
}

export default CommentTab;