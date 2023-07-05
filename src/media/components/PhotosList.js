import Button from "../../customComponents/comps/Button";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

function PhotosList({album}){
    const {data, error, isFetching} = useFetchPhotosQuery(album);
    const [addPhoto, result] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    let content
    if(isFetching){
        content = <Skeleton className="h-10 w-full" times={1} />
    }
    else if(error){
        content = <div>Error fetching photos</div>
    }
    else{
        content = data.map((photo) => {
            return <PhotosListItem key={photo.id} photo={photo} />
        });
    }

    return <div>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Photos in {album.title}</h3>
            <Button secondary loading={result.isLoading} onClick={handleAddPhoto}>
                + Add Photo
            </Button>
        </div>
        <div className="mx-8 flex-row flex-wrap justify-center">
            {content}
        </div>
    </div>
}

export default PhotosList;