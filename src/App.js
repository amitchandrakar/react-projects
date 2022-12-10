import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Css/style.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Index as EmployeeIndex} from './Pages/Employees/Index';
import { Create as EmployeeCreate} from './Pages/Employees/Create';
import {Edit as EmployeeEdit} from './Pages/Employees/Edit';
import TableOfContent from "./Pages/TableOfContent";
import Counter from "./Pages/Counter/Counter";
import Calculator from "./Pages/Calculator/Calculator";
import BMICalculator from "./Pages/BMICalculator/BMICalculator";
import Budget from "./Pages/Budget/Budget";
import { ToastContainer } from 'react-toastify';
import Elements from "./Pages/Forms/Elements";

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
            <EmployeeIndex />
          </Route>
          <Route path="/create">
            <EmployeeCreate />
          </Route>
          <Route path="/edit/:id">
            <EmployeeEdit />
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
