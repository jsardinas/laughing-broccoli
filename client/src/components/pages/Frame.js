
import React from 'react';
import Home from './Home';
import Classifieds from './Classifieds';
import UserAd from './UserAd';

export default function Frame({ currentPage }) {

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Classifieds') {
      return <Classifieds />;
    }
    if (currentPage === 'UserAd') {
      return <UserAd />;
    }
    return <Home />;
  };

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
