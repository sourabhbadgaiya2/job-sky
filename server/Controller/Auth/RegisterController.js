// const userModel = require("../../Module/UserModule");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const imagekit = require("../../Utils/imageKit");

// const fileUpload = async (file) => {
//   const buffer = file.data;
//   if (!buffer || !file.name) {
//     throw new Error("Invalid file data");
//   }

//   const uploadResponse = await imagekit.upload({
//     file: buffer,
//     fileName: file.name,
//   });
//   return uploadResponse.url;
// };

// const register = async (req, res) => {
//   try {
//     const { name, phone } = req.body;

//     // Input validation
//     if (!name || !phone) {
//       return res.status(400).json({ success: false, message: "Name and phone are required" });
//     }

//     // Check if user already exists by phone
//     const existingUser = await userModel.findOne({ phone });
//     if (existingUser) {
//       return res.status(409).json({ success: false, message: "User already exists" });
//     }

//     // Hash the phone as password
//     const hashedPassword = await bcrypt.hash(phone, 10); // 10 is salt rounds

//     // Create new user
//     const newUser = new userModel({
//       name,
//       phone,
//       password: hashedPassword
//     });

//     await newUser.save();

//     res.status(201).json({ success: true, message: "User registered successfully" });

//   } catch (error) {
//     console.error("Registration error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { name, password, phone } = req.body;

//     // Validate inputs
//     if (!name || !password) {
//       return res.status(400).json({ success: false, message: "Name and password are required" });
//     }

//     // Find user by name
//     const user = await userModel.findOne({ phone });
//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     // Compare password (input vs hashed phone)
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ success: false, message: "Invalid credentials" });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       user: {
//         name: user.name,
//         phone: user.phone
//       }
//     });

//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// module.exports = {register,login};

const userModel = require("../../Module/UserModule");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const imagekit = require("../../Utils/imageKit");

// Upload File Function
const fileUpload = async (file) => {
  const buffer = file.data;
  if (!buffer || !file.name) {
    throw new Error("Invalid file data");
  }

  const uploadResponse = await imagekit.upload({
    file: buffer,
    fileName: file.name,
  });

  return uploadResponse.url;
};

// Register Function
// const register = async (req, res) => {
//   try {
//     const { name, phone } = req.body;

//     if (!name || !phone) {
//       return res.status(400).json({ success: false, message: "Name and phone are required" });
//     }

//     const existingUser = await userModel.findOne({ phone });
//     if (existingUser) {
//       return res.status(409).json({ success: false, message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(phone, 10); // Hash phone as password

//     const newUser = new userModel({
//       name,
//       phone,
//       password: hashedPassword
//     });

//     await newUser.save();

//     res.status(201).json({ success: true, message: "User registered successfully" });

//   } catch (error) {
//     console.error("Registration error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

const register = async (req, res) => {
  try {
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "Name and phone are required" });
    }

    const existingUser = await userModel.findOne({ phone });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(phone, 10); // Phone as password

    const newUser = new userModel({
      name,
      phone,
      password: hashedPassword,
    });

    await newUser.save();

    // ✅ Generate JWT Token
    const token = jwt.sign(
      { userId: newUser._id, phone: newUser.phone }, // payload
      process.env.JWT_SECRET || "your_jwt_secret", // secret
      { expiresIn: "7d" } // token expiry
    );

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        phone: newUser.phone,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Login Function
// const login = async (req, res) => {
//   try {
//     const { name, password, phone } = req.body;

//     if (!name || !password) {
//       return res.status(400).json({ success: false, message: "Name and password are required" });
//     }

//     const user = await userModel.findOne({ phone });
//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ success: false, message: "Invalid credentials" });
//     }

//     // Create JWT token
//     const token = jwt.sign(
//       { userId: user._id, name: user.name, phone: user.phone },
//       process.env.JWT_SECRET || "your_jwt_secret",
//       { expiresIn: "7d" }
//     );

//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       token,
//       user: {
//         name: user.name,
//         phone: user.phone
//       }
//     });

//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // if (!name || !phone) {
    //   return res.status(400).json({ success: false, message: "Name and phone are required" });
    // }

    // Find user by phone number
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Match name
    if (user.email !== email) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials name" });
    }

    // Compare phone as password (hashed)
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials passwored" });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const registeruser = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      DOB,
      City,
      Qualification,
      Skill,
      desgination,
      age,
      gender,
    } = req.body;

    if (!name || !phone) {
      return res
        .status(400)
        .json({ success: false, message: "Name and phone are required" });
    }

    const existingUser = await userModel.findOne({ phone });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(phone, 10); // phone as password

    const newUser = new userModel({
      name,
      phone,
      email,
      DOB,
      City,
      Qualification,
      Skill,
      desgination,
      age,
      gender,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id, name: newUser.name, phone: newUser.phone },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "7d" }
    );

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        phone: newUser.phone,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const loginOrRegister = async (req, res) => {
  try {
    const { name, phone } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name and phone are required",
      });
    }

    let user = await userModel.findOne({ phone });

    if (user) {
      // ✅ User found → Login: generate token
      const token = jwt.sign(
        { userId: user._id, name: user.name, phone: user.phone },
        process.env.JWT_SECRET || "your_jwt_secret",
        { expiresIn: "7d" }
      );

      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user: {
          _id: user._id,
          name: user.name,
          phone: user.phone,
        },
        users: user,
      });
    } else {
      // ❌ User not found → Create new, but don't login
      const newUser = new userModel({ name, phone });
      await newUser.save();

      return res.status(201).json({
        success: true,
        message: "User registered successfully. Please login now.",
        token,
        user: user,
      });
    }
  } catch (error) {
    console.error("Login/Register error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ! get all fetch user
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().select("-password");
    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.error("Get all users error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  register,
  login,
  registeruser,
  loginOrRegister,
  getAllUsers,
};
