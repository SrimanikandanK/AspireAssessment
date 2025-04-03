import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers, usersReceivedData } from "./usersSlice";

export default function App() {
  const dispatch = useDispatch();
  const users = useSelector(usersReceivedData);

  useEffect(() => {
    if (users.length === 0) {
      const getData = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          const result = await response.json();
          console.log("Fetched Users:", result);
          dispatch(setUsers(result));
        } catch (e) {
          console.error("Fetch error:", e);
        }
      };
      getData();
    }
  }, [dispatch, users.length]);

  return (
    <div className="App">
      <h1>Aspire System</h1>

      {users.length > 0 ? (
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
