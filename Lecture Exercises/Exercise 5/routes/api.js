import express from 'express';
import { promises as fs } from 'fs';

var router = express.Router();

router.get('/pterosaur', async function(req, res, next) {
  const pterosaurJson = await fs.readFile("data/pterosaur.json");
  const parsedPterosaur = JSON.parse(pterosaurJson.toString());
  res.json(parsedPterosaur.filter(pterosaur => pterosaur.img));
});

router.post('/userData', async function(req, res, next) {
  const userData = req.body;
  try {
    await fs.writeFile("userData.json", JSON.stringify(userData));
    res.send("Success");
  } catch(e) {
    console.log(e);
    res.send(e.toString());
  }
});

export default router;
