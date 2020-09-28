import React, { useEffect, useState } from "react";

const FilterInput = ({ users, updateUsers }) => {
  const [inputValue, updateInput] = useState("");

  useEffect(() => {
    const filteredUsers =
      inputValue === ""
        ? users
        : users.filter(
            ({ name: { last } }) =>
              last.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
          );

    updateUsers(filteredUsers);
  }, [updateUsers, inputValue, users]);

  return (
    <input className="mb-3 w-25 border border-success rounded" value={inputValue} onChange={e => updateInput(e.target.value)} />
  );
};

export default FilterInput;