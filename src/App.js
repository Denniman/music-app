import './App.css';
import {Header} from './components/Header/Header'
import {Nav} from './components/Header/Nav'
import {SearchBar} from './components/SearchBar/SearchBar'
import {SideBar} from './components/SideBar'
import {MusicBoard} from './components/MusicDetails/MusicBoard'
import {Categories} from './components/Categories/Categories'
import {Footer} from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  
      <Router>
        <main className="container">
        <SideBar />
        <Nav />
        <MusicBoard />
        </main>
      </Router>
  );
}

export default App;
