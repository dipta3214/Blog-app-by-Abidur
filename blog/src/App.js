import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import ArticleDetails from './components/ArticleDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/articles/:articleId' component={ArticleDetails} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
