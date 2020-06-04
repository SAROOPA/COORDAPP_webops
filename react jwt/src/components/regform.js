import React from "react";

import { useFormik } from "formik";

import * as yup from "yup";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      number: "",
      state: "",
    },

    validationSchema: yup.object({
      email: yup.string().email(),
      password: yup.string().length(6, "password should have 6 character"),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "invalid password"),
      number: yup.number().min(10, "invalid number").max(10, "invalid number"),
    }),

    onSubmit: (userData) => {
      axios
        .post("http://localhost:5000/form/reg", userData)
        .then(() => props.history.push("/login"))
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="container m-3">
      <div className="jumbotron">
        <h1 className="font-weight-bold,">REGISTRATION FORM</h1>

        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label>NAME:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              required
            />{" "}
            <label>EMAIL ID:</label>
            <inputs
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
            <label>CONFIRM PASSWORD:</label>
            <input
              className="form-control"
              type="text"
              name="confirmpassword"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
              required
            />
            {formik.errors.confirmpassword ? (
              <div className="text-danger">{formik.errors.confirmpassword}</div>
            ) : null}
            <label>NUMBER:</label>
            <input
              className="form-control"
              type="number"
              name="number"
              onChange={formik.handleChange}
              value={formik.values.number}
              required
            />
            {formik.errors.number ? (
              <div className="text-danger">{formik.errors.number}</div>
            ) : null}
            <label>STATE:</label>
            <select
              className="form-control"
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
              required
            >
              <option value="">------------Select State------------</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadra and Nagar Haveli">
                Dadra and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Orissa">Orissa</option>
              <option value="Pondicherrory">Pondicherry</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttaranchal">Uttaranchal</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary -4">
            SUBMIT
          </button>

          <button
            className="btn btn-primary m-4"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
