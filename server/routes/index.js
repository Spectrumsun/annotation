import express from "express";
import "dotenv/config";
import controller from "../Controller";


const router = express.Router();

router.get("/", controller.welcome);

router.get("/search", controller.search);

router.use("*", (req, res) =>
  res.status(404).json({
    message: "That url does not exist on this server 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫",
  })
);

export default router;
