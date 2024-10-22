// pages/LoginPage.tsx
import React from 'react';
import Login from '../components/Login/index';
import CategoryList from '../components/CategoryList';
import AlertCustom from '../components/AlertCustom';
import SearchBar from '../components/SearchBar';

const LoginPage: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Xử lý logic đăng nhập ở đây
    console.log('Login attempt:', { username, password });
  };
  const handleEdit = (): void => {
    console.log('Edit clicked');
  };

  const handleDelete = (): void => {
    console.log('Delete clicked');
  };
  const handleSearch = (value: string) => {
    console.log('Search:', value);
  };

  const handleSort = (option: string) => {
    console.log('Sort by:', option);
  };

  const handleFilter = (filters: Record<string, boolean>) => {
    console.log('Filters:', filters);
  };
  return (
    <div className="min-h-screen bg-[#FAF9F4]">
      <Login onSubmit={handleLogin} />
      <AlertCustom
      title="Typed Alert"
      isHidden = {false}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
        <SearchBar
      onSearch={handleSearch}
      onSort={handleSort}
      onFilter={handleFilter}
    />
      <CategoryList />
    </div>
  );
};

export default LoginPage;