const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "Blogs API working"
  });
});

module.exports = router;