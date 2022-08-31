import React, { useState } from "react";
import Frame from "./components/pages/Frame";
import Header from "./components/Header";
import "./App.css";
import { Main } from "./styled/styled";

export default function App() {
  const [currentPage, setCurrentPage] = useState({page:"Classifieds", arg:null});
  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Main>
        <Frame currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Main>
    </>
  );
}
