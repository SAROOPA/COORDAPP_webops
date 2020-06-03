import React, { useEffect, useState } from "react";
import Axios from "axios";
const Home = (props) => {
  const [json, setJson] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/form/getdata", {
      headers: { auth: `${JSON.parse(localStorage.getItem("auth"))}` },
    })
      .then((response) => setJson(response.event))
      .catch((err) => console.log("data not added"));
  }, []);
  return (
    <div>
      <p>{JSON.stringify(json)}</p>
      <button
        onClick={() => {
          localStorage.clear();
          props.history.push("/login");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Home;
