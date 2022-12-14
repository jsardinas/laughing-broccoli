import React, { useState } from "react";
import axios from "../../utils/axios";

import {
  Button,
  FormWrapper,
  Input,
  LoginDiv,
  Span,
} from "../../styled/styled";


// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from "../../utils/helpers";

function Form({setUserState, setCurrentPage}) {
console.log('render login');
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogInForm, setIsLogInForm] = useState(true);
  const showLogInForm = (value) => {
    setIsLogInForm(value);
    console.log(value);
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if ((!isLogInForm && !validateEmail(email)) || !userName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    // alert(`Hello ${userName}`);
    const request = isLogInForm ? "/login" : "/register";
    // try {
    const res = await axios
      .post(request, {
        email,
        username: userName,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          if (request === "/login") {
            localStorage.setItem("token", res.data.token);
            window.location.assign('/');
            setCurrentPage('UserAd');
            setUserState(userName);
            // alert("user login successful");
          }
          if (request === "/register")
            alert("user account created successfully");
        }
      })
      .catch((error) => {
        alert(error);
      });
    
      await res;
      

    setUserName("");
    setPassword("");
    setEmail("");
  };

  return (
    <LoginDiv>
      <p>Hello {userName}</p>
      <FormWrapper className="form">
        {isLogInForm === true ? null : (
          <Input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        )}
        <Input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <Input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
        />

        <Button type="button" onClick={handleFormSubmit}>
          Submit
        </Button>
      </FormWrapper>
      {isLogInForm === true ? (
        <p>
          Don't have an account?{" "}
          <Span onClick={() => showLogInForm(false)}>Register Here</Span>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <Span onClick={() => showLogInForm(true)}>Login Here</Span>
        </p>
      )}
      {/* <Button type="button" onClick={() => showLogInForm(true)}>
        Log in
      </Button>
      <Button type="button" onClick={() => showLogInForm(false)}>
        Create account
      </Button> */}
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </LoginDiv>
  );
}

export default Form;
