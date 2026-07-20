const RequestPG = require("../models/RequestPG");
const PG = require("../models/PG");


// ============================
// Submit PG Request
// ============================

const submitRequest = async (req, res) => {
  try {

    const request = await RequestPG.create(req.body);

    res.status(201).json({
      success: true,
      message: "PG Request Submitted Successfully",
      request,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};


// ============================
// Get All Requests
// ============================

const getAllRequests = async (req, res) => {
  try {

    const requests = await RequestPG.find();

    res.status(200).json({
      success: true,
      count: requests.length,
      requests,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};


// ============================
// Approve Request
// ============================

const approveRequest = async (req, res) => {

  try {

    const request = await RequestPG.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request Not Found",
      });
    }

    await PG.create({
      title: request.title,
      location: request.location,
      price: request.price,
      description: request.description,
      image: request.image,
      amenities: request.amenities,
      rating: request.rating,
      availability: request.availability,
      type: request.type,
      latitude: request.latitude,
      longitude: request.longitude,
    });

    await RequestPG.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Request Approved",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

};


// ============================
// Reject Request
// ============================

const rejectRequest = async (req, res) => {

  try {

    await RequestPG.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Request Rejected",
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
  submitRequest,
  getAllRequests,
  approveRequest,
  rejectRequest,
};