import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { routes } from "../../routes/routes";

const navbarItems = [{ title: "home", address: routes?.home, id: 1 }];

function Navbar() {
  const location = useLocation();
  let navigate = useNavigate();
  const userLoginData = {
    id: 1,
    username: "john_doe",
    name: "john doe",
    password: "password123",
    email: "john.doe@example.com",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/607/607381.png?w=740&t=st=1690883173~exp=1690883773~hmac=322d0cb732da61485e3e15d884e5daae869e93609c101b4f55231bad161e5544",
  };

  useEffect(() => {
    localStorage.setItem("loginUser", JSON.stringify(userLoginData));
  }, []);

  return (
    <div className="w-full h-full bg-white">
      <div className="flex gap-2 h-full justify-start p-2 items-center">
        {navbarItems?.map((item) => (
          <button key={item?.id} onClick={() => navigate(`${item?.address}`)}>
            <div
              className={
                location?.pathname === item?.address
                  ? "font-bold text-primary-main"
                  : "font-normal text-primary-light hover:font-bold hover:text-primary-dark "
              }
            >
              {item?.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
