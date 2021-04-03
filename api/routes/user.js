const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");
const checkAuth = require("../middleware/check-auth");

// we don't store any user information on the server, no need for a logout route.

// Postman create user: localhost:3000/user/signup (raw json {"email": "__", "password": "___"})

router.post("/signup", UserController.user_signup); //encrypting passwords by hashing (if we hash a passwords it's irreversible), can't convert it back to plain text. // salting means adding random strings to the plain text password before hashing it.

router.post("/login", UserController.user_login);

router.post("/logout", UserController.user_logout);

router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;
