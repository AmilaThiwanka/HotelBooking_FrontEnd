const {validationResult} = require('express-validator');

const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Room = require('../models/roomModel');
// const Item = require('../models/item');

const mongoose = require('mongoose');

const bcrypt = require("bcrypt");


exports.signUp = (req, res, next) => {

    console.log("GOTTTTTTTTTTTTTTTTTTTTT");
    const errors = validationResult(req);
    let loadUser;
    if (!errors.isEmpty()) {
        const message = errors.array()[0].msg;
        const error = new Error(message);
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    bcrypt.hash(password, 12)
        .then(hashedPw => {
            const user = new User({
                email: email,
                password: hashedPw,
                name: name,
            });
            return user.save();
        }).then(result => {
        res.status(200).json({message: "user saved"});
    })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadUser;


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const message = errors.array()[0].msg;

        const error = new Error(message);
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    User.findOne({email: email})
        .then(user => {
            if (!user) {

                const error = new Error('User not found!');
                error.statusCode = 404;
                throw error;
            }
            loadUser = user;

            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Incorrect Password!');
                error.statusCode = 401;
                throw error;
            }


            res.status(200).json({
                message: "Sign in successful",
            });

        })
        .catch(err => {
            next(err);
        })
}


exports.signUp = (req, res, next) => {

    console.log("GOTTTTTTTTTTTTTTTTTTTTT");
    const errors = validationResult(req);
    let loadUser;
    if (!errors.isEmpty()) {
        const message = errors.array()[0].msg;
        const error = new Error(message);
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    bcrypt.hash(password, 12)
        .then(hashedPw => {
            const user = new User({
                email: email,
                password: hashedPw,
                name: name,
            });
            return user.save();
        }).then(result => {
        res.status(200).json({message: "user saved"});
    })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}

exports.searchRooms = async (req, res, next) => {
    const room_name = req.body.room_name;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const message = errors.array()[0].msg;

        const error = new Error(message);
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    try {
        // Create a case-insensitive regex pattern to match the given name
        const regexPattern = new RegExp(room_name, "i");
    
        // Find all rooms that match the given name (anywhere in the name field)
        const rooms = await Room.find({
            $or: [
              { name: regexPattern },
              { description: regexPattern },
            ],
          });
    
        return res.status(200).json(rooms);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error." });
    }
}

exports.getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } 
    catch (error) {
        res.status(500).json({ message: 'Error fetching rooms' });
    }
}

exports.getRoom = async (req, res, next) => {
const roomId = req.params.id; // Assuming the route has a parameter named 'id' to specify the room ID

  try {
    // Find the room by its ID
    const room = await Room.findById(roomId);
    return res.status(200).json(room);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
}

// exports.addItem = (req, res, next) => {
//     let errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         const message = errors.array()[0].msg;
//         const error = new Error(message);
//         error.statusCode = 422;
//         error.data = errors.array();
//         throw error;
//     }

//     const item = new Item({
//         productName: req.body.productName,
//         category: req.body.category,
//         price: req.body.price,
//         details: req.body.details,
//         url: req.body.url,
//     });

//     return item.save()
//         .then(result => {
//             res.status(201).json({_id: result._id, message: "Successful"})
//         })
//         .catch(err => {
//             next(err);
//         })
// }


// // exports.postMarkedAsRead = (req, res, next) => {
// //     let notificationId = req.body._id;
// //
// //     if (!notificationId || notificationId === "") {
// //         const error = new Error("Error Occurred");
// //         error.statusCode = 422;
// //         throw error;
// //     }
// //     User.findById(req.userId)
// //         .populate('notifications')
// //         .then(user => {
// //             if (!user.isActive) {
// //                 const error = new Error("Please verify the account");
// //                 error.statusCode = 401;
// //                 throw error;
// //             }
// //             const index = user.notifications.findIndex(notification => {
// //
// //                 return notification._id.toString() === notificationId;
// //             });
// //             if (index < 0) {
// //                 const error = new Error("Error! notification not found");
// //                 error.statusCode = 422;
// //                 throw error;
// //             }
// //
// //             user.notifications[index].isRead = true;
// //             return user.notifications[index].save();
// //         })
// //         .then(result => {
// //             res.status(201).json({_id: result._id, message: "Successful"})
// //         })
// //
// //         .catch(err => {
// //             next(err);
// //         })
// //     ;
// // }
// //
// // //======================================================== GET =========================================================
// // exports.getStatus = (req, res, next) => {
// //     let feederId;
// //     User.findById(req.userId)
// //         .then(user => {
// //
// //             if (!user) {
// //                 const error = new Error("Something went wrong!")
// //                 error.statusCode = 500
// //                 throw error
// //             }
// //             if (!user.isActive) {
// //                 const error = new Error("Please verify the account");
// //                 error.statusCode = 401;
// //                 throw error;
// //             }
// //             feederId = user.petFeeder;
// //             return PetFeeder.findById(feederId);
// //         })
// //         .then(feeder => {
// //             res.status(200).json({
// //                 battery: feeder.battery,
// //                 status: feeder.status,
// //                 lastFeedTime: feeder.lastFeedTime,
// //                 remainingRounds: feeder.remainingRounds
// //             })
// //         })
// //         .catch(err => {
// //             next(err);
// //         })
// // }
// //
// //
// exports.getItems = (req, res, next) => {

//     console.log("Items");
//     Item.find()
//         .sort({createdAt: -1})
//         .limit(3).then(result => {
//             console.log(result);
//         return res.status(201).json({data: result})
//     }).catch(err => {
//         next(err);
//     })
// }


// exports.getScheduleHistory = (req, res, next) => {
//     User.findById(req.userId)
//         .then(user => {
//             if (!user) {
//                 const error = new Error("User Not found")
//                 error.statusCode = 404
//                 throw error
//             }
//             if (!user.isActive) {
//                 const error = new Error("Please verify the account");
//                 error.statusCode = 401;
//                 throw error;
//             }
//
//             res.status(200).json(user.ScheduleHistory);
//
//         })
//         .catch(err => next(err));
//
//     // User.findById(req.userId)
//     //     .populate('ScheduleHistory')
//     //     .then(user => {
//     //         if (!user.isActive) {
//     //             const error = new Error("Please verify the account");
//     //             error.statusCode = 401;
//     //             throw error;
//     //         }
//     //         if (!user.ScheduleHistory) {
//     //             const error = new Error("Something went wrong");
//     //             error.statusCode = 500;
//     //             throw error;
//     //         }
//     //         res.status(201).json(user.ScheduleHistory);
//     //     })
//     //     .catch(err => {
//     //         next(err);
//     //     })
//
// }
//
// exports.getNotifications = (req, res, next) => {
//     User.findById(req.userId)
//         .populate('notifications')
//         .then(user => {
//             if (!user.isActive) {
//                 const error = new Error("Please verify the account");
//                 error.statusCode = 401;
//                 throw error;
//             }
//             if (user) {
//                 res.status(201).json(user.notifications);
//             }
//         })
//         .catch(err => {
//             next(err);
//         })
// }
//
//
