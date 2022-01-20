import { Welcome, Navbar, Footer, Cards } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//className="gradient-bg-welcome"
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/app" element={<Cards />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
