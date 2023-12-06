//import logo from './logo.svg';
import './App.css'
import HomePage from "./pages/HomePage"
import Header from './components/Header'
import Footer from './components/Footer'
import {
  Route,
  Routes
} from "react-router-dom"

import './App.css';

function App() {
  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <Footer />
      </>

  );
}

export default App;
