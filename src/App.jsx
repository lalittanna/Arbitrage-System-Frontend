import { Welcome, Navbar, Footer } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Welcome />
        <Navbar />
      </div>
      <Footer />
    </div>
  );
};

export default App;
