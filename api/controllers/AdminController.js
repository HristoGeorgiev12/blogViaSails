/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
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
  Articles.destroy({id:req.params.id}).exec(function(err){
     if(err){
         res.send(500, {error: 'Database Error'});
     }
  
     res.redirect('/articles/list');
  });
  return false;
  },

  update: function(req, res){
     var title = req.body.title;
     var body = req.body.body;
  
     Articles.update({id: req.params.id},{title:title, body:body}).exec(function(err){
         if(err){
             res.send(500, {error: 'Database Error'});
         }
  
         res.redirect('/articles/list');
     });
  
     return false;
  },

  edit: function(req, res){
      Articles.findOne({id:req.params.id}).exec(function(err, article){
          if(err){
              res.send(500, {error: 'Database Error'});
          }
  
          res.view('edit', {article:article});
      });
   },

};

