import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListings from "./containers/ProductListings";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact Component={ProductListings} />
          <Route path='/product/:productId' Component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
