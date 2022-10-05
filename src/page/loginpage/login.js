import React, { Component, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export function TextInput(props) {
  const { type, label, style, id,setText } = props;
  const [isFocused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  let inputClass = "fluid-input";

  if (isFocused) {
    inputClass += " fluid-input--focus";
  } else if (value !== "") {
    inputClass += " fluid-input--open";
  }

  const Focusfield = () => {
    setFocused(!isFocused);
  };
//comment
  return (
    <div className={inputClass} style={style}>
      <div className="fluid-input-holder">
        <input
          className="fluid-input-input"
          type={type}
          id={id}
          onFocus={Focusfield}
          onBlur={Focusfield}
          onChange={(e)=>{setValue(e.target.value); setText(e.target.value); console.log(value);}}
          autoComplete="off"
        />
        <label className="fluid-input-label" id={id}>
          {label}
        </label>
      </div>
    </div>
  );
}

export class Button extends Component {
  render() {
    return (
      <div
        className={`button ${this.props.buttonClass}`}
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </div>
    );
  }
}

function Login() {
  const style = {
    margin: "15px 0",
  };
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const dataSubmit = () => {
    const account = {
      username: username,
      passwordHash:password
    }
    axios
      .post("http://localhost:3001/login", account)
      .then((response) => {
        navigate("/order");
      })
      .catch((error) => {
        alert(error.message)
      });
      
  };
  return (
    <div className="login-container">
      <div className="title">Login</div>
      <TextInput type="text" label="name" id="name" style={style} setText={setUsername}/>
      <TextInput type="password" label="password" id="password" style={style} setText={setPassword} />
      <Button
        buttonText="log in"
        buttonClass="login-button"
        onClick={dataSubmit}
      />
    </div>
  );
}

export default Login;
