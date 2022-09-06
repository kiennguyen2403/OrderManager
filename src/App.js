import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./page/loginpage/login";
import Order from "./page/orderpage/order";
import Member from "./page/memberpage/member";
function App() {
  return (
    <div className="App">
        <Router basename="/">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/member" element={<Member />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
