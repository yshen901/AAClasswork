import React from 'react';
import { Route } from 'react-router-dom'
import { AuthRoute } from '../util/route_util'
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './auth_forms/login_form_container'
import SignupFormContainer from './auth_forms/signup_form_container'
import BenchFormContainer from './bench/bench_form_container'
import SearchContainer from './bench/search_container'

const App = () => (
  <div className="app">
    <h1>Bench BnB!!</h1>
    <GreetingContainer />

    <AuthRoute exact path="/signup" component={ SignupFormContainer } />
    <AuthRoute exact path="/login" component={ LoginFormContainer } />
    <Route exact path='/benches/new' component={ BenchFormContainer } />
    <Route exact path="/" component={ SearchContainer } />
  </div>
);

export default App