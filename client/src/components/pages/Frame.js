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
  if (currentPage.page === "LogIn" && Auth.loggedIn())
    currentPage = 'Profile';
  const renderPage = () => {
    if (currentPage.page === 'LogIn') {
      return <LogIn setUserState={setUsername} setCurrentPage={setCurrentPage}/>;
    }
    if (currentPage.page === "Classifieds") {
      return <Classifieds handlePageChange={setCurrentPage}/>;
    }
    if (currentPage.page === 'Profile') {
      return <Profile username={username}/>;
    }
    if (currentPage.page === 'SingleAd') {
      return <SingleAd id={currentPage.arg.id}/>;
    }

  };
  
  return (
    <Page>
      {renderPage()}
    </Page>
  );
}
