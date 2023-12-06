
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface Food {
    foodName: string;
    imagePath: string;
    foodLink: string;
}

interface FoodCardProps {
    food: Food;
}
  
const FoodCard: React.FC<FoodCardProps> = ({ food }) => {

    return (
        <div className="card rounded-3xl bg-base-100 w-full h-full">
            <Image className="border-4 border-base-100 rounded-2xl" src={food.imagePath} width={500} height={500} alt="Breakfast hash" />
            <div className='flex justify-center p-5'>
                {food.foodLink == "" ? (
                    <h1 className="font-bold text-white bg-slate-700 rounded-2xl p-5">{food.foodName}</h1>
                ) : (
                    <Link className="font-bold text-white bg-teal-700 rounded-2xl p-5 focus:animate-pop" href={food.foodLink}>{food.foodName}</Link>
                )}
                
            </div>
        </div>
    )
}

export default FoodCard