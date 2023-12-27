import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar element={<Navbar />} />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:countryId" element={<CountryDetailsPage />} />
    </Routes>
    </>
    
  );
}

export default App;
