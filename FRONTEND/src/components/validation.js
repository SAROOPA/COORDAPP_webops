import React, { Component } from "react";
const initialstate = {
  name: "",
  email: "",
  password: "",
  lastname: "",
  confirmpassword: "",
  number: "",
  nerr: "",
  emerr: "",
  perr: "",
  cperr: "",
  numerr: "",
  lnerr: "",
  state1: "",
};

class Section extends Component {
  state = initialstate;
  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  validate = () => {
    let nerr = "";
    let emerr = "";
    let perr = "";
    let numerr = "";
    let cperr = "";
    let lnerr = "";
    if (!this.state.name) {
      nerr = "error:name cant be empty";
    }
    if (!this.state.lastname) {
      lnerr = "error:lastname cant be empty";
    }
    if (!this.state.email) {
      emerr = "error:email cant be empty";
    }

    if (!this.state.email.includes("@")) {
      emerr = "error:include '@'";
    }

    if (!(this.state.password.length == 6)) {
      perr = "error:minimum 6 characters required";
    }
    if (!(this.state.number.length == 10)) {
      numerr = "error:enter 10 digits";
    }
    if (!this.state.number.match(/^[0-9]+$/)) {
      numerr = "error:only numbers allowed";
    }
    if (!(this.state.password == this.state.confirmpassword)) {
      cperr = "error:not matching with password";
    }
    if (nerr || emerr || perr || numerr || cperr || lnerr) {
      this.setState({ nerr, emerr, perr, numerr, cperr, lnerr });
      return false;
    }
    return true;
  };
  submit = (event) => {
    event.preventDefault();
    const valid = this.validate();
    if (valid) {
      console.log(this.state);
      this.setState(initialstate);
    }
  };

  render() {
    return (
      <section>
        <div>
          <br></br>
          <br></br>
          <h1
            style={{
              fontSize: 50,
              color: "darkblue",
              fontFamily: "cursive",
            }}
          >
            REGISTRATION FORM
          </h1>
          <div>
            <br></br>
            <form onSubmit={this.submit}>
              <div
                style={{
                  fontSize: 20,
                  fontFamily: "Serif",
                }}
              >
                {" "}
                <b> FIRST NAME :</b>
                <input
                  style={{
                    width: 250,
                  }}
                  name="name"
                  placeholder="First name"
                  value={this.state.name}
                  onChange={this.change}
                />
                <div
                  style={{
                    color: "red",
                    fontSize: 20,
                  }}
                >
                  {this.state.nerr}
                </div>
              </div>
              <br></br>
              <br></br>

              <div
                style={{
                  fontSize: 20,
                  fontFamily: "Serif",
                }}
              >
                {" "}
                <b> LAST NAME : </b>
                <input
                  style={{
                    width: 250,
                  }}
                  name="lastname"
                  placeholder="Last name"
                  value={this.state.lastname}
                  onChange={this.change}
                />
                <div
                  style={{
                    color: "red",
                    fontSize: 20,
                  }}
                >
                  {this.state.lnerr}
                </div>
              </div>
              <br></br>
              <br></br>

              <div
                style={{
                  fontSize: 20,
                  fontFamily: "Serif",
                }}
              >
                {" "}
                <b> E-MAIL ID : </b>
                <input
                  style={{
                    width: 250,
                  }}
                  name="email"
                  placeholder="e-mail Id"
                  value={this.state.email}
                  onChange={this.change}
                />
                <div
                  style={{
                    color: "red",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  {this.state.emerr}
                </div>
              </div>
              <br></br>
              <br></br>

              <div
                style={{
                  fontSize: 20,
                  fontFamily: "Serif",
                }}
              >
                {" "}
                <b> PASSWORD : </b>
                <input
                  style={{
                    width: 250,
                  }}
                  name="password"
                  type="password"
                  placeholder="password(6-digit)"
                  value={this.state.password}
                  onChange={this.change}
                />
                <div
                  style={{
                    color: "red",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  {this.state.perr}
                </div>
              </div>
              <br></br>
              <br></br>

              <div
                style={{
                  fontSize: 20,
                  fontFamily: "Serif",
                }}
              >
                {" "}
                <b> CONFIRM PASSWORD: </b>
                <input
                  style={{
                    width: 200,
                  }}
                  name="confirmpassword"
                  type="password"
                  placeholder="confirm password"
                  value={this.state.confirmpassword}
                  onChange={this.change}
                />
                <div
                  style={{
                    color: "red",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  {this.state.cperr}
                </div>
              </div>
              <br></br>
              <br></br>

              <div
                style={{
                  fontSize: 20,
                  fontFamily: "Serif",
                }}
              >
                {" "}
                <b> MOBILE NUMBER : </b>
                <input
                  style={{
                    width: 250,
                  }}
                  name="number"
                  placeholder="mobile number"
                  value={this.state.number}
                  onChange={this.change}
                />
                <div
                  style={{
                    color: "red",
                    fontSize: 20,
                  }}
                >
                  {" "}
                  {this.state.numerr}
                </div>
              </div>
              <br></br>
              <br></br>

              <div
                style={{
                  fontSize: 20,
                  fontFamily: "Serif",
                }}
              >
                {" "}
                <b> STATE :</b>
                <select
                  name="state1"
                  value={this.state.state1}
                  onChange={this.change}
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
  }
}
export default Section;
