import { Welcome, Navbar, Footer, Cards } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//className="gradient-bg-welcome"
const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="pb-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/app" element={<Cards />} />
          </Routes>
        </div>
        <div className="absolute bottom-0 w-full h-10">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
