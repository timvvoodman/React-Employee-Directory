import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import List from "./List";

function ResultContainer() {
  //State Definition for employees
  const [employees, setEmployees] = useState({
    results: [],
    filterResults: [],
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
          filterResults: [...response.results],
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

  //Sorts employees alphabetically by last name
  function handleSort(event) {
    const sortedList = [...employees.results].sort((a, b) => {
      let compared = 0;
      const aName = a.name.last;
      const bName = b.name.last;

      if (aName > bName) {
        compared = 1;
      }
      if (aName < bName) {
        compared = -1;
      }
      return compared;
    });
    setEmployees({ ...employees, filterResults: sortedList });
  }

  //Search employee list then return with names that match
  function handleSearch() {
    const arr = [...employees.results];
    const filteredArray = arr.filter(
      (employee) => employees.search === employee.name.last
    );
    setEmployees({ ...employees, filterResults: filteredArray });
    console.log("Click");
    console.log(filteredArray);
  }
  //resets any search or filter to original employee list on UI and clears the search
  function resetSearch() {
    setEmployees({
      ...employees,
      filterResults: employees.results,
      search: "",
    });
  }

  return (
    <>
      <h1>Rich Web and co. Employee Directory</h1>
      <SearchForm
        search={employees.search}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
        resetSearch={resetSearch}
        handleSort={handleSort}
      />
      <List results={employees.filterResults} />
    </>
  );
}

export default ResultContainer;
