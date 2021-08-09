import React, {useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

function Datatable() {

  const [users, setUsers] = useState([]);

  const columns = [
    {dataField: 'id', text: 'Id'},
    {dataField: 'name', text: 'Name', sort: true},
    {dataField: 'username', text: 'Username', sort: true},
    {dataField: 'email', text: 'Email', sort: true},
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function(page, sizePerPage){
      console.log(page);
      console.log(sizePerPage);
    },
    onSizePerPageChange: function(page, sizePerPage){
      console.log(page);
      console.log(sizePerPage);
    }
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => setUsers(result))
    .then(error => console.log(error))
  }, []);


  return (
      <>
        <BootstrapTable 
          bootstrap4 
          keyField='id' 
          columns={columns} 
          data={users}
          pagination={pagination}
        />
      </>
  );
}

export default Datatable;