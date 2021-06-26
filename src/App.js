import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import EmpList from './Component/EmployeeCRUD/EmpList';
import EmpCreate from './Component/EmployeeCRUD/EmpCreate';
import EmpEdit from './Component/EmployeeCRUD/EmpEdit';
import TableOfContent from "./TableOfContent";
import Counter from "./Component/Counter/Counter";
import Calculator from "./Component/Calculator/Calculator";
import BMICalculator from "./Component/BMICalculator/BMICalculator";
import Budget from "./Component/Budget/Budget";

function App() {
  return (
    <>

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

    </>
  );
}

export default App;
