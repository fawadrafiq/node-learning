const express = require("express");
const bodyParser = require("body-parser");

const User = require("./api/users");

const router = express.Router();
const app = express();

//Bdoy parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5000;

// @route     GET /test
// @desc      Tests hello world
// @access    Public
router.get("/test", (req, res) => {
  return res.json({ msg: "Hello Worldssssss" });
});

router.get("/usama", (req, res) => res.json({ usamaMsg: "I am all in all" }));

router.post("/post", (req, res) => {
  const userName = req.body.userName;
  const pass = req.body.password;
  return res.json({ listened: `Get a db you sucker ${userName}` });
});

app.use("/api/user", User);
app.use(router);

app.listen(port, () => console.log(`Server running on ${port}`));
