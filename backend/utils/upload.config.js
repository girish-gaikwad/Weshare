import multer from "multer";
import path from "path";

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/profile-pics/'); // Set the destination for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext); // Define how the file will be named
  }
});

// Set up multer file filter (to accept only image files)
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error("Only images are allowed (jpeg, jpg, png)"));
  }
};

// Initialize multer
export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
  fileFilter: fileFilter
});
