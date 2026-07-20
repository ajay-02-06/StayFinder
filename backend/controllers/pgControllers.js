const PG = require("../models/PG");

// Add PG
const addPG = async (req, res) => {
  try {
    const {
      title,
      location,
      price,
      description,
      image,
      amenities,
    } = req.body;

    const newPG = new PG({
  title,
  location,
  price,
  description,
  image,
  amenities,
  latitude: req.body.latitude,
  longitude: req.body.longitude,

});

    await newPG.save();

    res.status(201).json({
      success: true,
      message: "PG Added Successfully",
      pg: newPG,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Get All PGs
const getAllPGs = async (req, res) => {
  try {
    const pgs = await PG.find();

    res.status(200).json({
      success: true,
      count: pgs.length,
      pgs,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Get Single PG
const getSinglePG = async (req, res) => {
  try {
    const pg = await PG.findById(req.params.id);

    if (!pg) {
      return res.status(404).json({
        success: false,
        message: "PG Not Found",
      });
    }

    res.status(200).json({
      success: true,
      pg,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Update PG
const updatePG = async (req, res) => {
  try {
    const updatedPG = await PG.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedPG) {
      return res.status(404).json({
        success: false,
        message: "PG Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "PG Updated Successfully",
      pg: updatedPG,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
// Delete PG
const deletePG = async (req, res) => {
  try {
    const deletedPG = await PG.findByIdAndDelete(req.params.id);

    if (!deletedPG) {
      return res.status(404).json({
        success: false,
        message: "PG Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "PG Deleted Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


module.exports = {
  addPG,
  getAllPGs,
  getSinglePG,
  updatePG,
  deletePG,

};