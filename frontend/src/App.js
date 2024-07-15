import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/body/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import MenBody from './components/Men.js/MenBody';
import WomenBody from './components/women/WomenBody';
import KidsBody from './components/kids/KidsBody';
import HomeAndLiving from './components/homeAndLiving/HomeAndLiving';
import WishList from './components/wishlist/WishList';
import FilterMen from './components/filter/FilterMen';
import DesignStudio from './components/design/DesignStudio';
import LoginSignup from './components/LoginSignup/LoginSignup';
import DesignForm from './components/DesignForm/DesignForm';
import Category from './components/Category/Category';
import DOM from './components/DOM/DOM';
import DesignContextProvider from './Context/DesignContext';

function App() {
  return (
    <DesignContextProvider>
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path={'/'} component={Home} />
        <Route path={'/men'} component={MenBody} />
        <Route path={'/women'} component={WomenBody} />
        <Route path={'/kids'} component={KidsBody} />
        <Route path={'/homeandliving'} component={HomeAndLiving} />
        <Route path={'/design'} component={DesignStudio} />
        <Route path={'/login'} component={LoginSignup} />
        <Route path={'/wishlist'} component={WishList} />
        <Route path={'/filtermen'} component={FilterMen} />
        <Route path={'/DOM'} component={DOM} />
        <Route 
          path={'/pants'} 
          render={(props) => <Category {...props} category="pants" />} 
        />
        <Route 
          path={'/tops'} 
          render={(props) => <Category {...props} category="tops" />} 
        />
        <Route 
          path={'/dresses'} 
          render={(props) => <Category {...props} category="dresses" />} 
        />
        <Route 
          path={'/ethnic'} 
          render={(props) => <Category {...props} category="ethnic" />} 
        />
        <Route path={'/submitdesign'} component={DesignForm} />
        <Route 
          path={'/increasevotes'} 
          render={(props) => <Category {...props} category="tops" />} 
        /> 
        <Footer />
        <hr />
      </div>
    </Router>
    </DesignContextProvider>
  );
}

export default App;
