import "./App.css";
import ActiveUser from "./components/ActiveUser/ActiveUser";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <ActiveUser></ActiveUser>
    </>
  );
}

export default App;
