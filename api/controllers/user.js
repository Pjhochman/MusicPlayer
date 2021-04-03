const User = require("../models/user"); //importing the user model
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//POST api/user/signup
//to create a user in postman: {"email": "<email>", "password": "<password>"}. Will receive token.
exports.user_signup = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(422).json({
          message: "Email already exists"
        }); //422 unprocessable entity
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: er
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);

                res.status(201).json({
                  //201 when creating a resource
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
};
//POST api/user/login
//to login a user in postman: {"email": <email>, "password": <password}

exports.user_login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    console.log("user.js " + user);

    if (!user) {
      delete req.session.user;
      return res.status(401).json({
        // 401 unauthorized
        message: "User not found"
      });
    }

    const result = await bcrypt.compare(req.body.password, user.password);

    if (!result) {
      delete req.session.user;
      return res.status(401).json({
        // 401 unauthorized
        message: "Auth failed"
      });
    }

    req.session.user = {
      email: req.body.email,
      user_id: user._id
    };

    return res.status(200).json({
      message: "Auth successful"
    });
  } catch (err) {
    console.log(err);
    delete req.session.user;
    res.status(500).json({
      error: err
    });
  }
};

//LOGOUT user
exports.user_logout = async (req, res, next) => {
  req.session.destroy(error => {
    if (error) {
      next(error);
    } // handle error in error middleware
    return res.status(200).send("ok");
  });
};

//DELETE user
exports.user_delete = (req, res, next) => {
  User.deleteOne({ _id: req.params.userId })
    .select("-_v")
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
