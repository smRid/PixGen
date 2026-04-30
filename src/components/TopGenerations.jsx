import PhotoCard from './PhotoCard';

const TopGenerations = async() => {
    const res = await fetch('https://pix-gen-mu.vercel.app/data.json');
    const photos = await res.json();
    const data = photos.slice(0, 9);
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>Top Generations</h1>
            <div className='grid grid-cols-4 gap-6'>     
            {
                data.map((photo) => <PhotoCard key={photo.id} photo={photo} />)
                
            }
            </div>
        </div>
    );
};

export default TopGenerations;