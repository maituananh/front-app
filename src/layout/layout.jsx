import "../css/layout.css";
import Sidebar from "./sidebar";

function Layout({ children }) {
  return (
    <>
      <header>
        <div className="logo">🍀 Pawn Service </div>
        <div className="search-bar">
          <input type="text" placeholder="Search.........." />
          <button> Search </button>
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
        <div className="phone"> 📞 xxx-xxxx-xxx </div>
      </nav>

      <Sidebar>
        {children}
      </Sidebar>
    </>
  );
}

export default Layout;
