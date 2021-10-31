import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Admin from './Components/Admin/DashBoard/Admin';
import Book from './Components/Book/Book';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Packages from './Components/Packages/Packages';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>

                <Route exact path="/home">
                  <Home/>
                </Route>

                <Route exact path="/about">
                  <About/>
                </Route>

                <Route exact path="/contact">
                  <Contact/>
                </Route>

                <Route exact path="/packages">
                  <Packages/>
                </Route>

                <Route exact path="/login">
                  <Login/>
                </Route>

                <PrivateRoute exact path="/admin">
                  <Admin/>
                </PrivateRoute>

                <PrivateRoute exact path="/book/:id">
                  <Book/>
                </PrivateRoute>
                
                <Route path="*">
                  <NotFound/>
                </Route>

          </Switch>
          
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
