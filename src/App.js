import {Header} from './components/Header/Header'
import {SearchBar} from './components/SearchBar/SearchBar'
import {SideBar} from './components/SideBar'
import {MusicBoard} from './components/MusicDetails/MusicBoard'
import {TopSongs} from './components/TopSongs'
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
        <Switch>
          <Route path="/" component={MusicBoard} exact={true}/>
          <Route path="/top-songs" component={TopSongs}/>
        </Switch>
        </main>
      </Router>
  );
}

export default App;
