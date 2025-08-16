const express=require("express")
const upload = require("../MiddleWares/Upload");
const{getDetails,postDetails,updateDetails,deleteDetails}=require("../Controller/ControllerRoutes")
const router=express.Router()
const verifyAdmin = require("../MiddleWares/Auth");

router.get("/get",getDetails)
router.post("/post", verifyAdmin,upload.single("image"),postDetails)
// Update post (optional image)
router.put("/:id", verifyAdmin, upload.single("image"), updateDetails);
router.delete("/:id", verifyAdmin,deleteDetails)
module.exports = router;