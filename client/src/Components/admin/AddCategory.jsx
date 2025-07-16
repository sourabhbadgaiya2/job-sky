import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, createCategory, deleteCategory, updateCategory } from '../../app/categories/categorythunk';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('image', image);

    const action = editData
      ? updateCategory({ id: editData._id, data })
      : createCategory(data);

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success(editData ? 'Category Updated!' : 'Category Added!');
        resetForm();
        dispatch(fetchCategories());
      })
      .catch((err) => {
        toast.error(`Error: ${err.message || err}`);
      });
  };

  const resetForm = () => {
    setName('');
    setImage(null);
    setEditData(null);
    setShowForm(false);
  };

  const handleEdit = (row) => {
    setEditData(row);
    setName(row.name);
    setImage(null);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this category?')) {
      dispatch(deleteCategory(id))
        .unwrap()
        .then(() => {
          toast.success('Category Deleted!');
          dispatch(fetchCategories());
        })
        .catch((err) => {
          toast.error(`Error: ${err.message || err}`);
        });
    }
  };

  const columns = [
    { name: 'Name', selector: (row) => row.name },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex gap-2">
          <button onClick={() => handleEdit(row)} className="p-2 bg-blue-500 text-white rounded">
            <FaEdit />
          </button>
          <button onClick={() => handleDelete(row._id)} className="p-2 bg-red-500 text-white rounded">
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Category Management</h2>
      <button onClick={() => setShowForm(true)} className="mb-4 px-4 py-2 bg-green-600 text-white rounded">
        <FaPlus className="inline mr-2" /> Add Category
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 shadow rounded">
          <h3 className="text-xl mb-4">{editData ? 'Edit Category' : 'Add Category'}</h3>
          <input
            type="text"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 px-3 py-2 border rounded"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full mb-3 px-3 py-2 border rounded"
          />
          <div className="flex justify-between">
            <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-400 text-white rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
              {editData ? 'Update' : 'Submit'}
            </button>
          </div>
        </form>
      )}

      <DataTable
        columns={columns}
        data={categories}
        progressPending={loading}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default AddCategory;
