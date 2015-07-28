var mongoose = require('mongoose');
    
var getErrorMessage = function(err) {
                                      if (err.errors) {
                                        for (var errName in err.errors) {
                                          if (err.errors[errName].message) return err.errors[errName].message;
                                        }
                                      } else {
                                        return 'Unknown server error';
                                      }
                                    };    
    
var Article = mongoose.model('Article');

exports.list = function(req, res) {
                                    Article.find().sort('-created').populate('creator', 'firstName   lastName fullName').exec(function(err, articles) {
                                                                                                                                                        if (err) {
                                                                                                                                                          return res.status(400).send({
                                                                                                                                                            message: getErrorMessage(err)
                                                                                                                                                          });
                                                                                                                                                        } else {
                                                                                                                                                          res.json(articles);
                                                                                                                                                        }
                                                                                                                                                      });
                                  };


exports.articleByID = function(req, res, next, id) {
                                                      Article.findById(id).populate('creator', 'firstName lastName fullName').exec(function(err, article) {
                                                                                                                                                            if (err) return next(err);
                                                                                                                                                            if (!article) return next(new Error('Failed to load article ' + id));                 

                                                                                                                                                            req.article = article;
                                                                                                                                                            next();
                                                                                                                                                          });
                                                    };


exports.read = function(req, res) {
                                    res.json(req.article);
                                  };


exports.delete = function(req, res) {
                                      var article = req.article;

                                      article.remove(function(err) {
                                                                      if (err) {
                                                                        return res.status(400).send({
                                                                          message: getErrorMessage(err)
                                                                        });
                                                                      } else {
                                                                        res.json(article);
                                                                      }
                                                                    });
                                    };


exports.requiresLogin = function(req, res, next) {
                                                    if (!req.isAuthenticated()) {
                                                      return res.status(401).send({
                                                        message: 'User is not logged in'
                                                      });
                                                    }

                                                    next();
                                                  };


exports.hasAuthorization = function(req, res, next) {
                                                        if (req.article.creator.id !== req.user.id) {
                                                                                                          return res.status(403).send({
                                                                                                              message: 'User is not authorized'
                                                                                                          });
                                                                                                      }
                                                        next();
                                                    };






