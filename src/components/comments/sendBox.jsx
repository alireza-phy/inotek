import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

function SendBox({ setSendNewMessage }) {
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const loginUser = JSON.parse(localStorage.getItem("loginUser"));
  const handleMessage = (e) => {
    setMessage(e?.target?.value);
  };
  const handleSendMessage = () => {
    if (message?.length > 0) {
      const newMessage = {
        postId: +id,
        userId: loginUser?.id,
        content: message,
        createdAt: dayjs().toISOString(),
        updatedAt: dayjs().toISOString(),
      };
      axios
        .post(`http://localhost:3000/comments`, newMessage)
        .then((response) => {
          console.log("Item created successfully:", response.data);
          setMessage("");
          setSendNewMessage(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  return (
    <div className="bg-white rounded-lg w-full min-h-[100px] flex items-start p-4 gap-4">
      <img
        class="w-8 h-8 rounded-full"
        src={loginUser?.avatar}
        alt="user avatar"
      />
      <textarea
        onChange={handleMessage}
        value={message}
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Add a comment..."
      />
      <button
        onClick={handleSendMessage}
        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
      >
        send
      </button>
    </div>
  );
}

export default SendBox;