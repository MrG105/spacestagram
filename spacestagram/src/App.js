import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './components/Home';
// import { Saved } from './components/Saved'
// import { NoMatch } from './components/NoMatch'
import { Layout } from './components/Layout';
import { NavigationBar } from './components/Navbar';
import { Jumbotron } from './components/Jumbotron';
import { ImageCard } from './components/ImageCard';



function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          {/* <Route path="/saved" component={Saved} /> */}
          {/* <Route component={NoMatch} /> */}

        </Routes>
      </Router>
      <ImageCard />
      </Layout>

    </React.Fragment>
  );
}

export default App;
