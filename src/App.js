import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import EmpList from './Component/Employees/EmpList';
import EmpCreate from './Component/Employees/EmpCreate';
import EmpEdit from './Component/Employees/EmpEdit';
import TableOfContent from "./TableOfContent";
import Counter from "./Component/Counter/Counter";
import Calculator from "./Component/Calculator/Calculator";
import BMICalculator from "./Component/BMICalculator/BMICalculator";
import Budget from "./Component/Budget/Budget";
import Elements from "./Component/Forms/Elements";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* <Elements /> */}
      <Router>
        <Switch>
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
            <EmpList />
          </Route>
          <Route path="/create">
            <EmpCreate />
          </Route>
          <Route path="/edit/:id">
            <EmpEdit />
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
