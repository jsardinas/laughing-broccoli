import React, {useState} from "react";
import Classifieds from "./Classifieds";
import LogIn from './LogIn'
import Profile from './Profile'
import SingleAd from "./SingleAd";

import { Page } from "../../styled/styled";
import Auth from '../../utils/auth'


export default function Frame({ currentPage, setCurrentPage }) {
console.log('render frame: ', currentPage);

  const [username, setUsername] = useState(null);
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  if (currentPage === "LogIn" && Auth.loggedIn())
    currentPage = 'Profile';
  const renderPage = () => {
    if (currentPage === 'LogIn') {
      return <LogIn setUserState={setUsername} setCurrentPage={setCurrentPage}/>;
    }
    if (currentPage === "Classifieds") {
      return <Classifieds handlePageChange={setCurrentPage}/>;
    }
    if (currentPage === 'Profile') {
      console.log('Frame.username:', username);
      return <Profile username={username}/>;
    }
    if (currentPage === 'SingleAd') {
      console.log('Frame.username:', username);
      return <SingleAd />;
    }

  };
  
  return (
    <Page>
      {renderPage()}
    </Page>
  );
}
