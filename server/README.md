# 🛡️ Auth API Routes – Express.js


# 🖥️ Job Category Management – Frontend

A frontend web interface to manage **Job Categories** such as **IT, Finance, Healthcare**, etc. Built using **React.js**, and connected to a RESTful backend API.

---

## 🎯 Features

* 📝 Add new job categories
* 📋 View all categories
* 🔍 View category by ID
* ✏️ Update category name
* 🗑️ Delete existing categories
* 🔌 Connected to a Node.js backend

---

## ⚙️ Tech Stack

* React.js (or Next.js)
* Axios for API calls
* React Router (if routing required)
* Tailwind CSS or Bootstrap (for styling)
* Toast notifications (optional)

---

## 📁 Folder Structure (React)

```
src/
│
├── components/
│   ├── CategoryList.js
│   ├── CategoryForm.js
│   └── CategoryCard.js
│
├── pages/
│   └── CategoryPage.js
│
├── services/
│   └── categoryService.js
│
├── App.js
└── index.js
```

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone <your-frontend-repo-url>
cd job-category-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set the backend API URL

Create a `.env` file in the root:

```env
REACT_APP_API_BASE_URL=http://localhost:5000/category
```

### 4. Start the React app

```bash
npm start
```

---

## 🔌 API Integration (categoryService.js)

```js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllCategories = () => axios.get(API_URL);
export const getCategoryById = (id) => axios.get(`${API_URL}/${id}`);
export const createCategory = (data) => axios.post(API_URL, data);
export const updateCategory = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteCategory = (id) => axios.delete(`${API_URL}/${id}`);
```

---

## 🧪 Example Usage in Component

```js
// CategoryForm.js
import { useState } from "react";
import { createCategory } from "../services/categoryService";

function CategoryForm() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCategory({ name });
      alert("Category created!");
      setName("");
    } catch (err) {
      alert("Failed to create category");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Enter category name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Category</button>
    </form>
  );
}
```

---

## ✅ Example Success Response

```json
{
  "_id": "66ae1d4fc1924d27b1dfce62",
  "name": "Marketing",
  "createdAt": "2025-07-04T08:00:00.000Z"
}
```

---

## ❌ Error Handling (Frontend)

| Situation                | Message Displayed            | API Status |
| ------------------------ | ---------------------------- | ---------- |
| Empty input              | “Please enter category name” | Frontend   |
| Duplicate / server error | “Failed to create category”  | 500        |
| Not Found                | “Category not found”         | 404        |

Use toast or modal libraries (e.g. `react-toastify`) for better UX.

---

## 🧑‍💻 Developer Notes

* Integrate form validation using libraries like `Formik + Yup`
* Improve design with `Tailwind`, `Bootstrap`, or `Ant Design`
* Handle API errors with centralized error handlers
* Optionally use Redux or React Query for state management

---

## 🔗 Connect With Backend

* Ensure backend is running on: `http://localhost:5000`
* All API calls from frontend are routed through `/category`
* Use `Proxy` or `.env` to configure base URL properly

---

## 💡 Future Enhancements

* Add pagination to list view
* Implement search functionality
* Add subcategories support
* Role-based access with login






# 🖥️ Job SubCategory Management – Frontend

A frontend module for managing **Job Subcategories** (like "Frontend Development" under "IT"). Built using **React.js** and integrated with a RESTful backend API.

---

## 🎯 Features

* 📝 Add new subcategories
* 📋 View all subcategories
* 🔍 View subcategory by ID
* ✏️ Update subcategory
* 🗑️ Delete subcategory
* 🔌 Linked with job categories using `categoryId`

---

## ⚙️ Tech Stack

* React.js
* Axios for API calls
* Tailwind CSS or Bootstrap
* React Router (if needed)

---

## 📁 Folder Structure (React)

```
src/
│
├── components/
│   ├── SubcategoryList.js
│   ├── SubcategoryForm.js
│   └── SubcategoryCard.js
│
├── services/
│   └── subcategoryService.js
│
├── App.js
└── index.js
```

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone <your-frontend-repo-url>
cd job-subcategory-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set the backend API URL

Create a `.env` file:

```env
REACT_APP_SUBCATEGORY_API=http://localhost:5000/subcategory
```

### 4. Start the App

```bash
npm start
```

---

## 🔌 API Integration (subcategoryService.js)

