const express = require("express");
const router = express.Router();

const users = require("./userRoutes.js");

router.use("/users", users);

// router.get("/prueba", (req, res) =>
//   res.send({ message: "Hello World!" })
// );
module.exports = router;
