var User = require('mongoose').model('Post');

exports.create = function(req, res, next) {
                                                var user = new User(req.body);

                                                user.save(function(err) {
                                                                          if (err) {
                                                                                      return next(err);
                                                                                    } 
                                                                            else {
                                                                                    res.json(post);
                                                                                  }
                                                                          }
                                                         );
                                          };

exports.list = function(req, res, next) {
                                         User.find({}, function(err, posts) {
                                                                            if (err) {
                                                                                        return next(err);
                                                                                      } 
                                                                            else {
                                                                                    res.json(posts);
                                                                                 }
                                                                          });
                                        };






exports.update = function(req, res, next) {
                                             User.findByIdAndUpdate(req.user.id, req.body, function(err, posts) {
                                                        if (err) {
                                                                  return next(err);
                                                                 } 
                                                       else {
                                                              res.json(post);
                                                            }
                                                  });
                                             };

exports.delete = function(req, res, next) {
                                            req.user.remove(function(err) {
                                                                            if (err) {
                                                                                        return next(err);
                                                                                    } 
                                                                           else {
                                                                                  res.json(req.post);
                                                                                }
                                                                          })
                                          };

//===============this following section must remain at the bottom or else create update delete wont work!!!!=========

exports.read = function(req, res) {
                                    res.json(req.post);
                                  };

exports.userByID = function(req, res, next, id) {
                                                  Post.findOne({
                                                                _id: id
                                                              }, 
                                                               function(err, post) {
                                                                                      if (err) {
                                                                                                  return next(err);
                                                                                                } 
                                                                                      else {
                                                                                              req.post = post;
                                                                                              next();
                                                                                            }
                                                                                    });
                                                };













































