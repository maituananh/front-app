import "../css/sidebar.css";

function Sidebar({ children }) {
  return (
    <div className="container">
      <aside className="sidebar">
        <h2>List Items </h2>
        <ul>
          <li>Motorbike</li>
          <li>Smart Phone</li>
          <li>Phone</li>
          <li>Apple Watch</li>
        </ul>
      </aside>

      {children}
    </div>
  );
}

export default Sidebar;
