import React, { useState } from 'react';
import { Dot, LayoutGrid } from 'lucide-react';

interface ItemCategoryProps {
    name: string;
    image: string;
    product_quantity: number;
    isactive: boolean;
}

const ItemCategory: React.FC<ItemCategoryProps> = ({ name, image, product_quantity, isactive }) => {
    const [imageLoaded, setImageLoaded] = useState(true); // State to track if the image is loaded

    return (
        <div className={`flex flex-col items-start min-w-[150px] max-w-[250px] h-full rounded-[24px] bg-white overflow-hidden item-category ${isactive ? 'active' : 'inactive'}`}>
            <div className="p-4">
            <div className="item-category-header flex items-center space-x-2" >
                <div className="flex items-center space-x-2">
                    <LayoutGrid className="w-5 h-5 text-gray-300" />
                    <span className="category-label text-gray-300">Category</span>
                </div>
                {isactive ? (
                    <Dot className="w-10 h-10 text-green-500 ml-2" />
                ) : (
                    <Dot className="w-10 h-10 text-red-500 ml-2" />
                )}
            </div>
            <h2 className="category-name text-l font-bold text-left">{name}</h2>
            </div>
            <div  className = "w-full">
            {imageLoaded ? (
                <img
                    src={image}
                    alt={name}
                    className="category-image w-full min-h-[100px] max-h-[200px] object-cover item-center"
                    onError={() => setImageLoaded(false)} // Set imageLoaded to false if the image fails to load
                />
            ) : (
                <div className="bg-gray-300 min-w-[100px] max-w-[200px] min-h-[100px] max-h-[200px] rounded-lg animate-pulse item-center" />
            )}
            </div>
            <div className="flex items-start p-3">
                <p className="text-gray-300 product-quantity">{`+${product_quantity} products`}</p>
            </div>
        </div>
    );
    
};

export default ItemCategory;
