import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { deleteUser } from "../store";
import Button from "../../customComponents/comps/Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UsersListItem({user}){
    const [doDeleteUser, isDeletingUser, deleteUserErr] = useThunk(deleteUser);
    const handleDelete = ()=>{
        doDeleteUser(user);
    }
    const header = <>
                        <Button className="mr-3" danger loading={isDeletingUser} onClick={handleDelete} >
                            <GoTrashcan />
                        </Button>
                        {deleteUserErr && <div>Error deleting user</div> }
                        {user.name}
                    </>;
    return <ExpandablePanel header={header}>
                    <AlbumsList user={user} />
            </ExpandablePanel>;
}

export default UsersListItem;