var mongoose = require("mongoose");
const {Schema} = mongoose;

var RecipientSchema = new Schema({
    email: String,
    responded: {type: Boolean, default: false}
});

// RecipientSchema
//     .pre('save', function(next) {
//         var user = this;
//         if(!user.isModified('password')) return next();
//         bcrypt.hash(user.password, null, null, function(err, hash) {
//             if(err) return next(err);
//             user.password = hash;
//             next();
//         })
//     })
//
// RecipientSchema
//     .methods
//     .comparePassword = function(password) {
//     var user = this;
//     return bcrypt.compareSync(password, user.password);
// };

module.exports = RecipientSchema;

// 1 - type:String gives you functions like trim, lowercase, uppercase
// 1 - lowercase converts all entries to lowercase so that 'Joe' and 'joe'
// 1 - are treated as identical and not as unique
