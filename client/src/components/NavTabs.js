import React from 'react';
import styled from "styled-components";
import { A, Nav } from "../styled/styled";
import DateTime from './DateTime';
import Auth from '../utils/auth';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function NavTabs({ currentPage, handlePageChange }) {
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    return (
      <>
        <Nav className="nav nav-tabs">
		{Auth.loggedIn() ? 
        (
	      <A
		  href="#logIn"
		  onClick={logout}
		  className={currentPage === "LogIn" ? "nav-link active" : "nav-link"}
		  >
		  Logout
		  </A>
		) : (
		<A
		  href="#logIn"
		  onClick={() => handlePageChange("LogIn")}
		  // This is a conditional (ternary) operator that checks to see if the current page is "Home"
		  // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
		  className={currentPage === "LogIn" ? "nav-link active" : "nav-link"}
		>
		  Login/Create Account
		</A>)}

		<A
		  href="#classifieds"
		  onClick={() => handlePageChange("Classifieds")}
		  // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
		  className={
			currentPage === "Classifieds" ? "nav-link active" : "nav-link"
		  }
		>
		  Classifieds
		</A>
		<A
		  href="#userAd"
		  onClick={() => handlePageChange("UserAd")}
		  // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
		  className={currentPage === "UserAd" ? "nav-link active" : "nav-link"}
		>
		  View Your Ads
		</A>
	    </Nav>
      </>
    );
}