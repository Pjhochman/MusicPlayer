const Product = require('../models/product'); //importing the product model
const mongoose = require('mongoose');

exports.products_get_all = async (req, res, next) => {
  if (!req.session.user) {
    return res.status(403).send('Unauthorized');
  }

  try {
    const docs = await Product.find()
      .select(
        'name artist key comment intro verse bridge chorus outro link file fileName',
      )
      .exec();
    const response = {
      count: docs.length,
      products: docs.map((doc) => {
        return {
          name: ' ' + doc.name,
          artist: ' ' + doc.artist,
          key: ' ' + doc.key,
          comment: ' ' + doc.comment,
          intro: ' ' + doc.intro,
          verse: ' ' + doc.verse,
          bridge: ' ' + doc.bridge,
          chorus: ' ' + doc.chorus,
          outro: ' ' + doc.outro,
          link: ' ' + doc.link,
          fileName: ' ' + doc.fileName,
          file: ' ' + req.get('host') + '/' + doc.file,
          _id: doc._id,
          request: {
            type: 'GET',
            url: req.get('host') + '/api/products/' + doc._id,
          },
        };
      }),
    };
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

//Postman - Form data
exports.products_create_product = async (req, res, next) => {
  try {
    const product = await new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      artist: req.body.artist,
      key: req.body.key,
      comment: req.body.comment,
      intro: req.body.intro,
      verse: req.body.verse,
      bridge: req.body.bridge,
      chorus: req.body.chorus,
      outro: req.body.outro,
      link: req.body.link,
      fileName: req.body.fileName,
      // file: req.file.path,
    });

    const result = await product.save();
    console.log(result);
    res.status(201).json({
      message: 'Created product successfully',
      createdProduct: {
        name: result.name,
        artist: result.artist,
        key: result.key,
        comment: result.comment,
        intro: result.intro,
        verse: result.verse,
        bridge: result.bridge,
        chorus: result.chorus,
        outro: result.outro,
        link: result.link,
        fileName: result.fileName,
        // file: req.get('host') + '/' + result.file,
        _id: result._id,
        request: {
          type: 'GET',
          url: req.get('host') + '/api/products/' + result._id,
        },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.products_get_product = async (req, res, next) => {
  try {
    const doc = await Product.findById(req.params.productId)
      .select(
        'name artist key comment intro verse bridge chorus outro link file fileName',
      )
      .exec();
    console.log('DOCUMENT!', doc);
    console.log('From database' + doc);
    if (doc) {
      res.status(200).json({
        request: {
          product: doc,
          type: 'GET',
          // file: req.get('host') + '/' + doc.file,
          product_list: req.get('host') + '/api/products/',
        },
      });
    } else {
      res
        .status(404)
        .json({ message: 'No valid entry found for provided ID' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

// to patch value in postman: [{"propName": "price", "value": "Number"}]
// to patch name in postman: [{"propName": "name", "value": "newName"}]
exports.products_update_product = async (req, res, next) => {
  try {
    const id = req.params.productId;

    const result = await Product.updateMany(
      { _id: id },

      {
        $set: {
          name: req.body.name,
          artist: req.body.artist,
          key: req.body.key,
          comment: req.body.comment,
          intro: req.body.intro,
          verse: req.body.verse,
          bridge: req.body.bridge,
          chorus: req.body.chorus,
          outro: req.body.outro,
          link: req.body.link,
          fileName: req.body.fileName,
        },
      },
    )
      .select(
        'name artist key comment intro verse bridge chorus outro link fileName',
      )
      .exec();

    res.status(200).json({
      message: 'product updated',
      request: {
        product: result,
        type: 'GET',
        updated_product: req.get('host') + '/api/products/' + id,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err,
      message: `check syntax: [{${"'propName'"}: ${"'progress'"} or ${"'comment'"}, ${"'value'"} : ${"'new value'"}]}`,
    });
  }
};

//With rest api file upload without AWS
// // to patch value in postman: [{"propName": "price", "value": "Number"}]
// // to patch name in postman: [{"propName": "name", "value": "newName"}]
// exports.products_update_product = async (req, res, next) => {
//   try {
//     const id = req.params.productId;

//     const result = await Product.updateMany(
//       { _id: id },

//       {
//         $set: {
//           name: req.body.name,
//           artist: req.body.artist,
//           key: req.body.key,
//           comment: req.body.comment,
//           intro: req.body.intro,
//           verse: req.body.verse,
//           bridge: req.body.bridge,
//           chorus: req.body.chorus,
//           outro: req.body.outro,
//           link: req.body.link,
//         },
//       },
//     )
//       .select(
//         'name artist key comment intro verse bridge chorus outro link',
//       )
//       .exec();

//     const file = await Product.updateOne(
//       { _id: id },

//       {
//         $set: {
//           file: req.file.path,
//         },
//       },
//     )
//       .select('file')
//       .exec();
//     if (
//       (result.ok && !file.ok) ||
//       (!result.ok && file.ok) ||
//       (result.ok && file.ok)
//     ) {
//       console.log(result);
//       console.log('BODY ' + Object.values(req.body));
//       console.log('FILE ' + req.file.path);

//       res.status(200).json({
//         message: 'product updated',
//         request: {
//           product: result,
//           type: 'GET',
//           updated_product: req.get('host') + '/api/products/' + id,
//         },
//       });
//     } else {
//       throw new TypeError('error');
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       error: err,
//       message: `check syntax: [{${"'propName'"}: ${"'progress'"} or ${"'comment'"}, ${"'value'"} : ${"'new value'"}]}`,
//     });
//   }
// };

exports.products_delete_product = async (req, res, next) => {
  const id = req.params.productId;
  console.log(id);
  const result = await Product.deleteOne({ _id: id }).exec();
  try {
    console.log(result);
    res.status(200).json({
      messsage: 'Product deleted',
      request: {
        type: 'POST',
        url: req.get('host') + '/api/products/',
        body: { name: 'string', composer: 'string' },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

//Promise

// exports.products_get_all = (req, res, next) => {
//   Product.find()
//     .select("-_v")
//     .exec()
//     .then(docs => {
//       const response = {
//         count: docs.length,
//         products: docs.map(doc => {
//           return {
//             name: doc.name,
//             price: doc.price,
//             _id: doc._id,
//             productImage: req.get("host") + "/" + doc.productImage,
//             request: {
//               type: "GET",
//               url: req.get("host") + "/products/" + doc._id
//             }
//           };
//         })
//       };
//       res.status(200).json(response);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// };
