import React, {useState} from "react";
import Classifieds from "./Classifieds";
import LogIn from './LogIn'
import Profile from './Profile'

import { Page } from "../../styled/styled";

export default function Frame({ currentPage }) {
  const [username, setUsername] = useState(null);
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "LogIn") {
      return <LogIn setUserState={setUsername}/>;
    }
    if (currentPage === "Classifieds") {
      return <Classifieds />;
    }
    if (currentPage === 'Profile') {
      console.log(username);
      return <Profile username={username}/>;
    }
    return <LogIn setUserState={setUsername}/>;
  };
  
  return (
    <Page>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      <p>Hello {username}</p>
      {renderPage()}
    </Page>
  );
}
