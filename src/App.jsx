import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Portfolio from "./components/Portfolio";
import DataUpload from "./components/DataUpload";

function App() {

  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };


  return (
    <>
      <Router>
        <Header/>
        <div className="flex ">
          <Sidebar/>
          <div className="flex p-4">
            Main Content
          </div>
        </div>
        <Routes>
          <Route path = '/portfolio' element = {<Portfolio items={items} />}/>
          <Route path = '/data-upload' element = {<DataUpload onAddItem={addItem} />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
