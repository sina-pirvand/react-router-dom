import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Posts from "./pages/posts";
import Dashboard from "./pages/dashboard";
import { Layout } from "./components/Layout";
import Profile from "./components/Profile";
import Payment from "./components/Payment";
import Post from "./components/post";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index path="profile" element={<Profile />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
