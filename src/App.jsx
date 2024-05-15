import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PostsHome from "./components/PostsHome";
import { Container } from "react-bootstrap";

// import MyNavbar from "./components/MyNavbar";
// import ProfilePage from "./components/ProfilePage";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <Container>
        <PostsHome />
      </Container>
      {/* <BrowserRouter>
        <MyNavbar query="me" />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
