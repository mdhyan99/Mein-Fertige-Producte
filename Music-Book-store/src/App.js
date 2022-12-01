import "./App.css";
import BooksProvider from "./contexts/BooksProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./views/Product";
import Home from "./views/Home";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <BooksProvider>
              <BrowserRouter>
              <Header />
              <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="/books/ :id" element={<Product/>} />
              </Routes>
              </BrowserRouter>
            </BooksProvider>
        </div>
    );
}

export default App;
