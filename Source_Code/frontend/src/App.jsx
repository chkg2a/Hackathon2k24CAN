import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Jobs from "./pages/Jobs"
import AddJob from "./pages/AddJob"
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addjob" element={<AddJob/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>} />
        </Route>
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
