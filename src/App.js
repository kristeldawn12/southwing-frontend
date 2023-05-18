import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { MainProvider } from "../src/provider/MainProvider";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { NavBurger } from "./components/NavBurger";

function App() {
  return (
    <MainProvider>
      <Router>
        <NavBurger />
        <AnimatedRoutes />
      </Router>
    </MainProvider>
  );
}

export default App;
