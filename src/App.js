import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  const loading = () => <div>Loading...</div>;

  const DetailShip = React.lazy(() => import('./components/ListStarship/DetailShip/DetailShip'));

  return (
    <div className="App">
      <header className="App-header">
      <HashRouter>
            <React.Suspense fallback={loading()}>
              <Switch>
                <Route exact path="/" name="Home" render={props => <Home {...props}/>} />
                <Route exact path="/starships/:id" name="Detail Ship" render={props => <DetailShip {...props}/>} />
              </Switch>
            </React.Suspense>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
