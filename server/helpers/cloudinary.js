const cloudinary = require("cloudinary");
const multer = require("multer");


cloudinary.config({
  cloud_name: "CLOUDINARY_CLOUD_NAME",
  api_key: "CLOUDINARY_API_KEY",
  api_secret: "CLOUDINARY_API_SECRET",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
