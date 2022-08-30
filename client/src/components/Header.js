import React from "react";
import NavTabs from './NavTabs';
import styled from 'styled-components';
export default function Header({ currentPage, setCurrentPage }) {
    const handlePageChange = (page) => setCurrentPage(page);
   
    const NavHeader = styled.header`
    
    display: inline-block;
    border-radius: 4px;
  padding: 1.5rem 0;
  margin: 1.5rem 1rem;
  width: 15rem;
    background: white;
    color: white;
    border: 6px solid #000080;

    
    `
    return (
        <NavHeader>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </NavHeader>
    )
}
