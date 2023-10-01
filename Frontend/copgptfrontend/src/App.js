import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import AboutUs from "./components/AboutUs";

function App() {
  return (<Router>
    <Routes>
          
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<AboutUs/>}></Route>
    </Routes>
   </Router>
 );
}

export default App;
