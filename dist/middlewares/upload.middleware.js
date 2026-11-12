import multer from "multer";
const storage = multer.memoryStorage();
const fileFilter = (req, file, callback) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        callback(null, true);
    }
    else {
        callback(new Error('Arquivo incompatível'));
    }
};
export const uploadAvatar = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
}).single('avatar');
//# sourceMappingURL=upload.middleware.js.map