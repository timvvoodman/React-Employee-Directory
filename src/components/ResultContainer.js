import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import List from "./List";

function ResultContainer() {
  //State Definition for employees
  const [employees, setEmployees] = useState({
    results: [],
    search: "",
  });

  //API Call to Randomuser.me & update state(employees)
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

  //console.log(employees.search);

  //update search state when user types in search bar
  function handleInputChange(event) {
    const value = event.target.value;
    setEmployees({ ...employees, search: value });
    console.log(employees.search);
  }
  //Search employee list then return with names that match
  function handleSearch() {
    const arr = [...employees.results];
    const filteredArray = arr.filter(
      (employee) => employees.search === employee.name.last
    );
    setEmployees({ ...employees, results: filteredArray });
    console.log("Click");
    console.log(filteredArray);
  }

  return (
    <>
      <h1>Rich Web and co. Employee Directory</h1>
      <SearchForm
        search={employees.search}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <List results={employees.results} />
    </>
  );
}

export default ResultContainer;
