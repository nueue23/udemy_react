import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { deleteUser } from "../store";
import Button from "../../customComponents/comps/Button";

function UsersListItem({user}){
    const [doDeleteUser, isDeletingUser, deleteUserErr] = useThunk(deleteUser);
    const handleDelete = ()=>{
        doDeleteUser(user);
    }

    return <div className='mb-2 border rounded'>
                <div className='flex p-2 justify-between items-center cursor-pointer'>
                    <div className="flex flex-row items-center justify-between">
                        <Button className="mr-3" danger loading={isDeletingUser} onClick={handleDelete} >
                            <GoTrashcan />
                        </Button>
                        {deleteUserErr && <div>Error deleting user</div> }
                        {user.name}
                    </div>
                </div>
            </div>;
}

export default UsersListItem;