import React from "react";

import { useFormik } from "formik";

import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

const Reg = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      email: yup.string().email(),
      password: yup.string().length(6, "password should have 6 character"),
    }),

    onSubmit: (userData) => {
      axios
        .post("http://localhost:5000/form/log", userData)
        .then((response) => props.history.push("/home"))
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="container m-3 ">
      <div className="jumbotron">
        <h1 className="font-weight-bold,">LOGIN</h1>

        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>EMAIL ID:</label>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            {formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
            <label>PASSWORD:</label>
            <input
              className="form-control"
              type="text"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
            {formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary m-4">
            Submit
          </button>
          <button
            className="btn btn-primary m-4"
            href="#"
            onClick={() => {
              window.location.href = "/regform";
            }}
          >
            SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reg;
