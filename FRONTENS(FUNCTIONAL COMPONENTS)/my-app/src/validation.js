import React, { useState } from "react";
const Section = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [confirmpassword, setCp] = useState("");
  const [number, setNu] = useState("");
  const [state1, setS1] = useState("");
  const [perr, setPe] = useState("");
  const [emerr, setEm] = useState("");
  const [cperr, setCpe] = useState("");
  const [numerr, setNume] = useState("");

  const change = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "confirmpassword":
        setCp(event.target.value);
        break;
      case "lastname":
        setLastname(event.target.value);
        break;
      case "number":
        setNu(event.target.value);
        break;
      case "state1":
        setS1(event.target.value);
        break;
      default:
        break;
    }
  };
  const validate = () => {
    let emerr = "";
    let perr = "";
    let numerr = "";
    let cperr = "";
    if (!email.includes("@") || !email.includes(".")) {
      emerr = "error: check email";
      setEm(emerr);
    }

    if (!(password.length === 6)) {
      perr = "error:minimum 6 characters required";
      setPe(perr);
    }
    if (!(number.length === 10)) {
      numerr = "error:enter 10 digits";
      setNume(numerr);
    }
    if (!number.match(/^[0-9]+$/)) {
      numerr = "error:only numbers allowed";
      setNume(numerr);
    }
    if (!(password === confirmpassword)) {
      cperr = "error:not matching with password";
      setCpe(cperr);
    }
    if (emerr || perr || numerr || cperr) {
      return false;
    }
    return true;
  };

  const submit = (event) => {
    event.preventDefault();
    const valid = validate();
    if (valid) {
      console.log(
        name,
        email,
        password,
        confirmpassword,
        state1,
        lastname,
        numerr,
        cperr,
        perr
      );
    }
  };
  return (
    <section>
      <div>
        <br></br>
        <br></br>
        <h1 style={{ fontSize: 50, color: "darkblue", fontFamily: "cursive" }}>
          {" "}
          REGISTRATION FORM{" "}
        </h1>
        <div>
          <br></br>

          <form onSubmit={submit}>
            <div style={{ fontSize: 20, fontFamily: "Serif" }}>
              {" "}
              <b> FIRST NAME :</b>
              <input
                style={{ width: 250 }}
                name="name"
                placeholder="First name"
                value={name}
                onChange={change}
                required
              />
            </div>
            <br></br>
            <br></br>

            <div style={{ fontSize: 20, fontFamily: "Serif" }}>
              {" "}
              <b> LAST NAME : </b>
              <input
                style={{ width: 250 }}
                name="lastname"
                placeholder="Last name"
                value={lastname}
                onChange={change}
                required
              />
            </div>
            <br></br>
            <br></br>

            <div style={{ fontSize: 20, fontFamily: "Serif" }}>
              <b> E-MAIL ID : </b>
              <input
                style={{ width: 250 }}
                name="email"
                type="email"
                placeholder="e-mail Id"
                value={email}
                onChange={change}
                required
              />
              <div style={{ color: "red", fontSize: 20 }}>{emerr}</div>
            </div>
            <br></br>
            <br></br>

            <div style={{ fontSize: 20, fontFamily: "Serif" }}>
              {" "}
              <b> PASSWORD : </b>
              <input
                style={{ width: 250 }}
                name="password"
                type="password"
                placeholder="password(6-digit)"
                value={password}
                onChange={change}
                required
              />
              <div style={{ color: "red", fontSize: 20 }}> {perr}</div>
            </div>
            <br></br>
            <br></br>

            <div style={{ fontSize: 20, fontFamily: "Serif" }}>
              {" "}
              <b> CONFIRM PASSWORD: </b>
              <input
                style={{ width: 250 }}
                name="confirmpassword"
                type="password"
                placeholder="confirm password"
                value={confirmpassword}
                onChange={change}
                required
              />
              <div style={{ fontSize: 20, color: "red" }}> {cperr}</div>
            </div>
            <br></br>
            <br></br>

            <div style={{ fontSize: 20, fontFamily: "Serif" }}>
              {" "}
              <b> MOBILE NUMBER : </b>
              <input
                style={{ width: 250 }}
                name="number"
                placeholder="mobile number"
                value={number}
                onChange={change}
                required
              />
              <div style={{ color: "red", fontSize: 20 }}>{numerr}</div>
            </div>
            <br></br>
            <br></br>

            <div style={{ fontSize: 20, fontFamily: "Serif" }}>
              <b> STATE :</b>
              <select name="state1" value={state1} onChange={change}>
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
                <option value="Pondicherry">Pondicherry</option>
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <button
              style={{
                backgroundColor: "yellow",
                color: "black",
                fontSize: 30,
              }}
              type="submit"
            >
              submit{" "}
            </button>
            <br></br>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section;
