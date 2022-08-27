import React, { useState } from "react";
import Frame from "./components/pages/Frame";
import Header from "./components/Header";
import './App.css';


export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  console.log("Hello World");
  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Frame currentPage={currentPage} />
    </>
  );
}
