import React, {useState} from "react";
import Classifieds from "./Classifieds";
import LogIn from './LogIn'
import Profile from './Profile'

import { Page } from "../../styled/styled";


export default function Frame({ currentPage, setCurrentPage }) {
console.log('Frame:', setCurrentPage);

  const [username, setUsername] = useState(null);
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'LogIn') {
      return <LogIn setUserState={setUsername} setCurrentPage={setCurrentPage}/>;
    }
    if (currentPage === "Classifieds") {
      return <Classifieds />;
    }
    if (currentPage === 'Profile') {
      console.log('Frame.username:', username);
      return <Profile username={username}/>;
    }
    return <LogIn setUserState={setUsername} setCurrentPage={setCurrentPage}/>;
  };
  
  return (
    <Page>
      {renderPage()}
    </Page>
  );
}
