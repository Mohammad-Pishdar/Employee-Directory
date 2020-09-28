import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./components/Table";
import { getEmployees } from "./utils/API";
import "./Styles/App.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getEmployees().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <div className="App">
      <div className="bg-primary">
      <h1>Employee Directory</h1>
      <p>
        To filter by surname, please begin your search in the user input
        below
      </p>
      <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
      </div>
      <Table users={usersToRender} />
    </div>
  );
}

export default App;
//test