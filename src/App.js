import { Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import SignUp from "./Pages/SignUp/SignUp";
import CheckOut from "./Shared/CheckOut/CheckOut";
import CheckOutDetails from "./Shared/CheckOut/CheckOutDetails";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import RequiredAuth from "./Shared/RequiredAuth/RequiredAuth";

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/service/:checkoutId" element={<CheckOutDetails />} />
        <Route path="/checkout" element={
        <RequiredAuth>
          <CheckOut/>
        </RequiredAuth>
        }/>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
