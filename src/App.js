import './App.css';
import CounterContainer from './components/countercontainer/CounterContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from './views/products/Products';
import ProductDetails from "./views/productdetails/ProductDetails";
import About from "./views/about/About";
import Home from "./components/home/Home";
import NotFound from "./views/notfound/NotFound";
import TodoList from "./views/todo/Todo";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/counter" element={<CounterContainer/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/products/:id" element={<ProductDetails/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                    <Route path="/todo" element={<TodoList/>}></Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;
