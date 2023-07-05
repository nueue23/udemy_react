import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({photo}){
    const [removePhoto ] = useRemovePhotoMutation();
    const handleDelete = () => {
        removePhoto(photo);
    }
    return <div onClick={handleDelete} className="relative cursor-pointer m-2">
        <img src={photo.url} alt="random" className="h-20 w-20" />
        <div className="absolute inset-0 items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
            <GoTrashcan className="text-3xl" />
        </div>
    </div>
}

export default PhotosListItem;