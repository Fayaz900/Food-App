import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddItems() {
  // State for categories
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: ''
  });

  // State for items
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    price: '',
    categoryId: ''
  });

  // Form states
  const [activeTab, setActiveTab] = useState('categories');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:3000/api/getAllcategories');
      setCategories(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch categories');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        'http://localhost:3000/api/Createcategories',
        newCategory
      );
      setCategories([...categories, response.data]);
      setNewCategory({ name: '', description: '' });
      setError(null);
    } catch (err) {
      setError('Failed to create category');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleItemSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        'http://localhost:3000/api/Createitems',
        newItem
      );
      setItems([...items, response.data]);
      setNewItem({
        name: '',
        description: '',
        price: '',
        categoryId: newItem.categoryId // Keep the same category selected
      });
      setError(null);
    } catch (err) {
      setError('Failed to create item');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Menu Management</h1>
      
      {/* Navigation Tabs */}
      <div className="flex border-b mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'categories' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('categories')}
        >
          Categories
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'items' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('items')}
        >
          Items
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New Category</h2>
          <form onSubmit={handleCategorySubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="categoryName">
                Category Name
              </label>
              <input
                type="text"
                id="categoryName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="categoryDescription">
                Description
              </label>
              <textarea
                id="categoryDescription"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="3"
                value={newCategory.description}
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Create Category'}
            </button>
          </form>

          <h2 className="text-2xl font-semibold mb-4">Existing Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category._id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-lg">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Items Tab */}
      {activeTab === 'items' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add New Item</h2>
          <form onSubmit={handleItemSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="itemCategory">
                Category
              </label>
              <select
                id="itemCategory"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={newItem.categoryId}
                onChange={(e) => setNewItem({ ...newItem, categoryId: e.target.value })}
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="itemName">
                Item Name
              </label>
              <input
                type="text"
                id="itemName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="itemPrice">
                Price
              </label>
              <input
                type="number"
                id="itemPrice"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                min="0"
                step="0.01"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="itemDescription">
                Description
              </label>
              <textarea
                id="itemDescription"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows="3"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Create Item'}
            </button>
          </form>

          <h2 className="text-2xl font-semibold mb-4">Existing Items</h2>
          <div className="space-y-4">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item._id} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <span className="font-bold">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Category: {categories.find(c => c._id === item.categoryId)?.name || 'Unknown'}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items created yet</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}