// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories } from '../../app/categories/categorythunk';
// import {
//   fetchSubcategories,
//   createSubCategory,
//   updateSubCategory,
//   deleteSubCategory,
// } from '../../app/subcategories/subcategoryThunk';

// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import DataTable from 'react-data-table-component';

// const SubCategory = () => {
//   const dispatch = useDispatch();
//   const { categories } = useSelector((state) => state.categories);
//   const { subcategories, loading } = useSelector((state) => state.subcategories);

//   const [categoryId, setCategoryId] = useState('');
//   const [subName, setSubName] = useState('');
//   const [editData, setEditData] = useState(null);

//   // 🟢 Load all categories on mount
//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   // 🟢 Fetch subcategories for selected category
//   useEffect(() => {
//     if (categoryId) {
//       dispatch(fetchSubcategories(categoryId)); // Fetch only subcategories of selected category
//     }
//   }, [categoryId, dispatch]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!categoryId) {
//       toast.error('Please select a Category!');
//       return;
//     }
//     if (!subName.trim()) {
//       toast.error('Please enter Subcategory Name!');
//       return;
//     }

//     const data = { name: subName, category: categoryId };

//     const action = editData
//       ? updateSubCategory({ id: editData._id, data }) // ✅ Pass new categoryId if changed
//       : createSubCategory(data);

//     dispatch(action)
//       .unwrap()
//       .then(() => {
//         toast.success(editData ? 'Subcategory Updated!' : 'Subcategory Added!');
//         resetForm();
//         dispatch(fetchSubcategories(categoryId)); // Refresh subcategories for selected category
//       })
//       .catch((err) => {
//         toast.error(`Error: ${err.message || err}`);
//       });
//   };

//   const resetForm = () => {
//     setSubName('');
//     setCategoryId('');
//     setEditData(null);
//   };

//   const handleEdit = (sub) => {
//     setEditData(sub);
//     setSubName(sub.name);
//     setCategoryId(sub.categoryId); // ✅ Auto-select parent category
//   };

//   const handleDelete = (id) => {
//     if (window.confirm('Delete this subcategory?')) {
//       dispatch(deleteSubCategory(id))
//         .unwrap()
//         .then(() => {
//           toast.success('Subcategory Deleted!');
//           dispatch(fetchSubcategories(categoryId)); // Refresh after delete
//         })
//         .catch((err) => toast.error(`Error: ${err.message || err}`));
//     }
//   };

//   const columns = [
//     { name: 'Subcategory Name', selector: (row) => row.name },
//     {
//       name: 'Parent Category',
//       selector: (row) => {
//         const cat = categories.find((c) => c._id === row.categoryId);
//         return cat ? cat.name : 'Unknown';
//       },
//     },
//     {
//       name: 'Actions',
//       cell: (row) => (
//         <div className="flex gap-2">
//           <button
//             onClick={() => handleEdit(row)}
//             className="p-2 bg-blue-500 text-white rounded"
//           >
//             <FaEdit />
//           </button>
//           <button
//             onClick={() => handleDelete(row._id)}
//             className="p-2 bg-red-500 text-white rounded"
//           >
//             <FaTrash />
//           </button>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Subcategory Management</h2>
//       <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 shadow rounded">
//         {/* Category Dropdown */}
//         <select
//           value={categoryId}
//           onChange={(e) => setCategoryId(e.target.value)}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         >
//           <option value="">Select Category</option>
//           {categories.map((cat) => (
//             <option key={cat._id} value={cat._id}>
//               {cat.name}
//             </option>
//           ))}
//         </select>

//         {/* Subcategory Name */}
//         <input
//           type="text"
//           placeholder="Subcategory Name"
//           value={subName}
//           onChange={(e) => setSubName(e.target.value)}
//           className="w-full mb-3 px-3 py-2 border rounded"
//           required
//         />

