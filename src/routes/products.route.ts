import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ Products: "Hi I am products yayy" });
});

export default router;
