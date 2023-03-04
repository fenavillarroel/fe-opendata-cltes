import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Cdr from "./pages/Cdr";
import Payments from "./pages/Payments";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cdr" element={<Cdr />} />
        <Route path="/invoices" element={<Payments />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
