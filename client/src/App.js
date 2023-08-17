import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
function App() {
  return (
    //Using React-Router-Dom For Navigation
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userDetails" element={<UserDetails />} />
    </Routes>
  );
}

export default App;
