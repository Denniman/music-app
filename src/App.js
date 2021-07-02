import {SideBar} from './components/SideBar'
import {TopAlbums} from './components/TopAlbums'
import {TopSongs} from './components/TopSongs'
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
          <Route path="/" component={TopAlbums} exact={true}/>
          <Route path="/top-songs" component={TopSongs}/>
        </Switch>
        <Footer/>
        </main>
      </Router>
  );
}

export default App;
