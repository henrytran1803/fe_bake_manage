import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar, { SidebarItem } from '../components/SideBar';
import { HomeIcon, BellIcon, BoxIcon, CirclePercentIcon, UserIcon, FactoryIcon, ShoppingCartIcon } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string>('home'); // Trạng thái để theo dõi item đang active

  const handleSidebarItemClick = (route: string) => {
    setActiveItem(route); // Đặt route đang nhấn làm active
    navigate(route); // Điều hướng đến route
  };
  return (
    <div className="flex h-screen"> {/* Flex với chiều cao đầy đủ */}
       <Sidebar>
        <SidebarItem icon={<HomeIcon />} text="Home" active={activeItem === 'home'} route="/home" onClick={handleSidebarItemClick} />
        <SidebarItem icon={<UserIcon />} text="User" active={activeItem === 'user'} route="/user" onClick={handleSidebarItemClick} />
        <SidebarItem icon={<ShoppingCartIcon />} text="Cart" active={activeItem === 'cart'} route="/cart" onClick={handleSidebarItemClick} />
        <SidebarItem icon={<BoxIcon />} text="Category" active={activeItem === 'category'} route="/category" onClick={handleSidebarItemClick} />
        <SidebarItem icon={<CirclePercentIcon />} text="Discount" active={activeItem === 'discount'} route="/discount" onClick={handleSidebarItemClick} />
        <SidebarItem icon={<FactoryIcon />} text="Warehouse" active={activeItem === 'warehouse'} route="/warehouse" onClick={handleSidebarItemClick} />
        <SidebarItem icon={<BellIcon />} text="Notifications" active={activeItem === 'notifications'} route="/notifications" onClick={handleSidebarItemClick} />
      </Sidebar>
      
      <main className="flex-1 p-5">
        <Outlet /> 
      </main>
    </div>
  );
};

export default HomePage;
