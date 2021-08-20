const { Router } = require("express");

const VideoStream = require("../controller/video_stream.controller");
const router = Router();

router.get("/", VideoStream.view);
router.get("/stream", VideoStream.stream);

module.exports = router;
