import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/Routes/AllRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <AllRoutes />
      </div>

      <Footer />
    </div>
  );
}

export default App;
