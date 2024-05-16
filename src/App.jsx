import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import JobPage from "./components/JobPage";
import JobSearch from "./components/JobSearch";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar query="me" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/jobs" element={<JobPage />} />
          <Route path="/jobs/search/:searchWork" element={<JobSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
