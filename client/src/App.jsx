import Home from "./pages/Home";
import Login from "./pages/Login";
import Regiter from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Regiter/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App;
