import { useState, useEffect } from "react";
import styles from "../css/UserList.module.css";
import cx from "classnames";

export default function UserList() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    age: "",
    email: "",
    cardId: "",
    phone: ""
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Endpoint GET thường không cần xác thực (như bạn đã test trên Postman)
      const res = await fetch("http://localhost:8080/api/users");
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      } else {
        console.error("Lỗi khi load users:", res.status);
      }
    } catch (err) {
      console.error("Không thể kết nối tới server khi load users:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddUser = async () => {
    // ⭐️ BƯỚC FIX LỖI 401: LẤY VÀ ĐÍNH KÈM TOKEN
    const token = localStorage.getItem('authToken'); // HOẶC tên key bạn dùng để lưu token sau khi đăng nhập

    if (!token) {
      alert("Phiên làm việc đã hết hạn. Vui lòng đăng nhập lại.");
      return; 
    }

    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // ⭐️ ĐÃ THÊM HEADER XÁC THỰC
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 401) {
        alert("Lỗi xác thực (401)! Vui lòng đăng nhập lại.");
      } else if (response.ok) {
        alert("Thêm người dùng thành công!");
        setShowForm(false);
        setFormData({ username: "", password: "", name: "", age: "", email: "", cardId: "", phone: "" });
        fetchUsers(); 
      } else {
        const errorText = await response.text();
        alert(`Lỗi khi thêm người dùng: ${response.status} - ${errorText}`);
      }
    } catch (err) {
      console.error("Lỗi kết nối:", err);
      alert("Không thể kết nối tới server!");
    }
  };

  return (
    <main className={cx(styles.container)}>
      {!showForm ? (
        <section className={cx(styles.content)}>
          <div className={cx(styles.header)}>
            <h2>Users Management</h2>
            <button 
              className={cx(styles.btn, styles.primary)} 
              onClick={() => setShowForm(true)}
            >
              New User
            </button>
          </div>

          <table className={cx(styles.table)}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Card ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((u, i) => (
                  <tr key={u.id || i}>
                    <td>{u.id}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>{u.name}</td>
                    <td>{u.phone}</td>
                    <td>{u.age}</td>
                    <td>{u.cardId}</td>
                    <td className={styles.actionsCell}>
                      <button className={cx(styles.btn, styles.edit)}>Edit</button>
                      <button className={cx(styles.btn, styles.delete)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">Chưa có dữ liệu người dùng nào.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      ) : (
        <section className={cx(styles.form, styles.content)}>
          <h2>Thêm Người Dùng Mới</h2>
          
          <div className={styles.inputGroup}>
            <input name="username" type="text" placeholder="Username" onChange={handleChange} value={formData.username} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
            <input name="name" type="text" placeholder="Full Name" onChange={handleChange} value={formData.name} />
            <input name="age" type="number" placeholder="Age" onChange={handleChange} value={formData.age} />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            <input name="cardId" type="text" placeholder="Card ID (CMND/CCCD)" onChange={handleChange} value={formData.cardId} />
            <input name="phone" type="text" placeholder="Phone Number" onChange={handleChange} value={formData.phone} />
          </div>

          <div className={cx(styles.actions, styles.formActions)}>
            <button className={cx(styles.btn, styles.primary)} onClick={handleAddUser}>
              Save User
            </button>
            <button className={cx(styles.btn, styles.secondary)} onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </section>
      )}
    </main>
  );
}