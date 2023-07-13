function UsersList({users}){
    const renderedUsers = users.map(user => {
        return <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
    });
    return <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            {renderedUsers}
        </table>
    </div>;
}

export default UsersList;