const express=require("express")
const{getDetails,postDetails,updateDetails,deleteDetails}=require("../Controller/ControllerRoutes")
const router=express.Router()
router.get("/get",getDetails)
router.post("/post",postDetails)
router.put("/:id",updateDetails)
router.delete("/:id",deleteDetails)
module.exports = router;