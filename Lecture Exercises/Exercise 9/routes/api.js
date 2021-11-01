import express from 'express';
import { promises as fs } from 'fs';
import mongoose from 'mongoose';

var router = express.Router();

let User;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/exercise7');

  const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
  });

  User = mongoose.model("User", userSchema);
}

router.get('/pterosaur', async function(req, res, next) {
  const pterosaurJson = await fs.readFile("data/pterosaur.json");
  const parsedPterosaur = JSON.parse(pterosaurJson.toString());
  res.json(parsedPterosaur.filter(pterosaur => pterosaur.img));
});

router.post('/userData', async function(req, res, next) {
  const userData = req.body;
  try {
    const newUser = new User({fname: userData.fname, lname: userData.lname});
    await newUser.save();
    res.send("Success");
  } catch(e) {
    console.log(e);
    res.send(e.toString());
  }
});

export default router;
