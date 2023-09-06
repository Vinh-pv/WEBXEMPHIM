const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class UserController {
    // [GET] /users/:slug
    // show(req, res, next) {
    //     user.findOne({ slug: req.params.slug })
    //         .then((user) =>
    //             res.render('users/show', {
    //                 user: mongooseToObject(user),
    //             }),
    //         )
    //         .catch(next);
    // }

//     // [GET] /users/create
    login(req, res, next) {
        res.render('users/login');
    }

    

//     // [POST] /users/store
//     store(req, res, next) {
//         req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
//         const user = new user(req.body);
//         user
//             .save()
//             .then(() => res.redirect('/me/stored/users'))
//             .catch((error) => {});
//     }

//     // [GET] /users/:id/edit
        
        management(req, res, next) {
        Promise.all([User.find({}), User.countDocumentsDeleted()])
            .then(([users, deletedCount]) =>
                res.render('users/management', {
                    deletedCount,
                    users: mutipleMongooseToObject(users),
                }),
            )
            .catch(next);
        
    }
    register(req, res, next) {
       res.render('users/signup')
    }
    

    sigup(req, res, next) {
        const user = new User(req.body);
        user
            .save()
            .then(() => res.redirect('management'))
            .catch((error) => {});      
        
    }

    // store(req, res, next) {
    
    //     const User = new User(req.body);
    //     User
    //         .save()
    //         .then(() => res.redirect('/user/management'))
    //         .catch((error) => {});          
    // }
    
    

//     // [PUT] /users/:id
//     update(req, res, next) {
//         user.updateOne({ _id: req.params.id }, req.body)
//             .then(() => res.redirect('/me/stored/users'))
//             .catch(next);
//     }

//     // [DELETE] /users/:id
//     destroy(req, res, next) {
//         user.delete({ _id: req.params.id })
//             .then(() => res.redirect('back'))
//             .catch(next);
//     }

//     // [DELETE] /users/:id/force
    forceDestroy(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

//     // [PATCH] /users/:id/restore
//     restore(req, res, next) {
//         user.restore({ _id: req.params.id })
//             .then(() => res.redirect('back'))
//             .catch(next);
//     }
}

module.exports = new UserController();
