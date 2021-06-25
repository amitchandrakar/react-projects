import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import EmpList from './Component/EmployeeCRUD/EmpList';
import EmpCreate from './Component/EmployeeCRUD/EmpCreate';
import EmpEdit from './Component/EmployeeCRUD/EmpEdit';

function App() {
  return (
    <div>

      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <EmpCreate />
          </Route>
          <Route path="/edit/:id">
            <EmpEdit />
          </Route>
          <Route path="/">
            <EmpList />
          </Route>
        </Switch>
      </Router>




    </div>
  );
}

export default App;
