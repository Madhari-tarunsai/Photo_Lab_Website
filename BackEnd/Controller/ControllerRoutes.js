const photoData = require('../Models/Postdetails'); 

// GET all photos
const getDetails = async (req, res) => {
    try {
        const getData = await photoData.find();
        res.status(200).json({ message: "Get post details", data: getData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Something went wrong", error });
    }
};

// POST new photo
const postDetails = async (req, res) => {
    try {
        const postData = await photoData.create(req.body);
        res.status(201).json({ message: "Post created successfully", data: postData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Something went wrong", error });
    }
};

// UPDATE photo by ID
const updateDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await photoData.findByIdAndUpdate(id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Photo not found" });
        res.status(200).json({ message: "Photo updated successfully", data: updated });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Something went wrong", error });
    }
};

// DELETE photo by ID
const deleteDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await photoData.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ message: "Photo not found" });
        res.status(200).json({ message: "Photo deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Something went wrong", error });
    }
};

module.exports = { getDetails, postDetails, updateDetails, deleteDetails };
