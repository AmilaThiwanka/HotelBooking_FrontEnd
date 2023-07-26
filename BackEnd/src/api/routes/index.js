const express = require("express");

const {body} = require("express-validator");

const userControllers = require("../controllers/controller");

const User = require("../models/user");

const router = express.Router();


router.put('/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email!')
            .normalizeEmail({gmail_remove_dots: false})
            .custom((value, {req}) => {
                return User.findOne({email: value})
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject('E-mail already in use')
                        }
                    })
            })
        ,
        body('password').trim().not().isEmpty().withMessage('Password is empty'),
        body('name').trim()
            .not().isEmpty().withMessage('name field cannot be empty'),

    ], userControllers.signUp);

router.post('/login',
    [
        body('email')
            .isEmail().withMessage("Please enter a valid email")
            .normalizeEmail({gmail_remove_dots: false}),
        body('password').trim().not().isEmpty().withMessage("Password cannot be empty")
    ], userControllers.login);


// router.post('/item', userControllers.addItem);

router.post('/search_rooms',
[
    body('room_name').trim().not().isEmpty().withMessage("Room name cannot be empty")
],userControllers.searchRooms);

router.get('/rooms', userControllers.getRooms);

router.get('/room/:id', userControllers.getRoom);
//
// router.get('/get_notifications',isAuthUser,userControllers.getNotifications);
//

module.exports = router;

