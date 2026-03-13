const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "Contact API working"
  });
});

module.exports = router;