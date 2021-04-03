//install express. npm install express --save (framework to handle http requests)
//install nodemon. npm install nodemon --save-dev
//install morgan logging pkg. npm install morgan --save
//add "start": "nodemon server.js" to package.json
//install body parser: npm install body-parser --save (use this package to parse the body of incoming request)
//install mongoose. npm install mongoose --save
//install multer. npm install multer --save (multer is a body parser)
// install bcrypt, npm install bcrypt --save (encrypting passwords)
//install node json webtoken, npm install jsonwebtoken --save (token generation, bc rest api is stateless)
//(not using) install cookie parser, npm install cookie-parser --save (Parse a cookie value as a signed cookie. This will return the parsed unsigned value if it was a signed cookie and the signature was valid)
//install node-localstorage, npm install node-localstorage --save ()
//npm install express body-parser jsonwebtoken --save
//npm install cors -- save
//npm install express-session -- save
//npm install connect- mongo --save
//npm install -g sass --save
//npm install node-sass --save
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);
