import logo from './logo.svg';
import './App.css';
import Restaurant from './components/Restaurant/Restaurant';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/restaurant">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/meal/:mealId">
            <MealDetail></MealDetail>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>



    </div>
  );
}

export default App;