```js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SUBCATEGORY_API;

export const getAllSubcategories = () => axios.get(BASE_URL);
export const getSubcategoryById = (id) => axios.get(`${BASE_URL}/${id}`);
export const createSubcategory = (data) => axios.post(BASE_URL, data);
export const updateSubcategory = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteSubcategory = (id) => axios.delete(`${BASE_URL}/${id}`);
```

---

## 🧪 Example Usage in Component

```js
// SubcategoryForm.js
import { useState, useEffect } from 'react';
import { createSubcategory } from '../services/subcategoryService';

function SubcategoryForm({ categories }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSubcategory({ name, category });
      alert('Subcategory created');
      setName('');
      setCategory('');
    } catch (err) {
      alert('Error creating subcategory');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Subcategory Name"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>{cat.name}</option>
        ))}
      </select>
      <button type="submit">Add Subcategory</button>
    </form>
  );
}
```

---

## ✅ Example Success Response

```json
{
  "_id": "66ae1f03c1924d27b1dfce99",
  "name": "Frontend Development",
  "category": "66ae1e89c1924d27b1dfce63",
  "createdAt": "2025-07-04T08:10:00.000Z"
}
```

---

## ❌ Error Handling

| Situation           | Message                   | Status   |
| ------------------- | ------------------------- | -------- |
| Empty input         | "Please enter all fields" | Frontend |
| Invalid category ID | "Category not found"      | 404      |
| Server error        | "Internal Server Error"   | 500      |

---

## 🧑‍💻 Developer Notes

* Fetch `categories` first for dropdowns
* Use `useEffect` to preload dropdowns
* Consider showing `category.name` using `populate()` in backend
* Use `react-toastify` for alerts

---

## 🔗 Connect With Backend

In `app.js`:

```js
app.use('/subcategory', SubCategoryRoute);
```

In `SubCategoryRoute.js`:

```js
router.get('/', getAllSubcategorys);
router.get('/:id', getSubcategoryById);
router.post('/', createSubcategory);
router.put('/:id', updateSubcategory);
router.delete('/:id', deleteSubcategory);
```

---

## 💡 Future Enhancements

* Add filter by category
* Show subcategory count under each category
* Add pagination and search bar
* Improve error display








# 🖥️ Job Management System – Frontend

A frontend platform for managing and applying to job postings. Connected to a Node.js/Express backend with RESTful APIs. Supports categories, subcategories, user authentication, and admin access.

---

## 🎯 Features

* 📅 Post new jobs (authenticated)
* 📋 View all jobs (public)
* 🔍 Filter jobs by category and subcategory
* ✍️ Apply to a job (user only)
* 🔐 Admin dashboard for job approval
* 🚗 Payment verification endpoint
* ✨ File (PDF) upload support

---

## ⚙️ Tech Stack

* React.js
* Axios for API calls
* Tailwind CSS or Bootstrap
* JWT for auth (via backend)
* Toast/Alerts for notifications

---

## 📁 Folder Structure

```
src/
├── pages/
│   ├── JobList.js
│   ├── JobDetail.js
│   ├── PostJob.js
│   └── MyJobs.js
│
├── components/
│   ├── JobCard.js
│   ├── JobForm.js
│   └── JobFilters.js
│
├── services/
│   └── jobService.js
├── App.js
└── index.js
```

---

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone <your-frontend-repo-url>
cd job-frontend
npm install
```

### 2. Add Environment Variables

```env
REACT_APP_JOB_API=http://localhost:5000/api
```

### 3. Start React App

```bash
npm start
```

---

## 🔌 API Integration (jobService.js)

```js
import axios from 'axios';
const BASE = process.env.REACT_APP_JOB_API;

