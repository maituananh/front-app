import React from "react";
import "../css/import.css";

export default function User() {
  return (
    <div>
      <header>
        <div className="logo">🍀 Pawn Service</div>
        <div className="search-bar">
          <input type="text" placeholder="Search.........." />
          <button>Search</button>
        </div>
      </header>

      <nav>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">New Person</a>
          <a href="#">Pledged Items</a>
          <a href="#">Liquidated Items</a>
          <a href="#">Service Information</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="phone">📞 xxx-xxxx-xxx</div>
      </nav>

      <main className="container">
        <aside className="sidebar">
          <h3>Manage</h3>
          <ul>
            <li><a href="#">Admin</a></li>
            <li><a href="#">Order History</a></li>
            <li><a href="#">Notification</a></li>
            <li><a href="#">Product Liquidation</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Log-out</a></li>
          </ul>
        </aside>

        <section className="content">
          <div className="content-header">
            <h2>Users Management</h2>
            <div className="actions">
              <input type="text" placeholder="Search Users" />
              <button className="btn green">Search</button>
              <button className="btn">Import</button>
              <button className="btn outline">New Users</button>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>123</td>
                <td>123@gmail.com</td>
                <td>Nguyen</td>
                <td>A</td>
                <td>1234334</td>
                <td>25</td>
              </tr>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Holding Date</th>
                <th>Pick Up Date</th>
                <th>Price</th>
                <th>Expired On</th>
              </tr>
              <tr>
                <td>A</td>
                <td>Xe Vision</td>
                <td>1-1-1</td>
                <td>5-1-1</td>
                <td>14 Million VND</td>
                <td>4 Days</td>
              </tr>
            </tbody>

            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Holding Date</th>
                <th>Pick Up Date</th>
                <th>Price</th>
                <th>Expired On</th>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
            </tbody>

            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Holding Date</th>
                <th>Pick Up Date</th>
                <th>Price</th>
                <th>Expired On</th>
              </tr>
              <tr>
                <td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
