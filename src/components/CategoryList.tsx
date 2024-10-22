import React, { useEffect, useState } from 'react';
import ItemCategory from './ItemCategory';

interface Category {
    id: number;
    name: string;
    image: string;
    product_quantity: number;
    isactive: boolean;
}

const CategoryList: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]); // Đặt kiểu cho state

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/data.json'); // Đường dẫn tới data.json
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json(); // Lấy dữ liệu
                setCategories(data.categories); // Cập nhật state với data.categories
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="category-list flex flex-wrap justify-center gap-4 ">
            {categories.length > 0 ? (
                categories.map((category) => (
                    <ItemCategory
                        key={category.id} // Thêm key cho mỗi ItemCategory
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
