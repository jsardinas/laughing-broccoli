import React from "react";
import Classifieds from "./Classifieds";
import UserAdEdit from "./UserAdEdit";
import LogIn from "./LogIn";
import { Page } from "../../styled/styled";

export default function Frame({ currentPage }) {
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "LogIn") {
      return <LogIn />;
    }
    if (currentPage === "Classifieds") {
      return <Classifieds />;
    }
    if (currentPage === "UserAd") {
      return <UserAdEdit />;
    }
    return <LogIn />;
  };

  return (
    <Page>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </Page>
  );
}
