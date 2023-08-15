import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ItemCard({ data }) {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${data?.authorId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [data]);

  return (
    <div
      className="h-72 w-full flex flex-col gap-2"
      onClick={() => navigate(`/post/${data.id}`)}
    >
      <div
        className="col-span-2 relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: `url(${data?.image_url})`,
          height: "50%",
        }}
      />
      <div className="flex flex-col h-full items-start justify-between p-4">
        <div className="flex flex-col h-full items-start justify-start">
          <p className="text-sm font-normal">
            {dayjs(`${data?.createdAt}`).format("MMMM DD, YYYY")}
          </p>
          <h3 className="mb-4 text-lg font-semibold">{data?.title}</h3>
        </div>
        <img
          class="w-10 h-10 rounded-full"
          src={user?.avatar}
          alt="user avatar"
        />
      </div>
    </div>
  );
}

export default ItemCard;
