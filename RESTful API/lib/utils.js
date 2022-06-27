const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let authHeader = "";
  if (req.headers.hasOwnProperty("authorization")) {
    authHeader = req.headers["authorization"];
  }
  if (authHeader == null) {
    res.status(400).json({
      status: "failed",
      data: [],
      error: "Authorization not found",
    });
  }
  const token = authHeader.split(" ")[1];
  if (token == null) {
    res.status(400).json({
      status: "failed",
      data: [],
      error: "Token not found",
    });
    // next();
  } else {
    jwt.verify(token, process.env.SECRET, (error, payload) => {
      if (error) {
        res.status(403).json({
          status: "failed",
          data: [],
          error: "Token doesn't match",
        });
      } else {
        req.payload = payload;
        next();
      }
    });
  }
};

const generateToken = (payload, refresh = false) => {
    if (refresh) {
     return   jwt.sign(
            {
              role: payload[0].role,
            },
            process.env.REFRESH_SECRET,
            {
              expiresIn: "3m",
            });
    } else {
        return  jwt.sign(
            {
              role: payload[0].role,
            },
            process.env.SECRET,
            {
              expiresIn: "1m",
            });
    }
}

const verifyRefreshToken = (req, res, next) => {
    let authHeader = "";
    if (req.headers.hasOwnProperty("authorization")) {
      authHeader = req.headers["authorization"];
    }
    if (authHeader == null) {
      res.status(400).json({
        status: "failed",
        data: [],
        error: "Authorization not found",
      });
    }
    const token = authHeader.split(" ")[1];
    if (token == null) {
      res.status(400).json({
        status: "failed",
        data: [],
        error: "Token not found",
      });
      // next();
    } else {
      jwt.verify(token, process.env.REFRESH_SECRET, (error, payload) => {
        if (error) {
          res.status(403).json({
            status: "failed",
            data: [],
            error: "Token doesn't match",
          });
        } else {
          req.payload = payload;
          next();
        }
      });
    }
  };

module.exports = {verifyToken, generateToken, verifyRefreshToken };
