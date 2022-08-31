import React from "react";
import styled from "styled-components";
import NavTabs from "./NavTabs";
import { HeaderWrapper } from "../styled/styled";

export default function Header({ currentPage, setCurrentPage }) {
  const handlePageChange = (page) => setCurrentPage(page);
  console.log('render header')
  return (
    <HeaderWrapper>
      <h1>TheClassifieds</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </HeaderWrapper>
  );
}
