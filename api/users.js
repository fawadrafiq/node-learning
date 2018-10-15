const express = require("express");
const router = express.Router();

// @route     GET /users
// @desc      Returns users list
// @access    Public
router.get("/", (req, res) => res.json({ data: "read from sql, coming soon" }));

module.exports = router;
