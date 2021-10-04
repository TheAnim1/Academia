import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Faq from './components/FAQ/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound404 from './components/NotFound404/NotFound404';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
        <Router>
          <Header></Header>
          
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/home">
                    <Home></Home>
                </Route>
                <Route exact path="/about">
                    <About></About>
                </Route>
                <Route exact path="/allCourses">
                    <Services></Services>
                </Route>
                <Route exact path="/faq">
                    <Faq></Faq>
                </Route>
                <Route path="*">
                    <NotFound404></NotFound404>
                </Route>
            </Switch>
            <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
