import Analisi from "./Analisi";
import Experiences from "./Esperienze";
import Studies from "./Formazione";
import Profile from "./Informazioni";
import Post from "./Post";
import Projects from "./Progetti";
import Risorse from "./Risorse";

const ProfilePage = () => {
  return(
  <>
  <Analisi />
  <Risorse />
  <Profile />
  <Post />
  <Experiences />
  <Studies />
  <Projects />
  </>
) 
};
export default ProfilePage;
