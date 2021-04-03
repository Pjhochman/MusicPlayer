module.exports = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({
      //401 unauthenticated
      message: "401 Authentication failed"
    });
  }
  next();
};
