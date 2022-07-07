import React, { useState } from "react";
import "./Form.css";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [messageEmail, setMessageEmail] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const validation = () => {
    const emailValidation = () => {
      const regEx =
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!regEx.test(email)) {
        setMessageEmail("It should be a valid email address!");
        console.log("Invalid Email!");
        return false;
      } else if (email == "") {
        setMessageEmail("Please Enter Your Email");
        console.log("emails field is empty");
        return false;
      } else {
        setMessageEmail(" Email is Valid");
        console.log("Email Is Valid");
        return true;
      }
    };

    const PasswordValidation = () => {
      const regEx =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
      if (!regEx.test(password)) {
        setPasswordMessage(
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
        );
        console.log("Invalid Password");
        return false;
      } else if (password == "") {
        setPasswordMessage("Please Enter Your Password");
        console.log("Password's field is empty");
        return false;
      } else {
        setPasswordMessage("Valid Password");
        console.log("valid password");
        return true;
      }
    };
    if (emailValidation() && PasswordValidation()) {
      return true;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleOnChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleOnChange2 = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Email Validation</h1>
        <table>
          <tr>
            <td>
              <label>Email:</label>
            </td>
            <td>
              <input
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={handleOnChange}
              />
            </td>
            <label className="label1"> {messageEmail}</label>
          </tr>
          <tr>
            <td>
              <label>Password:</label>
            </td>
            <td>
              <input
                type="password"
                placeholder="Your Password"
                value={password}
                onChange={handleOnChange2}
              />
            </td>
            <label className="label1"> {passwordMessage}</label>
          </tr>
        </table>

        <button onClick={validation}>Check</button>
      </form>
    </div>
  );
};

export default Form;
