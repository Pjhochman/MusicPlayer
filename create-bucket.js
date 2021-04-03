const AWS = require('aws-sdk');
const dotenv = require('dotenv').config();
const ID = 'AKIAILRCVA24MOQ26HHQ';
const SECRET = process.env.AWS_SECRET;

const BUCKET_NAME = 'kaernvirke';

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

const params = {
  Bucket: BUCKET_NAME,
  CreateBucketConfiguration: {
    LocationConstraint: 'eu-north-1',
  },
};

s3.createBucket(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log('Bucket Created Successfully', data.Location);
});

module.exports = Object.freeze({
  BUCKET_NAME: BUCKET_NAME,
  s3: s3,
});
