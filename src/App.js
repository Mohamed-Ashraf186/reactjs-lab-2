import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/Index";
import CounterAction from "./components/counter/CounterAction";
import Home from "./components/Home/Index";
import Navbar from "./components/Navbar/Index";
import Details from "./components/Shop/Details";
import Shop from "./components/Shop/Index";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/counter" element={<CounterAction />} />
        <Route path="/shop/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
