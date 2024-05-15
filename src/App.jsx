import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import ProfilePresentation from "./components/ProfilePresentation";
function App() {
  return (
    <>
    <MyNavbar query="me" />
    <ProfilePresentation/>
    </>
  );
}

export default App;
