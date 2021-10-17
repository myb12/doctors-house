
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Switch>
        <Route path="/">

        </Route>
      </Switch>

    </Router>
  );
}

export default App;
