import * as React from 'react';
import { Table } from './stories/Table.jsx';

const data = [
    {
        "Name" : "Abhishek",
        "Rating": 8,
        "Age": 22,
        "Last Name": "Pandey"
    },
    {
        "Name" : "Abhi",
        "Rating": 9,
        "Age": 21,
        "Last Name": "Yadav",
    },
    {
        "Name" : "Abhishek",
        "Rating": 8,
        "Age": 22,
        "Last Name": "Pandey"
    },
    {
        "Name" : "Abhi",
        "Rating": 9,
        "Age": 21,
        "Last Name": "Yadav",
    }
]

const headers = ["Name", "Rating", "Age", "Last Name"];

function App() {
    return (
        <div>
            <Table 
                primary={true}
                data={data}
                headers={headers}
            />
        </div>
    )
}

export default App;