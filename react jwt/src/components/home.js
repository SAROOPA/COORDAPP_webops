import React, { useEffect, useState } from "react";

import Axios from "axios";

const Home = (props) => {
  const [json, setJson] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/form/getdata", {
      headers: { auth: `${JSON.parse(localStorage.getItem("auth"))}` },
    })
      .then((response) => setJson(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>{JSON.stringify(json)}</p>
      <button
        className="btn btn-primary"
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
