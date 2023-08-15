import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import PostCard from "./postCard";
import axios from "axios";
import { useParams } from "react-router-dom";

// const posts = [
//   {
//     id: 1,
//     postId: 1,
//     userId: 2,
//     content:
//       "Great post! I really enjoyed reading it.Great post! I really enjoyed reading it.Great post! I really enjoyed reading it.Great post! I really enjoyed reading it.",
//     createdAt: "2022-01-02T09:45:00Z",
//     updatedAt: "2022-01-02T09:45:00Z",
//   },
//   {
//     id: 2,
//     postId: 1,
//     userId: 1,
//     content: "Thanks for the feedback!",
//     createdAt: "2022-01-03T14:20:00Z",
//     updatedAt: "2022-01-03T14:20:00Z",
//   },
//   {
//     id: 3,
//     postId: 1,
//     userId: 2,
//     content: "please write more articles.",
//     createdAt: "2022-01-02T09:45:00Z",
//     updatedAt: "2022-01-02T09:45:00Z",
//   },
// ];

function Post() {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts?id=${id}`)
      .then((response) => {
        setPost(response.data?.[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Layout>
      <div className="w-1/2 mx-auto">
        <PostCard post={post} />
      </div>
    </Layout>
  );
}

export default Post;
