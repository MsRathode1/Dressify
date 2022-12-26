import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Fotter from './Components/Fotter';
import Rout from './Router/Routes';
import { CartProvider } from "react-use-cart"


function App() {
  return (
    <>
        <Navbar />
        <Rout />
        <Fotter />
    </>
  );
}

export default App;
