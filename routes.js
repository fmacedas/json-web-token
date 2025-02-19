const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

router.get("/status", (req, res) => {
  res.json({
    status: 200,
    message: "API is working",
  });
});

router.post("/jwt", (req, res) => {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 3600;

  const { iss, scope, aud, privateKey } = req.body;

  const payload = {
    iss: iss,
    scope: scope,
    aud: aud,
    iat: iat,
    exp: exp,
  };

  const jwtToken = jwt.sign(payload, privateKey, {
    algorithm: "RS256",
  });

  res.json({
    JWT: jwtToken,
  });
});

module.exports = router;
