exports.render = function(req, res) {
  
                                    if (req.session.lastVisit) {
                                                                  console.log(req.session.lastVisit);
                                                                }

                                     req.session.lastVisit = new Date();
  
                                     res.render('index', {
                                                              title: 'Migs page'
                                                            })
                                    };



/*  //setting1
exports.render = function(req, res) {
  res.send('Hello World');
}; 
*/
