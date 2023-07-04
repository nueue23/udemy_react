import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Skeleton from "./Skeleton";
import Button from '../../customComponents/comps/Button';
import UsersListItem from './UsersListItem';

function UsersList(){
    const [doFetchUsers, isLoadingUsers, loadingUsersErr] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserErr] = useThunk(addUser);
    const { data } = useSelector((state)=>{
        return state.users;
    })
    useEffect(()=>{
        doFetchUsers();
    }, [doFetchUsers]);
    const handleUserAdd = ()=> {
        doCreateUser();
    };
    let content;
    if(isLoadingUsers){
        content = <div><Skeleton times={6} className='h-10 w-full' /></div>
    }else if(loadingUsersErr){
        content = <div>Error fetching data</div>
    }
    else{
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />
        });
    } 
    return <div>
        <div className="flex flex-row justify-between items-center m-3">
            <h1 className="m-2 text-xl">Users</h1>
            <Button loading={isCreatingUser} secondary onClick={handleUserAdd}>
                Add User
            </Button>
            {
                creatingUserErr && 'Eror Creating User'
            }
        </div>
        {content}
    </div>;
}

export default UsersList;