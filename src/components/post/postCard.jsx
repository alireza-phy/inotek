import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StatusCard from "./statusCard";

function PostCard({ post }) {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${post?.authorId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [post]);

  return (
    <div
      onClick={() => navigate(`/post/${post?.id}/comments`)}
      key={post?.id}
      className="bg-white rounded-lg w-full h-full min-h-[100px] flex p-4 gap-4 cursor-pointer"
    >
      <StatusCard post={post} />
      <div className="flex flex-col gap-4 justify-start items-start">
        <div className="flex gap-4">
          <img
            class="w-6 h-6 rounded-full"
            src={user?.avatar}
            alt="user avatar"
          />
          <span className="text-sm font-semibold">{user?.name}</span>
          <span className="text-sm font-normal">
            {dayjs(`${post?.createdAt}`).format("MMMM DD, YYYY")}
          </span>
        </div>
        <h4 className="text-lg font-semibold text-justify">{post?.title}</h4>
        <span className="text-sm font-normal text-justify">
          {post?.content}
        </span>
      </div>
    </div>
  );
}

export default PostCard;
