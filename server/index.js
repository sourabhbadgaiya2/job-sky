const express = require("express");

const app = express();
const path = require("path");
const dbconnect = require("./Utils/db.config");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(morgan("tiny"));

require("dotenv").config();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
// app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

dbconnect();
app.use(fileUpload());

const UserEmployee = require("./Route/RegisterRoute");
const UserEmployeelogin = require("./Route/EmployeeLoginRoute");
const CategoryRoute = require("./Route/JobRoute/CategoryRoute");
const SubCategoryRoute = require("./Route/JobRoute/subsubRoute");
const jobRoute = require("./Route/JobRoute/JobRoute");
const jobapply = require("./Route/JobapplyRoute/JobapplyRoute");
const contactRoute = require("./Route/ContactRoute/ContactRoute");
const AdminRoute = require("./Route/Admin/AdminRoute");

// app.use("/uploads", express.static("uploads"));
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let PORT = process.env.PORT || 8000;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Body-parser middleware
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/user", UserEmployee);

app.use("/employee", UserEmployeelogin);
app.use("/category", CategoryRoute);
app.use("/subcategory", SubCategoryRoute);
app.use("/api", jobRoute);
app.use("/jobapply", jobapply);
app.use("/contacts", contactRoute);
app.use("/admin", AdminRoute);

app.listen(PORT, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT: ", PORT);
});
