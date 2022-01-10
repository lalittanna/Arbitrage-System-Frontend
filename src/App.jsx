import { Welcome, Navbar, Footer } from "./components";

//className="gradient-bg-welcome"
const App = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Navbar />
        <Welcome />
      </div>
      <Footer />
    </div>
  );
};

export default App;
