const { Router } = require("express");
const { route } = require("./video.route");
const router = Router();

router.use("/video", require("./video.route"));

module.exports = router;
