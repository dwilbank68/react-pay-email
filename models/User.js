var mongoose = require("mongoose");
const {Schema} = mongoose;

var UserSchema = new Schema({
    googleId: String
    // name: String,
    // roomNumber:{
    //     type: String,
    //     required: 'Please enter room number',
    //     min:[100,'Not valid']
    // },
    // username: {
    //     type: String,
    //     required: true,
    //     index: { unique: true }
    // },
    // // name: { first: String, last: String },
    // email: {
    //     type: String,
    //     required: true,
    //     match: /.+@.+\..+/,
    //     lowercase: true 									// 1
    // },
    // password: { type: String, required: true, select: false },
    // created:  { type: Date, default: Date.now }
});

// UserSchema
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
// UserSchema
//     .methods
//     .comparePassword = function(password) {
//     var user = this;
//     return bcrypt.compareSync(password, user.password);
// };

module.exports = mongoose.model('users', UserSchema);

// 1 - type:String gives you functions like trim, lowercase, uppercase
// 1 - lowercase converts all entries to lowercase so that 'Joe' and 'joe'
// 1 - are treated as identical and not as unique
