import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Home.jsx is inside components folder
import AddBook from "./components/AddBooks"; // Assuming AddBook.jsx is inside pages folder
import "./App.css"; // App.css is in the same folder

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
