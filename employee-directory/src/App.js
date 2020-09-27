import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Table from "./components/Table";
import { getEmployees } from "./utils/API";

function App() {
  const [initialEmployees, updateAvailableEmployees] = useState([]);
  const [employeesToRender, updateEmployeesToRender] = useState([]);

  useEffect(() => {
    getEmployees().then(({ data: { results } }) => updateAvailableEmployees(results));
  }, []);

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <p>
        Please enter the employees last name to narrow down your search results
      </p>
      <FilterInput employees={initialEmployees} updateEmployees={updateEmployeesToRender} />
      <Table users={employeesToRender} />
    </div>
  );
}

export default App;
