const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("test1");
    cb(null, "src/views/home/img/home-books");
  },
  //./img/home-books/1667840685760_best-1.jpg
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
    console.log("test3");
  },
});

const upload = multer({ storage: storage });

export { upload };
