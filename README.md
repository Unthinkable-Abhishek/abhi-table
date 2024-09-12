### `abhi-table`
abhi-table is a simple and flexible React component that renders a table based on provided headers and data. It supports two methods of usage: downloading it from npm or linking it locally to your project.

### `Features`
1- Dynamically renders a table from headers and data.
2- Easy to integrate into any React project.
3- Supports local development via npm link.
4- Installation
4.1- Option 1: Install from npm
     To install the package from npm, simply run:

     npm install abhi-table
4.2- Option 2: Use npm link for local development
If you want to modify the package or use it locally without publishing to npm, you can clone the repository and use npm link:

Clone the repository:

git clone <repository-url>
cd abhi-table
Link the package globally:

npm link
In your project directory, link abhi-table:

npm link abhi-table

### `Usage`
Here’s how you can use the abhi-table component in your React project:

import React from 'react';
import {Table} from 'abhi-table';

const headers = ['Name', 'Age', 'Occupation'];
const data = [
  { Name: 'John Doe', Age: 28, Occupation: 'Engineer' },
  { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
  { Name: 'Sam Wilson', Age: 41, Occupation: 'Developer' }
];

const MyComponent = () => {
  return (
    <div>
      <h1>My Table</h1>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default MyComponent;

### `Props`
`headers`: An array of strings representing the table headers.
`data`: An array of objects, where each object’s keys correspond to the headers.
Example:

const headers = ['Name', 'Age', 'Occupation'];
const data = [
  { Name: 'John Doe', Age: 28, Occupation: 'Engineer' },
  { Name: 'Jane Smith', Age: 34, Occupation: 'Designer' },
];
