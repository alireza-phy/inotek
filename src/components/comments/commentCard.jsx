import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import axios from "axios";

function CommentCard({ comment }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${comment?.userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [comment]);

  return (
    <div
      key={comment?.id}
      className="bg-white rounded-lg w-full min-h-[100px] flex p-4 gap-4"
    >
      <div className="flex flex-col gap-4 justify-start items-start">
        <div className="flex gap-4">
          <img
            class="w-6 h-6 rounded-full"
            src={user?.avatar}
            alt="user avatar"
          />
          <span className="text-sm font-semibold">{user?.name}</span>
          <span className="text-sm font-normal">
            {dayjs(`${comment?.createdAt}`).format("MMMM DD, YYYY")}
          </span>
        </div>
        <span className="text-sm font-normal text-justify">
          {comment?.content}
        </span>
      </div>
    </div>
  );
}

export default CommentCard;
