import React, { useEffect, useState } from 'react';
import ItemCategory from './CategoryItem/index';
import CustomButton from './CustomButtonCategory';
import { PlusIcon} from 'lucide-react';
import DiscountCardProps from './DiscountCard/index';
import {ItemCategoryProps} from './CategoryItem/types';
interface Category {
    id: number;
    name: string;
    image: string;
    product_quantity: number;
    isactive: boolean;
}

    
const CategoryList: React.FC = () => {
    const [categories, setItemCategoryProps] = useState<ItemCategoryProps[]>([]); // Đặt kiểu cho state

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/data.json'); // Đường dẫn tới data.json
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json(); // Lấy dữ liệu
                setItemCategoryProps(data.categories); // Cập nhật state với data.categories
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);
    const handleButtonClick = () => {
        alert('Button clicked!');
    };
    return (
        <div className="category-list flex flex-wrap justify-center gap-4 ">
            <CustomButton onClick={handleButtonClick} className="text-blue-300 text-7xl font-bold ">
                 +
            </CustomButton>
                <DiscountCardProps/>
            {categories.length > 0 ? (
                categories.map((category) => (
                    <ItemCategory
                        name={category.name}
                        image={category.image}
                        product_quantity={category.product_quantity}
                        isactive={category.isactive}
                    />
                ))
            ) : (
                <p>No categories available.</p>
            )}
        </div>
    );
};

export default CategoryList;
