import React, { useState } from "react";
import axios from "axios";

function StatusCard({ post }) {
  const [postData, setPostData] = useState(post);

  const handleStatus = (e, status) => {
    e.stopPropagation();
    const newData = {
      ...postData,
      [`${status}`]: +postData?.[`${status}`] + 1,
    };
    axios
      .patch(`http://localhost:3000/posts/${post?.id}`, newData)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="m-2 rounded-lg bg-slate-200 flex flex-col justify-between items-center h-32">
      <button
        className="cursor-pointer p-4"
        onClick={(e) => handleStatus(e, "likes")}
      >
        +
      </button>
      <p>{+postData?.likes - +postData.dislikes}</p>
      <button
        className="cursor-pointer p-4"
        onClick={(e) => handleStatus(e, "dislikes")}
      >
        -
      </button>
    </div>
  );
}

export default StatusCard;
