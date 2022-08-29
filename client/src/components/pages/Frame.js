import React from 'react';
import Classifieds from './Classifieds';
import LogIn from './LogIn'
import Profile from './Profile'

export default function Frame({ currentPage }) {

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'LogIn') {
      return <LogIn />;
    }
    if (currentPage === 'Classifieds') {
      return <Classifieds />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    return <LogIn />;
  };

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}