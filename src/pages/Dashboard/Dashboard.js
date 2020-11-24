import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = (props) => {
  return (
    <div>
      Dashboard
      <div className="table">
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Helen Hunt</td>
              <td>Helenhunt@hotmail.com</td>
              <td>Ralston, Oklahoma</td>
            </tr>
            <tr>
              <td>Bill Paxton</td>
              <td>billypax@aol.com</td>
              <td>Austin, Texas</td>
            </tr>
            <tr>
              <td>Phillip Seymour Hoffman</td>
              <td>stormchasers@netscape.net</td>
              <td>Wichita, Kansas</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
