/**
 * CommentsController
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
            res.view('list', {posts:posts});
        });
     },
   
     add:function(req, res){
       res.view('add');
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

};

