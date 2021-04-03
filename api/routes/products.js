const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const ProductsController = require('../controllers/products');

if (typeof localStorage === 'undefined' || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // where the files should be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/[^A-Z0-9]+/gi, '_'));
    // +new Date().toISOString();
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'video/mp4' ||
    file.mimetype === 'audio/wav' ||
    file.mimetype === 'audio/mpeg' ||
    file.mimetype === 'audio/mp4' ||
    file.mimetype === 'audio/m4a'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Invalid filetype'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 300, // files up to 5mb,
  },
  fileFilter: fileFilter,
});

//router to get all products
router.get('/', checkAuth, ProductsController.products_get_all);

//router to post a product
router.post(
  '/',
  checkAuth,
  upload.single('file'), // upload.single() will only try to parse one file
  ProductsController.products_create_product,
);

//router to get product Id
router.get('/:productId', ProductsController.products_get_product);

//router to patch product Id
router.patch(
  '/:productId',
  checkAuth,
  upload.single('file'),
  ProductsController.products_update_product,
);

//router to delete product
router.delete(
  '/:productId',
  checkAuth,
  ProductsController.products_delete_product,
);

module.exports = router;
