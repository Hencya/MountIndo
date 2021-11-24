import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Explorepage from "./pages/explorepage/Explorepage";
import Articlepage from "./pages/articlepage/Articlepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/explore" exact element={<Explorepage />} />
        <Route path="/article/:id" exact element={<Articlepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
