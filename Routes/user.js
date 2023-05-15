const express = require("express");
const { login, Dashboard } = require("../Controllers/user");
const authMiddleware = require("../Middlewares/auth");
const router = express.Router();

router.route("/login").post(login);
router.route("/dashboard").get(authMiddleware,Dashboard);

module.exports = router ;