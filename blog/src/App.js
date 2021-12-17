import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import ArticleDetails from './components/ArticleDetails';
import CreatePost from './pages/CreatePost';
import UpdatePost from './components/UpdatePost';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/articles/:articleId' component={ArticleDetails} />
          <Route path='/articles/update/:articleId' component={UpdatePost} />
          <Route path='/createpost' component={CreatePost}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
