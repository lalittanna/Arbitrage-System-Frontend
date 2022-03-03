import { Welcome, Navbar, Footer, Cards, Simple } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//className="gradient-bg-welcome"
const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <div className="pb-10 min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/simple" element={<Simple />} />
          </Routes>
        </div>
        <div className="relative bottom-0 w-full h-10">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
