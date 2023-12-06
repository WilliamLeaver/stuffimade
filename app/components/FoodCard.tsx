
import React from 'react'
import Image from 'next/image'

interface Food {
    foodName: string;
    imagePath: string;
}

interface FoodCardProps {
    food: Food;
}
  
const FoodCard: React.FC<FoodCardProps> = ({ food }) => {

    return (
        <div className="card rounded-3xl bg-base-100 w-full h-full">
            <Image className="border-4 border-base-100 rounded-2xl" src={food.imagePath} width={500} height={500} alt="Breakfast hash" />
            <div className='flex justify-center p-5'>
                <h1 className="font-bold text-white">{food.foodName}</h1>
            </div>
        </div>
    )
}

export default FoodCard