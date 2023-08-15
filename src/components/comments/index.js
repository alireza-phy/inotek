import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import CommentCard from "./commentCard";
import SendBox from "./sendBox";
import axios from "axios";
import { useParams } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState([]);
  const [sendNewMessage, setSendNewMessage] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (sendNewMessage) {
      axios
        .get(`http://localhost:3000/comments?postId=${id}`)
        .then((response) => {
          setComments(response.data);
          setSendNewMessage(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [sendNewMessage]);

  return (
    <Layout>
      <div className="flex flex-col gap-4 w-1/2 mx-auto">
        {comments?.map((item) => (
          <CommentCard comment={item} />
        ))}
        <SendBox setSendNewMessage={setSendNewMessage} />
      </div>
    </Layout>
  );
}

export default Comments;