export const getAllJobs = () => axios.get(`${BASE}/`);
export const getJobById = (id) => axios.get(`${BASE}/${id}`);
export const getJobsByCategory = (categoryId) => axios.get(`${BASE}/category/${categoryId}`);
export const getJobsBySubcategory = (subcategoryId) => axios.get(`${BASE}/subcategory/${subcategoryId}`);
export const createJob = (data, token) => axios.post(`${BASE}/`, data, { headers: { Authorization: `Bearer ${token}` } });
export const updateJob = (id, data, token) => axios.put(`${BASE}/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteJob = (id, token) => axios.delete(`${BASE}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const applyToJob = (id, token, body) => axios.post(`${BASE}/${id}/apply`, body, { headers: { Authorization: `Bearer ${token}` } });
export const verifyPayment = (data, token) => axios.post(`${BASE}/verify-payment`, data, { headers: { Authorization: `Bearer ${token}` } });
export const getMyPostedJobs = (token) => axios.get(`${BASE}/myjobs/applications`, { headers: { Authorization: `Bearer ${token}` } });
```

---

## 🧪 Job Post Form Example

```js
function JobForm({ categories, subcategories }) {
  const [form, setForm] = useState({
    company: '', location: '', phone: '', salaryMin: '', salaryMax: '', experience: '',
    deadline: '', description: '', jobpost: '', category: '', subCategory: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await createJob(form, token);
      alert("Job Posted Successfully");
    } catch (err) {
      alert("Error Posting Job");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company" required />
      {/* other fields */}
      <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
        {categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
      </select>
      <button type="submit">Post Job</button>
    </form>
  );
}
```

---

## ✅ Job Schema (Backend Model)

```js
const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: Number, required: true },
  salaryMin: { type: Number, required: true },
  salaryMax: { type: Number, required: true },
  experience: { type: String, required: true },
  deadline: { type: String, required: true },
  description: { type: String, required: true },
  responsibilities: [String],
  requirements: [String],
  jobpost: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  pdfUrl: String,
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
```

---

## ❌ Error Handling (Frontend)

| Scenario               | Message                  | Status   |
| ---------------------- | ------------------------ | -------- |
| Missing fields         | "Please fill all fields" | Frontend |
| Unauthorized           | "Login required"         | 401      |
| Forbidden (admin-only) | "Access denied"          | 403      |
| Server error           | "Something went wrong"   | 500      |

---

## 🔗 Backend Route Entry

In `app.js`:

```js
app.use("/api", jobRoute);
```

All requests like `/api/:id`, `/api/category/:categoryId`, `/api/:id/apply` will work automatically.

---

## 💡 Future Ideas

* Resume Upload for Applicants
* Bookmark/Save Jobs
* Pagination and Search Filters
* Email Notification on Application
* Employer Dashboard with stats






# 🖥️ Job Management System – Frontend

A frontend platform for managing and applying to job postings. Connected to a Node.js/Express backend with RESTful APIs. Supports categories, subcategories, user authentication, admin access, and Razorpay payments.

---

## 🎯 Features

* 📅 Post new jobs (authenticated)
* 📋 View all jobs (public)
* 🔍 Filter jobs by category and subcategory
* ✍️ Apply to a job (user only)
* 🔐 Admin dashboard for job approval
* ✨ File (PDF) upload support
* 💳 Razorpay payment integration for job posts

---

## ⚙️ Tech Stack

* React.js
* Axios for API calls
* Tailwind CSS or Bootstrap
* JWT for auth (via backend)
* Toast/Alerts for notifications

---

## 📁 Folder Structure

```
src/
├── pages/
│   ├── JobList.js
│   ├── JobDetail.js
│   ├── PostJob.js
│   ├── MyJobs.js
│   └── PaymentConfirm.js
│
├── components/
│   ├── JobCard.js
│   ├── JobForm.js
│   └── JobFilters.js
│
├── services/
│   ├── jobService.js
│   └── paymentService.js
├── App.js
└── index.js
```

---

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone <your-frontend-repo-url>
cd job-frontend
npm install
```

### 2. Add Environment Variables

```env
REACT_APP_JOB_API=http://localhost:5000/api
```

### 3. Start React App

```bash
npm start
```

---

## 🔌 API Integration (jobService.js & paymentService.js)

**jobService.js:**

```js
import axios from 'axios';
const BASE = process.env.REACT_APP_JOB_API;

export const getAllJobs = () => axios.get(`${BASE}/`);
export const getJobById = (id) => axios.get(`${BASE}/${id}`);
export const getJobsByCategory = (categoryId) => axios.get(`${BASE}/category/${categoryId}`);
export const getJobsBySubcategory = (subcategoryId) => axios.get(`${BASE}/subcategory/${subcategoryId}`);
export const createJob = (data, token) => axios.post(`${BASE}/`, data, { headers: { Authorization: `Bearer ${token}` } });
export const updateJob = (id, data, token) => axios.put(`${BASE}/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
export const deleteJob = (id, token) => axios.delete(`${BASE}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const applyToJob = (id, token, body) => axios.post(`${BASE}/${id}/apply`, body, { headers: { Authorization: `Bearer ${token}` } });
export const verifyPayment = (data, token) => axios.post(`${BASE}/verify-payment`, data, { headers: { Authorization: `Bearer ${token}` } });
export const getMyPostedJobs = (token) => axios.get(`${BASE}/myjobs/applications`, { headers: { Authorization: `Bearer ${token}` } });
```

**paymentService.js:**

```js
import axios from 'axios';
const BASE = process.env.REACT_APP_JOB_API;

export const initiateCheckout = (data) => axios.post(`${BASE}/verify`, data);
export const confirmOrder = (data) => axios.post(`${BASE}/confirm-order`, data);
export const sendResetPassword = (data) => axios.post(`${BASE}/resetpassword`, data);
export const getResetLink = (id) => axios.get(`${BASE}/reset-password/${id}`);
```

---

## 🧪 Job Post Form Example

```js
function JobForm({ categories, subcategories }) {
  const [form, setForm] = useState({
    company: '', location: '', phone: '', salaryMin: '', salaryMax: '', experience: '',
    deadline: '', description: '', jobpost: '', category: '', subCategory: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await createJob(form, token);
      alert("Job Posted Successfully");
    } catch (err) {
      alert("Error Posting Job");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company" required />
      {/* other fields */}
      <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
        {categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}
      </select>
      <button type="submit">Post Job</button>
    </form>
  );
}
```

---

## 📅 Order Schema (Backend Model)

```js
const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  company: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  status: { type: String, enum: ["created", "paid", "failed"], default: "created" },
  receipt: { type: String, required: true },
  paymentId: { type: String },
  signature: { type: String },
  createdAt: { type: Date, default: Date.now },
});
```

---

## ❌ Error Handling (Frontend)

| Scenario               | Message                       | Status   |
| ---------------------- | ----------------------------- | -------- |
| Missing fields         | "Please fill all fields"      | Frontend |
| Unauthorized           | "Login required"              | 401      |
| Forbidden (admin-only) | "Access denied"               | 403      |
| Payment Failure        | "Payment verification failed" | 400/500  |
| Server error           | "Something went wrong"        | 500      |

---

## 🔗 Backend Route Entry

In `app.js`:

```js
app.use("/api", jobRoute);         // All job-related routes
app.use("/api", paymentRoute);     // All payment-related routes under /api
```

### `/api` Routes

* `POST /api/verify` – Start Razorpay checkout
* `POST /api/confirm-order` – Confirm payment and update DB
* `POST /api/resetpassword` – Initiate password reset email
* `GET /api/reset-password/:id` – Retrieve reset form link

---

## 💡 Future Ideas

* Razorpay refund API
* OTP + email verification
* Auto-payment success redirect
* UI for payment history






## Contact



| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| POST   | `/contacts`     | Create new contact |
| GET    | `/contacts`     | Get all contacts   |
| GET    | `/contacts/:id` | Get one contact    |
| PUT    | `/contacts/:id` | Update contact     |
| DELETE | `/contacts/:id` | Delete contact     |






import axios from 'axios';
const BASE = process.env.REACT_APP_JOB_API + '/contacts';

export const createContact = (data) => axios.post(`${BASE}`, data);
export const getAllContacts = () => axios.get(`${BASE}`);
export const getContactById = (id) => axios.get(`${BASE}/${id}`);
export const updateContact = (id, data) => axios.put(`${BASE}/${id}`, data);
export const deleteContact = (id) => axios.delete(`${BASE}/${id}`);




# 🖥️ Job Management System – Frontend

A frontend platform for managing and applying to job postings. Connected to a Node.js/Express backend with RESTful APIs. Supports categories, subcategories, user authentication, admin access, Razorpay payments, and contact form submissions.

---

## 🎯 Features

* 📅 Post new jobs (authenticated)
* 📋 View all jobs (public)
* 🔍 Filter jobs by category and subcategory
* ✍️ Apply to a job (user only)
* 🔐 Admin dashboard for job approval
* ✨ File (PDF) upload support
* 💳 Razorpay payment integration for job posts
* 📨 Contact form with full CRUD capability (admin panel)

---

## ⚙️ Tech Stack

* React.js
* Axios for API calls
* Tailwind CSS or Bootstrap
* JWT for auth (via backend)
* Toast/Alerts for notifications

---

## 📁 Folder Structure

```
src/
├── pages/
│   ├── JobList.js
│   ├── JobDetail.js
│   ├── PostJob.js
│   ├── MyJobs.js
│   ├── PaymentConfirm.js
│   └── ContactList.js
│
├── components/
│   ├── JobCard.js
│   ├── JobForm.js
│   ├── JobFilters.js
│   └── ContactCard.js
│
├── services/
│   ├── jobService.js
│   ├── paymentService.js
│   └── contactService.js
├── App.js
└── index.js
```

---

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone <your-frontend-repo-url>
cd job-frontend
npm install
```

### 2. Add Environment Variables

```env
REACT_APP_JOB_API=http://localhost:5000/api
```

### 3. Start React App

```bash
npm start
```

---

## 🔌 API Integration

### jobService.js & paymentService.js – same as before

### contactService.js:

```js
import axios from 'axios';
const BASE = process.env.REACT_APP_JOB_API + '/contacts';

export const createContact = (data) => axios.post(`${BASE}`, data);
export const getAllContacts = () => axios.get(`${BASE}`);
export const getContactById = (id) => axios.get(`${BASE}/${id}`);
export const updateContact = (id, data) => axios.put(`${BASE}/${id}`, data);
export const deleteContact = (id) => axios.delete(`${BASE}/${id}`);
```

---

## 🚧 Contact Form Example

```js
function ContactForm() {
  const [form, setForm] = useState({ fullName: '', yourName: '', emailAddress: '', subject: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact(form);
      alert("Message sent successfully");
      setForm({ fullName: '', yourName: '', emailAddress: '', subject: '', message: '' });
    } catch (err) {
      alert("Error sending message");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Full Name" required />
      <input value={form.emailAddress} onChange={(e) => setForm({ ...form, emailAddress: e.target.value })} placeholder="Email Address" required />
      <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Subject" required />
      <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  );
}
```

---

## 📅 Contact Schema (Backend Model)

```js
const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  yourName: { type: String, trim: true },
  emailAddress: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  subject: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true }
}, { timestamps: true });
```

---

## ❌ Error Handling (Frontend)

| Scenario       | Message                              | Status   |
| -------------- | ------------------------------------ | -------- |
| Missing fields | "Please fill all fields"             | Frontend |
| Invalid email  | "Please enter a valid email address" | Frontend |
| Server error   | "Something went wrong"               | 500      |

---

## 🔗 Backend Route Entry

In `app.js`:

```js
app.use("/api", jobRoute);         // All job-related routes
app.use("/api", paymentRoute);     // All payment-related routes under /api
app.use("/contacts", contactRoute); // Contact form routes
```

### `/contacts` Routes

* `POST /contacts` – Submit contact form
* `GET /contacts` – Get all messages (admin)
* `GET /contacts/:id` – View single message
* `PUT /contacts/:id` – Update message
* `DELETE /contacts/:id` – Delete message

---

## 💡 Future Ideas

* Razorpay refund API
* OTP + email verification
* Auto-payment success redirect
* UI for payment history
* Admin UI for managing contact queries



































This API provides authentication routes for registering an admin, logging in, and handling password resets.

---

# 🚀 Job Portal API – Main Routing Overview

This Express.js backend provides routes for employee registration/login, category/subcategory management, job postings, and payment verification.

---

## 🌐 Live Base URL

```
----->>> https://job-backend-uwzv.onrender.com  <<<<<<--------



## 📂 API Routes Overview

| Route Prefix       | Description                               |
|--------------------|-------------------------------------------|
| `/user`            | Employee registration and profile routes  |
| `/employee`        | Login and password reset via OTP          |
| `/category`        | Job category management                   |
| `/subcategory`     | Job subcategory management                |
| `/api`             | Job listings + payment verification       |

---

## 🧭 Route Details

### 👤 `/user` – Employee Registration & Profile

- `POST /user/register` – Register new employee  
- `GET /user/profile/:id` – Get employee profile  

---

### 🔐 `/employee` – Login & OTP Reset

- `POST /employee/login` – Login with email & password  
- `POST /employee/send-otp` – Send OTP to email  
- `POST /employee/reset-password` – Reset password using OTP  

---

### 📁 `/category` – Category Management

- `GET /category/` – Get all categories  
- `POST /category/` – Add new category  
- `PUT /category/:id` – Update category  
- `DELETE /category/:id` – Delete category  

---

### 📂 `/subcategory` – Subcategory Management

- `GET /subcategory/` – Get all subcategories  
- `POST /subcategory/` – Add new subcategory  
- `PUT /subcategory/:id` – Update subcategory  
- `DELETE /subcategory/:id` – Delete subcategory  

---

### 💼 `/api` – Job Management + Payment

- `GET /api/` – Get all jobs  
- `GET /api/:id` – Get job by ID  
- `GET /api/category/:categoryId` – Jobs by category  
- `GET /api/subcategory/:subcategoryId` – Jobs by subcategory  
- `POST /api/` – Create new job (requires login)  
- `PUT /api/:id` – Update job (requires login)  
- `DELETE /api/:id` – Delete job (requires login)  

---

### 💳 Payment Verification

> **Endpoint**:  
> `POST /api/verify-payment`

#### 🔸 Sample Request:

```json
{
  "razorpay_payment_id": "pay_ABC123",
  "razorpay_order_id": "order_DEF456",
  "razorpay_signature": "signature_xyz789"
}
```

#### ✅ Sample Success Response:

```json
{
  "success": true,
  "message": "Payment verified and job activated"
}
```

---

## ✅ Example Usage

### 🔹 Register Employee

```http
POST https://job-backend-uwzv.onrender.com/user/register
```

### 🔹 Login

```http
POST https://job-backend-uwzv.onrender.com/employee/login
```

### 🔹 Create Job (Authenticated)

```http
POST https://job-backend-uwzv.onrender.com/api/
Authorization: Bearer <token>
```

---

## 🧪 Testing Tips

Use **Postman** or **Thunder Client** to test all routes.

---

## 📬 Contact

For issues or support, contact: [youremail@example.com](mailto:youremail@example.com)




# 🚀 Express API – Main Routing Overview

This Express.js API includes user registration/login, category management, job posting with payment integration, and employee authentication.

---

## 🌐 Base URL

```
http://localhost:<your-port>
```

Replace `<your-port>` with your actual server port (e.g., `5000`, `8080`, etc.)

---

## 🧭 Route Structure

| Route Prefix       | Description                               |
|--------------------|-------------------------------------------|
| `/user`            | User (employee) registration & profile    |
| `/employee`        | Employee login & password reset (OTP)     |
| `/category`        | Job category management                   |
| `/subcategory`     | Job subcategory management                |
| `/api`             | Job posting, payment verification, admin  |

---

## 📂 Routes Breakdown

### 👤 `/user` – Employee Registration Routes

Handled by: `UserEmployee`  
Includes registration, profile, and related features.

#### Example:

```http
POST /user/register
GET /user/profile/:id
```

---

### 🔐 `/employee` – Employee Login & OTP Routes

Handled by: `UserEmployeelogin`

#### Example Endpoints:

- `POST /employee/login` – Login with email/password  
- `POST /employee/send-otp` – Send OTP to email for reset  
- `POST /employee/reset-password` – Reset password with OTP  

---

### 📁 `/category` – Category Management

Handled by: `CategoryRoute`

CRUD operations on job categories.

#### Example:

```http
GET /category/
POST /category/
PUT /category/:id
DELETE /category/:id
```

---

### 📂 `/subcategory` – Subcategory Management

Handled by: `SubCategoryRoute`

CRUD for subcategories under categories.

---

### 💼 `/api` – Job Posting & Payment

Handled by: `jobRoute`

Includes all job-related features + payment verification.

#### Example Endpoints:

- `GET /api/` – Get all jobs  
- `GET /api/:id` – Get job by ID  
- `POST /api/` – Create job (protected)  
- `PUT /api/:id` – Update job  
- `DELETE /api/:id` – Delete job  

---

### 💳 Payment Verification

> Endpoint:  
> `POST /api/verify-payment`

#### 🔸 Sample Request:

```json
{
  "razorpay_payment_id": "pay_ABC123",
  "razorpay_order_id": "order_DEF456",
  "razorpay_signature": "signature_789xyz"
}
```

#### ✅ Sample Success Response:

```json
{
  "success": true,
  "message": "Payment verified and job activated"
}
```

---

## 🛠 Setup Instructions

1. Clone the repository.
2. Run `npm install`
3. Add a `.env` file with:
   - `PORT`
   - `MONGO_URI`
   - `JWT_SECRET`
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
4. Start the server:

```bash
node index.js
# or
nodemon index.js
```

---

## 🧪 Testing Tools

Use **Postman**, **Thunder Client**, or **Swagger** for API testing.

---

## 📬 Contact

For support or feedback, contact: [youremail@example.com](mailto:youremail@example.com)



## 🌐 Base URL

```
http://localhost:<8000>/api/auth
```

---

## 🔐 Endpoints Overview

### 📥 1. Register Admin

- **Endpoint**: `/register`
- **Method**: `POST`
- **Purpose**: Register a new admin user.

#### ✅ Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

#### ✔️ Success Response:

```json
{
  "success": true,
  "message": "Admin registered successfully",
  "data": {
    "id": "60f1bc...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### ❌ Error Response:

```json
{
  "success": false,
  "message": "Email already exists"
}
```

---

### 🔑 2. Login

- **Endpoint**: `/login`
- **Method**: `POST`
- **Purpose**: Login admin user.

#### ✅ Request Body:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

#### ✔️ Success Response:

```json
{
  "success": true,
  "message": "Login successful",
  "token": "<JWT_TOKEN>"
}
```

#### ❌ Error Response:

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### 🔁 3. Forgot Password (Send Link)

- **Endpoint**: `/reset-password/:id`
- **Method**: `GET`
- **Purpose**: Sends password reset link to email.

#### ✔️ Success Response:

```json
{
  "success": true,
  "message": "Password reset link sent to your email"
}
```

#### ❌ Error Response:

```json
{
  "success": false,
  "message": "User not found"
}
```

---

### 🔄 4. Reset Password

- **Endpoint**: `/resetpassword`
- **Method**: `POST`
- **Purpose**: Reset user's password.

#### ✅ Request Body:

```json
{
  "userId": "60f1bc...",
  "newPassword": "newpassword123"
}
```

#### ✔️ Success Response:

```json
{
  "success": true,
  "message": "Password updated successfully"
}
```

#### ❌ Error Response:

```json
{
  "success": false,
  "message": "Password reset failed"
}
```

---

## ⚙️ Setup Instructions

1. Clone this repository.
2. Run `npm install`.
3. Start the server using:
   ```bash
   node index.js
   # or
   nodemon index.js
   ```
4. Use **Postman** or **Insomnia** for API testing.

---

## 📬 Contact

Need help? Reach out: [youremail@example.com](mailto:youremail@example.com)



# 👨‍💼 Employee Auth API – Express.js

This API handles authentication for employees, including registration, login, sending OTP for password reset, and resetting password.

---

## 🌐 Base URL

```
http://localhost:<your-port>/api/employee
```

Replace `<your-port>` with the actual port (e.g., `5000`, `8000`).

---

## 🔐 API Endpoints

### 📥 1. Register Employee

- **Endpoint**: `/register`
- **Method**: `POST`
- **Purpose**: Register a new employee.

#### ✅ Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

#### ✔️ Success Response:

```json
{
  "success": true,
  "message": "Employee registered successfully",
  "data": {
    "id": "65bc1d...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### ❌ Error Response:

```json
{
  "success": false,
  "message": "Email already exists"
}
```

---

### 🔑 2. Login Employee

- **Endpoint**: `/login`
- **Method**: `POST`
- **Purpose**: Login existing employee.

#### ✅ Request Body:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

#### ✔️ Success Response:

```json
{
  "success": true,
  "message": "Login successful",
  "token": "<JWT_TOKEN>"
}
```

#### ❌ Error Response:

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### ✉️ 3. Send OTP (for Password Reset)

- **Endpoint**: `/send-otp`
- **Method**: `POST`
- **Purpose**: Send OTP to employee’s email for password reset.

#### ✅ Request Body:

```json
{
  "email": "john@example.com"
}
```

#### ✔️ Success Response:

```json
{
  "success": true,
  "message": "OTP sent to your email"
}
```

#### ❌ Error Response:

```json
{
  "success": false,
  "message": "Employee not found"
}
```

---

### 🔁 4. Reset Password with OTP

- **Endpoint**: `/reset-password`
- **Method**: `POST`
- **Purpose**: Reset password using OTP.

#### ✅ Request Body:

```json
{
  "email": "john@example.com",
  "otp": "123456",
  "newPassword": "newpassword@123"
}
```

#### ✔️ Success Response:

```json
{
  "success": true,
  "message": "Password reset successful"
}
```

#### ❌ Error Response:

```json
{
  "success": false,
  "message": "Invalid OTP or email"
}
```

---

## ⚙️ Setup & Usage

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file for environment variables like MongoDB URI and JWT secret.
4. Start the server:

```bash
node index.js
# or
nodemon index.js
```

5. Test API using **Postman** or **Thunder Client**.

---

## 📬 Contact

Need help or found a bug? Contact us at: [youremail@example.com](mailto:youremail@example.com)




# 💼 Job API – Express.js

This API handles job listings, including job creation, retrieval, update, deletion, and admin moderation, with authentication and payment verification.

---

## 🌐 Base URL

```
http://localhost:<your-port>/api/jobs
```

---

## 📂 Public Routes

### 📃 1. Get All Jobs

- **Endpoint**: `/`
- **Method**: `GET`
- **Description**: Fetch all jobs.

#### ✔️ Success Response:

```json
{
  "success": true,
  "jobs": [ ... ]
}
```

---

### 🔍 2. Get Job by ID

- **Endpoint**: `/:id`
- **Method**: `GET`
- **Description**: Fetch a single job by its ID.

#### ✔️ Example:

```
GET /api/jobs/64df1d123456abc789
```

---

### 📂 3. Get Jobs by Category

- **Endpoint**: `/category/:categoryId`
- **Method**: `GET`
- **Description**: Get all jobs under a specific category.

#### ✔️ Example:

```
GET /api/jobs/category/64dfcat1234
```

---

### 📁 4. Get Jobs by Subcategory

- **Endpoint**: `/subcategory/:subcategoryId`
- **Method**: `GET`
- **Description**: Get all jobs under a specific subcategory.

---

## 🔐 Protected Routes (Requires Auth)

### 📝 5. Create a New Job

- **Endpoint**: `/`
- **Method**: `POST`
- **Headers**: Bearer Token
- **Description**: Create a new job post.

#### ✅ Request Body:

```json
{
  "title": "Web Developer",
  "company": "ABC Ltd",
  "location": "Delhi",
  "category": "IT",
  "subcategory": "Frontend",
  "salaryMin": 20000,
  "salaryMax": 40000,
  "description": "Looking for React Developer"
}
```

---

### ✏️ 6. Update Job

- **Endpoint**: `/:id`
- **Method**: `PUT`
- **Headers**: Bearer Token
- **Description**: Update an existing job by ID.

---

### ❌ 7. Delete Job

- **Endpoint**: `/:id`
- **Method**: `DELETE`
- **Headers**: Bearer Token
- **Description**: Delete a job by ID.

---

## 💳 Payment Route

### ✅ 8. Verify Payment

- **Endpoint**: `/verify-payment`
- **Method**: `POST`
- **Headers**: Bearer Token
- **Description**: Verifies payment made for job posting.

#### ✅ Request Body Example:

```json
{
  "razorpay_payment_id": "pay_29QQoUBi66xm2f",
  "razorpay_order_id": "order_9A33XWu170gUtm",
  "razorpay_signature": "generated_signature"
}
```

#### ✔️ Success Response:

```json
{
  "success": true,
  "message": "Payment verified and job activated"
}
```

---

## 🛡️ Admin-Only Route

### 🕓 9. Get Pending Jobs

- **Endpoint**: `/admin/pending`
- **Method**: `GET`
- **Headers**: Bearer Token (Admin)
- **Description**: Fetch jobs that are pending admin approval.

---

## ⚙️ Setup

1. Clone the repository
2. Run `npm install`
3. Set up your `.env` with MongoDB URI, JWT secret, Razorpay keys
4. Start the server:

```bash
node index.js
# or
nodemon index.js
```

---

## 🧪 Testing Tools

Use **Postman**, **Thunder Client**, or **cURL** to test endpoints.

---

## 📬 Contact

If you have questions or issues, reach out at: [youremail@example.com](mailto:youremail@example.com)

