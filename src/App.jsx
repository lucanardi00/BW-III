import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserProfileAction } from "./redux/actions";
import MyNavbar from "./components/MyNavbar";
import ProfilePage from "./components/ProfilePage";

function App() {
  const allProfile = useSelector((state) => state.getFetch.profile);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchUserProfileAction(query));
  }, []);

  return (
    <>
      <MyNavbar />
      <ProfilePage />
    </>
  );
}

export default App;
