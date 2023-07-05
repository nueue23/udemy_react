import { GoTrashcan } from "react-icons/go";
import Button from "../../customComponents/comps/Button";
import ExpandablePanel from "./ExpandablePanel";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({album}){
    const [removeAlbum, results] = useRemoveAlbumMutation();
    const handleDelete = ()=>{
        removeAlbum(album);
    }
    const header = <>
            <Button className="mr-2" danger loading={results.isLoading} onClick={handleDelete} >
                            <GoTrashcan />
                        </Button>
            {album.title}
        </>
    return <ExpandablePanel header={header}>
                <PhotosList album={album} />
            </ExpandablePanel>
}
export default AlbumsListItem;