//         <div className="flex justify-end gap-2">
//           <button
//             type="button"
//             onClick={resetForm}
//             className="px-4 py-2 bg-gray-400 text-white rounded"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-green-600 text-white rounded"
//           >
//             {editData ? 'Update' : 'Submit'}
//           </button>
//         </div>
//       </form>

//       <DataTable
//         columns={columns}
//         data={subcategories}
//         progressPending={loading}
//         pagination
//         highlightOnHover
//         responsive
//       />
//     </div>
//   );
// };

// export default SubCategory;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../app/categories/categorythunk";
import {
  fetchSubcategories,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from "../../app/subcategories/subcategoryThunk";

import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";

const SubCategory = () => {
  const dispatch = useDispatch();
  const { categories, loading: catLoading } = useSelector(
    (state) => state.categories
  );
  // console.log("Subc", categories);
  
  const { subcategories, loading: subLoading } = useSelector(
    (state) => state.subcategories
  );

  const [categoryId, setCategoryId] = useState("");
  const [subName, setSubName] = useState("");
  const [editData, setEditData] = useState(null);

  // 🟢 Load all categories on mount
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // 🟢 Auto-select first category when categories load
  useEffect(() => {
    if (categories.length && !categoryId) {
      setCategoryId(categories[0]._id);
    }
  }, [categories, categoryId]);

  // 🟢 Fetch subcategories for selected category
  useEffect(() => {
    if (categoryId) {
      dispatch(fetchSubcategories(categoryId));
    }
  }, [categoryId, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categoryId) {
      toast.error("Please select a Category!");
      return;
    }
    if (!subName.trim()) {
      toast.error("Please enter Subcategory Name!");
      return;
    }

    const data = { name: subName, category: categoryId };

    const action = editData
      ? updateSubCategory({ id: editData._id, data })
      : createSubCategory(data);

    dispatch(action)
      .unwrap()
      .then(() => {
        toast.success(editData ? "Subcategory Updated!" : "Subcategory Added!");
        resetForm();
        dispatch(fetchSubcategories(categoryId)); // Refresh subcategories
      })
      .catch((err) => {
        toast.error(`Error: ${err.message || err}`);
      });
  };

  const resetForm = () => {
    setSubName("");
    setEditData(null);
  };

  const handleEdit = (sub) => {
    setEditData(sub);
    setSubName(sub.name);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this subcategory?")) {
      dispatch(deleteSubCategory(id))
        .unwrap()
        .then(() => {
          toast.success("Subcategory Deleted!");
          dispatch(fetchSubcategories(categoryId)); // Refresh after delete
        })
        .catch((err) => toast.error(`Error: ${err.message || err}`));
    }
  };

  const columns = [
    { name: "Subcategory Name", selector: (row) => row.name, sortable: true },

    {
      name: "Parent Category",
      selector: (row) => {
        const cat = categories.find((c) => c._id === row.categoryId);
        console.log(cat, "cate");
        
        return cat ? cat.name : "Unknown";
      },
      
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(row)}
            className="p-2 bg-blue-500 text-white rounded"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDelete(row._id)}
            className="p-2 bg-red-500 text-white rounded"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const filteredSubcategories = categoryId
  ? subcategories.filter(
      (sub) =>
        sub.categoryId === categoryId || sub.category === categoryId
    )
  : [];


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Subcategory Management</h2>

      <form
        onSubmit={handleSubmit}
        className="mb-6 bg-white p-4 shadow rounded"
      >
        {/* Category Dropdown */}
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* Subcategory Name */}
        <input
          type="text"
          placeholder="Subcategory Name"
          value={subName}
          onChange={(e) => setSubName(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded"
          required
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            {editData ? "Update" : "Submit"}
          </button>
        </div>
      </form>

      <DataTable
        columns={columns}
        data={filteredSubcategories}
        progressPending={subLoading || catLoading}
        noDataComponent="No subcategories found for this category."
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default SubCategory;

