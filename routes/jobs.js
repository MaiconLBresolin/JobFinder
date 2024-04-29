const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

router.get("/test", (req, res) => {
  res.send("Deu Certo amigo");
});

// add job via post
router.post("/add", (req, res) => {
  let { TITLE, SALARY, COMPANY, DESCRIPTION, EMAIL, NEW } = req.body;

  //insert
  Job.create({
    TITLE,
    DESCRIPTION,
    SALARY,
    COMPANY,
    EMAIL,
    NEW,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
