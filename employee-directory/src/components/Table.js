<<<<<<< HEAD
import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div className="w-100">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th style={{cursor: "pointer"}} scope="col" onClick={() => {
                const usersCopy = [...users];
                const updateSort = usersCopy.sort((a, b) => {
                  const nameA = a.name.last;
                  const nameB = b.name.last;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}>Surname (click to order alphabeticaly)</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Postcode</th>
            <th scope="col">Picture</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(
            ({
              location: { city, state, postcode },
              picture: { thumbnail },
              cell,
              gender,
              email,
              name: { first, last }
            }) => (
              <tr key={email}>
                <td>{first}</td>
                <th>{last}</th>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{cell}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{postcode}</td>
                <td>
                  <img src={thumbnail} alt="employee" />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
||||||| 61aa692... Updates
=======
import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div className="w-100">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th style={{cursor: "pointer"}} scope="col" onClick={() => {
                const usersCopy = [...users];
                const updateSort = usersCopy.sort((a, b) => {
                  const nameA = a.name.last;
                  const nameB = b.name.last;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}>Surname (click to order alphabeticaly)</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Postcode</th>
            <th scope="col">Picture</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(
            ({
              location: { city, state, postcode },
              picture: { thumbnail },
              cell,
              gender,
              email,
              name: { first, last }
            }) => (
              <tr key={email}>
                <td>{first}</td>
                <th>{last}</th>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{cell}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{postcode}</td>
                <td>
                  <img src={thumbnail} alt="employee" />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
>>>>>>> parent of 61aa692... Updates
