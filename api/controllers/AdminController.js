/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login:function(req, res){
        res.view('admin/login');
    },

    // login: function(req, res) {

    //     // Authentication code here
    
    //     // If successfully authenticated
    
    //     req.session.userId = foundUser.id;   // returned from a database
    
    //     return res.json(foundUser);

    // },

    loginVarify:function(req, res){
        var username = req.body.username;
        var password = req.body.password;

        // passport.authenticate('local', function(err, user, info) {
        //     if( (err)||(!user) ) {
        //         return res.send({
        //             message: 'login failed'
        //         });
        //         res.send(err);
        //     };


      Admin.findOne({username: username,password: password }).exec(function(err, varify){
        if(err) res.send(500, {error: 'Database Error'});

        // if(varify) {
            // var username = req.body.username;
            // var password = req.body.password;
            // Admin.create({username:username,  password:password}).exec(function(err){
            //     if(err) res.send(500, {error: 'Database Error'});
            //     req.session.userId = varify.id
            //     res.redirect('admin/list');
            //     // return false;
            //     });

                req.session.userId = varify.id
                res.redirect('list');
        // }

      });
        // res.view('login');
    },

    logout: function(req, res) {
        req.session.destroy();
        res.redirect('login');
        // res.send('logout successful');
    },

  list:function(req, res){
     Posts.find({}).exec(function(err, posts){
         if(err){
             res.send(500, {error: 'Database Error'});
         }
         res.view('admin/list', {posts:posts});
     });
  },

    add:function(req, res){
        res.view('admin/add');
    },

    create:function(req, res){
        var title = req.body.title;
        var author  = req.body.author;
        var body  = req.body.body;
     
        Posts.create({title:title,  author:author,  body:body}).exec(function(err){
        if(err) res.send(500, {error: 'Database Error'});
     
        res.redirect('list');
        });
     },

  delete: function(req, res){
    Posts.destroy({id:req.body.hidden_val}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }
    
        res.redirect('list');
    });
    return false;
  },

  update: function(req, res){
     var title = req.body.title;
     var body = req.body.body;
     var author = req.body.author;
  
     Posts.update({id: req.body.hidden_val},{title:title, body:body, author: author}).exec(function(err){
         if(err){
             res.send(500, {error: 'Database Error'});
         }
  
         res.redirect('list');
     });
  
     return false;
  },

  edit: function(req, res){
      Posts.findOne({id:req.body.hidden_val}).exec(function(err, post){
          if(err){
              res.send(500, {error: 'Database Error'});
          }
  
          res.view('admin/edit', {post:post});
      });
   },

};

