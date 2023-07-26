import React, { useState, useEffect } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:/transactions");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data!", error);
      }
    };

    fetchData(); // Move the fetchData() function call inside the useEffect hook
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  return (
    <div>
      <h1>Data Fetching Examples:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
