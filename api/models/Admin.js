/**
 * Admin.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
// var bcrypt = require('bcrypt');npm

module.exports = {

  attributes: {
        name: {
            type: 'string',
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            required: true
        },
        // override default toJSON
        // toJSON: function() {
        //     var obj = this.toObject();
        //     delete obj.password;
        //     return obj;
        // }
  },

//   beforeCreate: function(user, cb) {
//       bcrypt.genSalt(10, function(err, salt) {
//           bcrypt.hash(user.password, salt, function(err, hash) {
//             if(err) {
//                 console.log(err);
//                 cb(err);
//             } else {
//                 user.password = hash;
//                 console.log(hash);
//                 cb(null, user);
//             }
//           });
//       });
//   }

};

