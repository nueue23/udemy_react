import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from '../../customComponents/comps/Button';


function UsersList(){
    const dispatch = useDispatch();
    const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    const [isCreatingUser, setIsCreatingUser] = useState(false);
    const [loadingUsersErr, setLoadingUsersErr] = useState(null);
    const [addUserErr, setAddUserErr] = useState(null);
    const { data } = useSelector((state)=>{
        return state.users;
    })
    useEffect(()=>{
        setIsLoadingUsers(true);
        dispatch(fetchUsers())
            .unwrap()
            .catch((error)=>{
                setLoadingUsersErr(error)
            })
            .finally(()=>{
                setIsLoadingUsers(false);
            });
    }, [dispatch]);
    const handleUserAdd = ()=> {
        setIsCreatingUser(true);
        dispatch(addUser())
            .unwrap()
            .catch(err=>setAddUserErr(err))
            .finally(() => setAddUserErr(false));
    };
    if(isLoadingUsers){
        return <div><Skeleton times={6} className='h-10 w-full' /></div>
    }
    if(loadingUsersErr){
        return <div>Error fetching data</div>
    }
    const renderedUsers = data.map((user) => {
        return <div key={user.id} className='mb-2 border rounded'>
            <div className='flex p-2 justify-between items-center cursor-pointer'>
                {user.name}
            </div>
        </div>
    });
    return <div>
        <div className="flex flex-row justify-between m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button secondary onClick={handleUserAdd}>Add User</Button>
        </div>
        {renderedUsers}
    </div>;
}

export default UsersList;