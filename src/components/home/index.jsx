import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import ItemCard from "./itemCard";
import FirstCard from "./firstCard";
import axios from "axios";

function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 w-full px-60">
        <FirstCard data={data?.[0]} />
        {data?.map((item) => (
          <div
            key={item?.id}
            className="h-full w-full bg-white cursor-pointer"
          >
            <ItemCard data={item} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Home;
