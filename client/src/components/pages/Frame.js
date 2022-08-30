import React from 'react';
import Classifieds from './Classifieds';
import Profile from './Profile';
import LogIn from './LogIn'


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
      //change this 
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