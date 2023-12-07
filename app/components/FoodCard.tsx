
import React, { Suspense, ReactNode } from 'react'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'

interface Food {
    foodName: string;
    imagePath: string;
    foodLink: string;
}

interface FoodCardProps {
    food: Food;
}

interface ImageWithFallbackProps extends ImageProps {
    fallback: ReactNode;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallback, ...props }) => {
    let image = <Image src={src} {...props} />;
    if (typeof src === 'string' && src.startsWith('/static/')) {
      // If the image is a static asset, display the fallback immediately
      return fallback;
    }
  
    // If the image is not static, use React Suspense
    return <Suspense fallback={fallback}>{image}</Suspense>;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {

    return (
        <div className="card rounded-3xl bg-base-100 w-full h-full">
            <div className="relative h-full">
                <ImageWithFallback className="border-4 border-base-100 rounded-2xl" src={food.imagePath} width={500} height={500} alt="Food Image Failed to Load 🙄😭" placeholder="empty" fallback={<div className="border-4 border-base-100 skeleton bg-slate-700 rounded-2xl p-4 w-full h-full"></div>}/>
            </div>
            <div className='flex p-5 text-center items-center h-full'>
                {food.foodLink == "" ? (
                    <h1 className="font-bold text-white bg-slate-700 rounded-2xl p-4 w-full">{food.foodName}</h1>
                ) : (
                    <Link className="font-bold text-white bg-teal-700 rounded-2xl p-4 focus:animate-pop w-full h-full" href={food.foodLink}>{food.foodName}</Link>
                )}        
            </div>
        </div>
    )
}

export default FoodCard