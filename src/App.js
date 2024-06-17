import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Navbar/navbar";

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar></Navbar>

      </div>
    </Router>
  );
}

export default App;
