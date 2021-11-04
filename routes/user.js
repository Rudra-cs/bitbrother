const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/getUser", userController.listUsers);

router.post("/createUser", userController.createUser);

router.delete("/deleteUser/:id", userController.deleteUserById);

router.put("/updateUser/:id", userController.updateUser);

module.exports = router;
