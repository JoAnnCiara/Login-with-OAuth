import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
            <Route path="/post/:id" element={ user ? <Post/> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;


// if user, then navigate to Home; if not, then navigate to Login