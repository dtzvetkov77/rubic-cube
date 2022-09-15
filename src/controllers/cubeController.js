const router = require("express").Router();
const cubeService = require("../services/cubeService");

const cubes = require("../db.json");
const path = require("path");

router.get("/create", (req, res) => {
  res.render("create");
});

router.post("/create", async (req, res) => {
  const cube = req.body;

  if (cube.length < 2) {
    return res.status(400).send("Invalid request");
  }

  try {
    await cubeService.save(cube);
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/details/:id',  (req, res)=> {
    const cube = cubeService.getOne(req.params.id);
    res.render('details', {cube})
})

module.exports = router;
