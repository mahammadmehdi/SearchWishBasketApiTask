import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
        <Route path="/" element={<Home></Home>} /> 
        <Route path="/basket" element={<Shop></Shop>} /> 
        <Route path="/blog" element={<Blog></Blog>} /> 
        <Route path="/detail/:id" element={<Detail></Detail>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
