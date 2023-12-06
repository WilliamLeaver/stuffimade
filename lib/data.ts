import fs from 'fs';
import path from 'path';

export const getFoodData = () => {
  const filePath = path.join(process.cwd(), '/app/food/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const foodData = JSON.parse(jsonData);
  return foodData;
};