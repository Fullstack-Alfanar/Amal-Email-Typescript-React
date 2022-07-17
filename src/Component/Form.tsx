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
      }  else {
        setMessageEmail(" Valid Email");
        console.log("Email Is Valid");
        return true;
      }
    };

    const PasswordValidation = () => {
        if (email === "" || password === "" ) {
          alert("there is any empty filed");
        }
      const regEx1 =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
        
      if (!regEx1.test(password)) {
        setPasswordMessage(
          "it should be  a valid password "
        );
        console.log("Invalid Password");
        return false;
      }else {
        setPasswordMessage("Valid Password");
        console.log("Password Is Valid");
        return true;
      }
    };
    emailValidation() ; PasswordValidation();
     
      
    
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
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
          <thead>
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
              <td>
                <p className="label1"> {messageEmail}</p>
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                <input
                  type="password"
                  value={password}
                  placeholder="Your Password"
                  onChange={handleOnChange2}
                />
              </td>
              <td>
                <p className="label1">{passwordMessage}</p>
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        <button onClick={validation}>Check</button>
      </form>
    </div>
  );
};

export default Form;
