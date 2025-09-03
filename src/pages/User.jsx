import "../css/user.css";

export default function User() {
  return (
    <div>
      <div className="content">
        <h1>Info Customers</h1>
        <div className="grid">
          <div className="profile">
            <img src="person.png" className="avatar" alt="person" />
            <p>
              <b>Name:</b> A
            </p>
            <p>
              <b>Age:</b> 25
            </p>
            <p>
              <b>Email:</b> 123@gmail.com
            </p>
            <p>
              <b>Phone:</b> 938822
            </p>
            <p>
              <b>ID:</b> 12345678
            </p>
            <div className="buttons">
              <button>Motorbike</button>
              <button>Mobile Phone</button>
              <button>Gold</button>
              <button>History</button>
            </div>
          </div>
          <div className="items">
            <div className="card">
              <img src="vision.png" alt="vision" />
              <p className="title">Honda Vision 150i</p>
              <p>14 million VND</p>
              <p className="price">$0</p>
            </div>
            <div className="card">
              <img src="iphone.png" alt="iphone" />
              <p className="title">iPhone 14</p>
              <p>13 million VND</p>
              <p>$0</p>
            </div>
            <div className="card">
              <img src="vision.png" alt="elegant" />
              <p className="title">Honda Elegant 110</p>
              <p>10 million VND</p>
              <p className="price">$0</p>
            </div>
          </div>
          <div className="detail">
            <img src="vision.png" alt="detail" />
            <p>
              <b>Name:</b> A
            </p>
            <p>
              <b>Price:</b> 14 million VND
            </p>
            <p>
              <b>Holding Days:</b> 1-1-1
            </p>
            <p>
              <b>Pick Up Date:</b> 5-1-1
            </p>
            <p>
              <b>Holder:</b> A
            </p>
            <p>
              <b>Type:</b> Xe Vision
            </p>
            <p>
              <b>Expired on:</b> 4 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


