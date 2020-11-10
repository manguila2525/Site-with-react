import React from 'react';

const UserTable = ({ users, deleteUser, editUser }) => {
  return (
    <table>
      <thead className="border-b-2">
        <tr className="grid grid-cols-3 gap-4">
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.length > 0 ?
            users.map(item => (
              <tr key={item.id} className="grid grid-cols-3 gap-4  border-b-2 py-2">
                <td>{item.name} </td>
                <td>{item.username} </td>
                <td>
                  <button
                    className="
                      rounded 
                      bg-blue-400
                      shadow-md 
                      px-3 py-2 
                      mr-1"
                    onClick={() => editUser(item)}
                  >Edit</button>
                  <button className="rounded bg-red-400 shadow-md px-3 py-2 mr-1" onClick={() => deleteUser(item.id)}>Delete</button>
                </td>
              </tr>
            ))
            :
            <tr className="grid grid-cols-3 gap-4  border-b-2 py-2">
              No hay datos
          </tr>
        }
      </tbody>
    </table>
  );
}

export default UserTable;
