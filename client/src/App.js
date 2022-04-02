import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ArticleDetails from './components/ArticleDetails';
import CreatePost from './pages/CreatePost';
import UpdatePost from './components/UpdatePost';
import SuccesfulCreation from './pages/SuccessfulCreation';
import SideBar from './components/SideBar';
import Entertainment from './pages/Entertainment';
import Sports from './pages/Sports';
import Tech from './pages/Tech';
import Investing from './pages/Investing';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <SideBar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/articles/:articleId"
              component={ArticleDetails}
            />
            <Route path="/articles/update/:articleId" component={UpdatePost} />
            <Route path="/createpost" component={CreatePost} />
            <Route path="/createpost/succesful" component={SuccesfulCreation} />
            <Route path="/entertainment" component={Entertainment} />
            <Route path="/sports" component={Sports} />
            <Route path="/tech" component={Tech} />
            <Route path="/investing" component={Investing} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
