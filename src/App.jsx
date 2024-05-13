import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <MyNavbar query="me" />
      <ProfilePage />
    </>
  );
}

export default App;
