import React, { useState, useEffect } from "react";

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th
              scope="col"
              onClick={() => {
                const usersCopy = [...users];
                const updateSort = usersCopy.sort((a, b) => {
                  const nameA = a.name.first;
                  const nameB = b.name.first;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}
            >
              Name
            </th>
            <th scope="col">Surname</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Cell</th>
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
                <th>{first}</th>
                <td>{last}</td>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{cell}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{postcode}</td>
                <td>
                  <img src={thumbnail} alt="employee" />
                </td>

                <td></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;