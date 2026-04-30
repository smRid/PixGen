"use client";
import { useParams } from "next/navigation";

const PhotoDetailsPage = () => {
    const {id} = useParams();
    return (
        <div>
            Photo Details Page : {id}
        </div>
    );
};

export default PhotoDetailsPage;