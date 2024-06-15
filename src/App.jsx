import Home from "./pages/Home";
import Predict from "./pages/Predict";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<Predict />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
