import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

function Datatable() {

    createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      });

    const columns = [
        {
          name: 'First Name',
          selector: 'fname',
          sortable: true,
        },
        {
          name: 'Last Name',
          selector: 'lname',
          sortable: true,
          right: true,
        },
        {
          name: 'Gender',
          selector: 'gender',
          sortable: true,
          right: true,
        },
        {
          name: 'DOB',
          selector: 'dob',
          sortable: true,
          right: true,
        },
        {
          name: 'Action',
          selector: 'actions',
          sortable: true,
          right: true,
        },
      ];

      const data = [
            { 
                fname: 'Amit',
                lname: 'Chandrakar',
                gender : 'male',
                dob: Date('Y-m-d'),
                actions: 'action'
            },
            { 
                fname: 'Ankit',
                lname: 'Chandrakar',
                gender : 'male',
                dob: Date('Y-m-d'),
                actions: 'action'
            },
            { 
                fname: 'Neha',
                lname: 'Chandrakar',
                gender : 'male',
                dob: Date('Y-m-d'),
                actions: 'action'
            },
            { 
                fname: 'Sohan',
                lname: 'Chandrakar',
                gender : 'male',
                dob: Date('Y-m-d'),
                actions: 'action'
            },
            { 
                fname: 'Pinky',
                lname: 'Chandrakar',
                gender : 'male',
                dob: Date('Y-m-d'),
                actions: 'action'
            },
            { 
                fname: 'PinSonalky',
                lname: 'Chandrakar',
                gender : 'male',
                dob: Date('Y-m-d'),
                actions: 'action'
            },
        ];

    return (
        <div>
           <DataTable
            title="Arnold Movies"
            columns={columns}
            data={data}
            selectableRows
            Clicked
        />
        </div>
    );
}

export default Datatable;