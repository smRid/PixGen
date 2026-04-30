import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async () => {
    const res = await fetch('https://pix-gen-mu.vercel.app/data.json');
    const allPhotos = await res.json();
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>All Photos</h1>
            <div className='grid grid-cols-4 gap-6'>     
            {
                allPhotos.map((photo) => <PhotoCard key={photo.id} photo={photo} />)
                
            }
            </div>
        </div>
    );
};

export default AllPhotosPage;