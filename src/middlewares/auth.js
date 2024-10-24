const userAuth = (req, res, next) => {
  console.log("User auth is getting checked");
  const token = "xyz";
  const isAuthorised = token === "xyz";
  if (!isAuthorised) {
    res.status(401).send("User auth is unauthorised");
  } else {
    next();
  }
};

module.exports = {
  userAuth,
};
