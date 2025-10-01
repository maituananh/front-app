// import styles from "../css/AddUser.module.css";
// import cx from "classnames";

// export default function NewPersonForm() {
//   return (
//     <div className={cx(styles.newPersonContainer)}>
//       <div className={cx(styles.avatar)}>
//         <img
//           src="vite.svg"
//           alt="user avatar"
//         />
//       </div>

//       <form className={cx(styles.personForm)}>
//         <input type="text" placeholder="Email" />
//         <input type="text" placeholder="Name" />
//         <input type="number" placeholder="Age" />
//         <input type="text" placeholder="Phone" />
//         <input type="text" placeholder="Id" />
//         <input type="text" placeholder="Type" />

//         <div className={cx(styles.formActions)}>
//           <button type="button">Next</button>
//           <button type="button">Update</button>
//           <button type="button">Delete</button>
//         </div>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import styles from "../css/UserList.module.css";
import cx from "classnames";

export default function NewPerson() {
  const [step, setStep] = useState(1);

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    age: "",
    phone: "",
    id: "",
    type: ""
  });

  const [itemData, setItemData] = useState({
    itemName: "",
    price: "",
    startDate: "",
    endDate: "",
    type: "",
    image: null
  });

  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleItemChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setItemData({ ...itemData, image: e.target.files[0] });
  };

  const handleNext = () => {
    if (!userData.name || !userData.email) {
      alert("Vui lòng nhập đầy đủ thông tin khách hàng!");
      return;
    }
    setStep(2);
  };

  const handleAdd = async () => {
    const formData = new FormData();
    formData.append("user", JSON.stringify(userData));
    formData.append("item", JSON.stringify(itemData));
    if (itemData.image) {
      formData.append("image", itemData.image);
    }

    try {
      const res = await fetch("http://localhost:8080/api/products", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        alert("Thêm thành công!");
      } else {
        alert("Lỗi khi thêm dữ liệu!");
      }
    } catch (err) {
      console.error(err);
      alert("Không thể kết nối tới server!");
    }
  };

  return (
    <main className={cx(styles.container)}>
      {step === 1 ? (
        <section className={cx(styles.form)}>
          <h2>Nhập Thông Tin Khách Hàng</h2>
          <input name="email" placeholder="Email" onChange={handleUserChange} />
          <input name="name" placeholder="Name" onChange={handleUserChange} />
          <input name="age" type="number" placeholder="Age" onChange={handleUserChange} />
          <input name="phone" placeholder="Phone" onChange={handleUserChange} />
          <input name="id" placeholder="ID" onChange={handleUserChange} />
          <input name="type" placeholder="Type" onChange={handleUserChange} />

          <button onClick={handleNext}>Next</button>
        </section>
      ) : (
        <section className={cx(styles.form)}>
          <h2>Nhập Thông Tin Đồ Cầm</h2>

          <div className={cx(styles.userInfo)}>
            <p><b>Name:</b> {userData.name}</p>
            <p><b>Email:</b> {userData.email}</p>
            <p><b>Phone:</b> {userData.phone}</p>
            <p><b>Age:</b> {userData.age}</p>
            <p><b>ID:</b> {userData.id}</p>
            <p><b>Type:</b> {userData.type}</p>
          </div>

          <input name="itemName" placeholder="Tên đồ cầm" onChange={handleItemChange} />
          <input name="price" placeholder="Giá trị" onChange={handleItemChange} />
          <input name="type" placeholder="Loại" onChange={handleItemChange} />
          <input name="startDate" type="date" onChange={handleItemChange} />
          <input name="endDate" type="date" onChange={handleItemChange} />
          <input type="file" onChange={handleImageUpload} />

          <button onClick={handleAdd}>Add</button>
        </section>
      )}
    </main>
  );
}
