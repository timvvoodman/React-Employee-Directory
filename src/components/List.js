//create Bootstrap Table
import React from "react";
import Table from "react-bootstrap/Table";

function List({ results }) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr>
            <td>{result.picture.thumbnail}</td>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default List;
