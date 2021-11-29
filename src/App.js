// library
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
// css
import "./App.css";
// component
import Homepage from "./pages/homepage/Homepage";
import Explorepage from "./pages/explorepage/Explorepage";
import Articlepage from "./pages/articlepage/Articlepage";
import AddArticle from "./pages/addpage/Addpage.jsx";
import Loginpage from "./pages/loginpage/Loginpage";
import Profilepage from "./pages/profilepage/Profilepage";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";
// graphql
import client from "./config/apolo-client/apollo-client";
// redux
import { store, persistor } from "./config/redux/Store";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
