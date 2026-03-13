const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "Experience API working"
  });
});

module.exports = router;