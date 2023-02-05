require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const adminRoutes = require('./app/routes/admin/adminRoutes');
const userRoutes = require('./app/routes/user/userRoutes');
const globalErrorHandler = require('./app/middlewares/globalErrorHandler/globalErrorHandler');
const {notFoundErrorRouter} = require("./app/routes/notFoundErrorRouters");

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        // images is the folder name
        //console.log('destination: ',req)
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        //console.log('fileName: ',req)
        cb(null, uuidv4() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        // to save the file
        cb(null, true);
    } else {
        // to don't save the file
        console.log('it doesn\'t save');
        cb(null, false);
    }
};

app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use(adminRoutes);
app.use(userRoutes);
app.use(globalErrorHandler);
app.use(notFoundErrorRouter);

app.listen(process.env.PORT, () => {
    console.log('App is ready to use.');
})

// mongoose
//     .connect(process.env.MONGODB_CONNECT_STRING)
//     .then(() => {
//         app.listen(3001);
//         console.log('App is ready to use.');
//     }).catch(e => {
//     console.log(e);
// })