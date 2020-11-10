import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// COMPONENTS
import UserTable from './CRUD1/components/UserTable';
import AddUserForm from './CRUD1/components/AddUserForm';
import EditUserForm from './CRUD1/components/EditUserForm';


const Crud1 = () => {

  const usersData = [
    {
      id: uuidv4(),
      name: "Juan",
      username: "JuanitoAlimañaa"
    },
    {
      id: uuidv4(),
      name: "Daniela",
      username: "Danielitrix"
    },
    {
      id: uuidv4(),
      name: "Maikol",
      username: "Manguila"
    },
  ]

  const info = {
    id: null,
    name: "",
    username: ""
  }

  const [users, setUsers] = useState(usersData);

  const [edit, setEdit] = useState(false)

  const [infoUser, setInfoUser] = useState(info);

  //Add user

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers(users.concat(user))
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const editUser = (user) => {
    setEdit(true)
    setInfoUser(user)
  }

  const updateUser = (id, updatedUser) => {
    setEdit(false)
    setUsers(users.map(user => user.id === id ? updatedUser : user))
  }

  return (
    <div>
      <h1>CRUD</h1>
      <div className="grid grid-cols-2">
        <div className="col-span-2 sm:col-span-1">
          {
            edit ?
              <div>
                <h1>Edit user</h1>
                <EditUserForm infoUser={infoUser} updateUser={updateUser} />
              </div>

              :
              <div>
                <h1>Add user</h1>
                <AddUserForm addUser={addUser} />
              </div>
          }


        </div>
        <div className="col-span-2 sm:col-span-1">
          <h1>View users</h1>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
}

export default Crud1;
