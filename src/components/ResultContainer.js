import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import List from "./List";

function ResultContainer() {
  const [employees, setEmployees] = useState({
    results: [],
    search: "",
  });

  useEffect(() => {
    const data = fetch("https://randomuser.me/api/?results=50");
    data
      .then((response) => response.json())
      .then((response) => {
        setEmployees({
          results: response.results,
        });
      });
  }, []);

  console.log(employees.results);

  return (
    <>
      <h1>Rich Web and co. Employee Directory</h1>
      <SearchForm search={employees.search} />
      <List results={employees.results} />
    </>
  );
}

export default ResultContainer;
