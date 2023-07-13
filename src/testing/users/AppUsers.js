import { useState } from 'react';
import UserForm from './UserForm';
import UsersList from './UsersList';
function AppUsers(){
    const [users, setUsers] = useState([]);
    const addUser = (user)=>{
        setUsers([...users, user]);
    }
    return <div>
        <UserForm onSubmit={addUser} />
        <UsersList users={users} />
    </div>;
}

export default AppUsers;