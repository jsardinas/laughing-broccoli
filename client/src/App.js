import React, { useState } from "react";
import Frame from "./components/pages/Frame";
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = usestate('Home');
  console.log("Hello World");
  return (
    <>
      <Frame currentPage={currentPage} />
    </>
  );
}
