import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import ArticleDetails from './components/ArticleDetails';
import CreatePost from './pages/CreatePost';
import UpdatePost from './components/UpdatePost';
import SuccesfulCreation from './pages/SuccessfulCreation';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <SideBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/articles/:articleId' component={ArticleDetails} />
          <Route path='/articles/update/:articleId' component={UpdatePost} />
          <Route path='/createpost' component={CreatePost}/>
          <Route path='/createpost/succesful' component={SuccesfulCreation} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
