const Subcategory = require('../../../Module/JobModule/subcategory.model');
const imagekit = require("../../../Utils/imageKit");
// Get all Subcategorys
const getAllSubcategorys = async (req, res) => {
    try {
        const Subcategorys = await Subcategory.find();
        res.status(200).json(Subcategorys);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single Subcategory by ID
const getSubcategoryById = async (req, res) => {
    try {
        const Subcategory = await Subcategory.findById(req.params.id);
        if (!Subcategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        res.status(200).json(Subcategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new Subcategory
const createSubcategory = async (req, res) => {
  try {
    const { name, category } = req.body;
    // const file = req.files?.images;

    // if (!file) {
    //   return res.status(400).json({ message: "Image is required." });
    // }

    // Upload image to ImageKit
    // const uploadResponse = await imagekit.upload({
    //   file: file.data,
    //   fileName: file.name,
    // });

    // Create new subcategory with image URL
    console.log(category, "subcategory");
    
    const newSubcategory = new Subcategory({
      name,
      category,
      
    //   image: uploadResponse.url, // Save only the image URL
    });

    await newSubcategory.save();
    res.status(201).json(newSubcategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a Subcategory
const updateSubcategory = async (req, res) => {
    try {
        const { name } = req.body;
        const updatedSubcategory = await Subcategory.findByIdAndUpdate(
            req.params.id,
            { name },
            { new: true }
        );
        if (!updatedSubcategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        const Subcategorys = await Subcategory.find();
        res.status(200).json({ message: 'Subcategory deleted successfully', data: Subcategorys });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a Subcategory
const deleteSubcategory = async (req, res) => {
    try {
        const deletedSubcategory = await Subcategory.findByIdAndDelete(req.params.id);
        if (!deletedSubcategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        const Subcategorys = await Subcategory.find();
        res.status(200).json({ message: 'Subcategory deleted successfully', data: Subcategorys });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllSubcategorys, getSubcategoryById, createSubcategory, updateSubcategory, deleteSubcategory };