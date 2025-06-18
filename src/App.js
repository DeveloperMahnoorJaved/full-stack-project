import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter , Route , Router , Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from ".//Components/CountryDropdown/Footer/index.js";


function App() {
  return (
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" exact={true}  element={<Home />} />
  
</Routes>
  <Footer/>
</BrowserRouter>
  );
}

export default App;