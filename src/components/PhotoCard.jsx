import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function FluentEmojiFlatPinkHeart(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 32 32" {...props}><g fill="none"><path fill="#ff6aa0" d="M6 5.998c4.665-2.332 8.5.5 10 2.5c1.5-2 5.336-4.832 10-2.5c6 3 4.5 10.5 0 15c-2.195 2.196-6.062 6.063-8.89 8.214a1.764 1.764 0 0 1-2.187-.041C12.33 27.078 8.165 23.163 6 20.998c-4.5-4.5-6-12 0-15"></path><path fill="#e25c82" d="M16 8.498v3.05c1.27-2.685 4.426-6.27 9.658-5.713c-4.51-2.03-8.195.712-9.658 2.663m-4.054-2.963c-1.684-.587-3.72-.65-5.946.463c-6 3-4.5 10.5 0 15c2.165 2.165 6.33 6.08 8.923 8.173a1.764 1.764 0 0 0 2.186.04q.382-.29.786-.618c-2.855-2.143-6.861-5.519-9.036-7.463c-4.956-4.43-6.609-11.814 0-14.768a9.7 9.7 0 0 1 3.087-.827"></path><ellipse cx={23.477} cy={12.592} fill="#ff8fc1" rx={2.836} ry={4.781} transform="rotate(30 23.477 12.592)"></ellipse></g></svg>);
}

export function StreamlineColorDownloadBox1(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 14 14" {...props}><g fill="none"><path fill="#fff" d="M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13z"></path><path fill="#d7e0ff" d="M1.5 13.5a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1z"></path><path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M2.5 13.5h-1a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1h-1" strokeWidth={1}></path><path stroke="#4147d5" strokeLinecap="round" strokeLinejoin="round" d="M4.5 11L7 13.5L9.5 11M7 13.5v-6M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13zM7 .5v4" strokeWidth={1}></path></g></svg>);
}

const PhotoCard = ({photo}) => {
    const {id, title, imageUrl, category, likes, downloads} = photo;
    return (
        <Card className='rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='rounded-xl object-cover'
                />
                <Chip size="sm" color="accent" className='absolute right-2 top-2'>{category}</Chip>
            </div>
            
            <div>
                <h2 className='font-medium'>{title}</h2>
            </div>
            <div className='flex items-center justify-between mt-2'>
                <div className='flex gap-2 items-center'>
                    <FluentEmojiFlatPinkHeart/> {likes}
                </div>
                <Separator orientation="vertical" />
                <div className='flex gap-2 items-center'>
                    <StreamlineColorDownloadBox1/> {downloads}
                </div>    
            </div>
            <Link href={`/photos/${id}`}>
                <Button variant="primary" className="w-full">View</Button>
            </Link>
        </Card>

    );
};

export default PhotoCard;