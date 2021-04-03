const fs = require('fs');
const AWS = require('aws-sdk');
const dotenv = require('dotenv').config();
const ID = 'AKIAILRCVA24MOQ26HHQ';
const SECRET = process.env.AWS_SECRET;
const BUCKET_NAME = 'kaernvirke';
const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);

  // Setting up S3 upload parameters
  const params = {
    Bucket: BUCKET_NAME,
    Key: '',
    Body: fileContent,
  };

  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

uploadFile('file name from uploads folder');
