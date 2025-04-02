import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiPlus, FiRefreshCw, FiChevronRight, FiGrid, FiList } from 'react-icons/fi';

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
    category: ''
  });

  // Form states
  const [activeTab, setActiveTab] = useState('categories');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Fetch all categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch items when items tab becomes active
  useEffect(() => {
    if (activeTab === 'items') {
      fetchItems();
    }
  }, [activeTab]);

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

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('http://localhost:3000/api/Getitems');
      setItems(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch items');
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
      await fetchItems();
      setNewItem({
        name: '',
        description: '',
        price: '',
        category: newItem.category
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
    <div className="container mx-auto p-4 md:p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Menu Management Dashboard</h1>
      
      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`flex items-center py-3 px-6 font-medium text-sm ${activeTab === 'categories' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('categories')}
        >
          <FiGrid className="mr-2" />
          Categories
        </button>
        <button
          className={`flex items-center py-3 px-6 font-medium text-sm ${activeTab === 'items' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('items')}
        >
          <FiList className="mr-2" />
          Menu Items
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <FiPlus className="mr-2 text-blue-500" />
              Add New Category
            </h2>
            <form onSubmit={handleCategorySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="categoryName">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="categoryDescription">
                  Description
                </label>
                <textarea
                  id="categoryDescription"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  rows="3"
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full md:w-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition shadow-md"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <FiRefreshCw className="animate-spin mr-2" />
                    Creating...
                  </>
                ) : (
                  <>
                    <FiPlus className="mr-2" />
                    Create Category
                  </>
                )}
              </button>
            </form>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Existing Categories</h2>
              <button 
                onClick={fetchCategories}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <FiRefreshCw className="mr-1" /> Refresh
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categories.map((category) => (
                <div key={category._id} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition">
                  <div className="flex items-start">
                    <div className="p-3 bg-blue-50 rounded-lg mr-4">
                      
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{category.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Items Tab */}
      {activeTab === 'items' && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <FiPlus className="mr-2 text-blue-500" />
              Add New Menu Item
            </h2>
            <form onSubmit={handleItemSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="itemCategory">
                    Category
                  </label>
                  <select
                    id="itemCategory"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
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
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="itemName">
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="itemName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="itemPrice">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="itemPrice"
                    className="w-full pl-8 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="itemDescription">
                  Description
                </label>
                <textarea
                  id="itemDescription"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  rows="3"
                  value={newItem.description}
                  onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full md:w-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition shadow-md"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <FiRefreshCw className="animate-spin mr-2" />
                    Creating...
                  </>
                ) : (
                  <>
                    <FiPlus className="mr-2" />
                    Create Item
                  </>
                )}
              </button>
            </form>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Menu Items</h2>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <FiGrid />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <FiList />
                </button>
                <button 
                  onClick={fetchItems}
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 ml-2"
                >
                  <FiRefreshCw className="mr-1" /> Refresh
                </button>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.length > 0 ? (
                  items.map((item) => (
                    <div key={item._id} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                        <span className="font-bold text-blue-600">${item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        
                        <span className="ml-2">
                          {categories.find(c => c._id === item.category)?.name || 'Unknown'}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <div className="text-gray-400 mb-4">No items created yet</div>
                    <button 
                      onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-blue-500 hover:text-blue-700 flex items-center justify-center mx-auto"
                    >
                      <FiPlus className="mr-1" /> Add your first item
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {items.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item._id} className="p-4 hover:bg-gray-50 transition">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="p-2 bg-blue-50 rounded-lg mr-4">
                             
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-800">{item.name}</h3>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="font-bold text-blue-600 mr-4">${item.price}</span>
                            <FiChevronRight className="text-gray-400" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    No items created yet
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}