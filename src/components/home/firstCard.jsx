import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function FirstCard({ data }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/post/${data?.id}`)}
      className="col-span-2 relative overflow-hidden bg-cover bg-no-repeat p-12 text-center cursor-pointer"
      style={{
        backgroundImage: `url(${data?.image_url})`,
        height: "288px",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 bottom-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="h-full p-4">
          <div className="flex flex-col h-full items-start justify-end text-white">
            <p className="text-lg font-normal">
              {dayjs(`${data?.createdAt}`).format("MMMM DD, YYYY")}
            </p>
            <h3 className="mb-4 text-2xl font-semibold">{data?.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCard;
