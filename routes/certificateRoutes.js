const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "Certificates API working"
  });
});

module.exports = router;