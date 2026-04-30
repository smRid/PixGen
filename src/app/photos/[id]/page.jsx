import { Chip } from "@heroui/react";
import Image from "next/image";

const PhotoDetailsPage = async({params}) => {
    const {id} = await params;
    const res = await fetch('https://pix-gen-mu.vercel.app/data.json');
    const allPhotos = await res.json();

    const currentPhoto = allPhotos.find(photo => photo.id == id);
    console.log(currentPhoto);
    const {title, imageUrl, prompt, category, model, tags, likes, downloads} = currentPhoto;
    return (
        <div className="mx-auto">
            <div className="flex gap-4">
                <div className="relative aspect-auto w-200 h-200">
                    <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover'
                />
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl">Title: {title}</h1>
                    <p className="text-2xl">Category: {category}</p>
                    <span className="text-xl">Model: {model}</span>
                    <div className="flex">
                    {
                        tags.map((tag, index) => <Chip key={index} color="danger" className="mr-2">{tag}</Chip>)
                    }
                    </div>

                </div>

            </div>
            
             
        </div>
    );
};

export default PhotoDetailsPage;