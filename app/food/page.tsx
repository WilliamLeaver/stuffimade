import React from 'react'
import FoodCard from '../components/FoodCard'
import { getFoodData } from '@/lib/data';

const foodData = getFoodData();

interface Food {
    id: number;
    foodName: string;
    imagePath: string;
    foodLink: string;
}
  
const page = () => {
  return (
    <div className="grid sm:grid-cols-4 xl:grid-cols-5 gap-5">
        {foodData.map((food: Food) => 
            <FoodCard key={food.id} food={food}/>
        )}
        
    </div>

  )
}


export default page