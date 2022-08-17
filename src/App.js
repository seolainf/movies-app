import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./Routes/Router";

function App() {
  AOS.init();
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main">
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
