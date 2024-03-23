import multer, {diskStorage} from "multer";

const storage = diskStorage({
    destination: function(req, res, cb) {
        cb(null, "./public/temp")
    },
    filename: function(req, res, cb){
        cb(null, file.originalname)
    }
})

export const upload = multer({
    storage: storage,
})