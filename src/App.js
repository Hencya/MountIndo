// library
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// component
import Homepage from "./pages/homepage/Homepage";
import Explorepage from "./pages/explorepage/Explorepage";
import Articlepage from "./pages/articlepage/Articlepage";
import AddArticle from "./pages/addpage/Addpage.jsx";
import Loginpage from "./pages/loginpage/Loginpage";
import Profilepage from "./pages/profilepage/Profilepage";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/explore" exact element={<Explorepage />} />
        <Route path="/article/:id" exact element={<Articlepage />} />
        <Route path="/add-post" exact element={<AddArticle />} />
        <Route path="/login" exact element={<Loginpage />} />
        <Route path="/profile" exact element={<Profilepage />} />
        <Route path="*" exact element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
