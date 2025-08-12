import { useEffect, useState } from "react";
import dataService from "../service/dataService";
import "../css/home.css";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataService.get("/products").then((response) => {
      setData(response);
    });
  });

  return (
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </table>
  );
}

export default Home;
