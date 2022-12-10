import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Css/style.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Index as UserIndex} from './Pages/Users/Index';
import { Create as UserCreate} from './Pages/Users/Create';
import {Edit as UserEdit} from './Pages/Users/Edit';
import TableOfContent from "./Pages/TableOfContent";
import Counter from "./Pages/Counter/Counter";
import Calculator from "./Pages/Calculator/Calculator";
import BMICalculator from "./Pages/BMICalculator/BMICalculator";
import Budget from "./Pages/Budget/Budget";
import { ToastContainer } from 'react-toastify';
import Elements from "./Pages/Forms/Elements";
import React, { useEffect } from 'react';


function App() 
{

  return (
    <>
      <Router>
        <Switch>
          <Route path="/elements">
            <Elements />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/bmi">
            <BMICalculator />
          </Route>
          <Route path="/budget">
            <Budget />
          </Route>
          <Route path="/list">
            <UserIndex />
          </Route>
          <Route path="/create">
            <UserCreate />
          </Route>
          <Route path="/edit/:id">
            <UserEdit />
          </Route>
          <Route path="/">
            <TableOfContent />
          </Route>

        </Switch>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
