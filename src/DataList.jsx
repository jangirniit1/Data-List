import React, { useEffect, useState } from "react";
import "./table.css";
import { userData } from "./constant.js";

function Table() {
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [table, setTable] = useState(userData);

  const handle = () => {
    if (type?.length > 0) {

      const filterTab = userData.filter((item) =>
        item.name.toLowerCase().includes(type)
      );
      setTable(filterTab);
    } else {
      setTable(userData);
    }
  };

  // const changeGender = () => {
  //   if (gender !== "All") {
  //     const filterData = userData.filter((item) => item.gender === gender);
  //     setTable(filterData);
  //   } else {
  //     setTable(userData);
  //   }
  // };
  function changeGender(e) {
    setGender(e.target.value);
    if (gender !== "All") {
      const filterData = userData.filter(
        (item) => item.gender === e.target.value
      );
      setTable(filterData);
    } else {
      setTable(userData);
    }
  }

  useEffect(() => {
    handle();
  }, [type]);

  // useEffect(() => {
  //   changeGender();
  // }, [gender]);

  return (
    <div className="main">
      <div className="box">
        <input
          id="search"
          type="text"
          value={type}
          placeholder="Search"
          onChange={(e) => {
            setType(e?.target?.value);
          }}
        />{" "}
        {type}
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          value={gender}
          //   onChange={(e) => {
          //     setGender(e?.target?.value);
          //   }}
          onChange={changeGender}
        >
          <option value="">select gender</option>
          <option value="All">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="active">Active last</label>
        <select name="active" id="active">
          <option value="">select year</option>
          <option value="All years">All years</option>
          <option value="2005">2005</option>
          <option value="2011">2011</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Order</th>
            <th>Total Sepet</th>
            <th>Gender</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {table?.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
              <td>{row.salary}</td>
              <td>{row.order}</td>
              <td>{row.totalSepet}</td>
              <td>{row.gender}</td>
              <td>{row.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;