import React from 'react';
import './App.css';
import Form from './Form';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import FormSignup from './FormSignup';

function App() {
  // return <Form />;
  return ( 
    <div className="App">
                <Router> 
                    <div>
                        <Switch>
                             <Route path="/home" component={FormSignup} />
                            
                            {/* <Route path="/search/:root?/:category?/:subcategory?/:place?" component={SearchPage} /> */}
                             <Route path="/" component={Form} /> 
                        </Switch>
                    </div>
                </Router>
            </div>
  )
}

export default App;
