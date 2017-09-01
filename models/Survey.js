var mongoose = require("mongoose");
const {Schema} = mongoose;
const RecipientSchema = require('./Recipient');

var SurveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: {type:Number, default:0},
    no: {type:Number, default:0},
    dateSent: Date,
    lastResponded: Date,
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
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

// SurveySchema
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
// SurveySchema
//     .methods
//     .comparePassword = function(password) {
//     var user = this;
//     return bcrypt.compareSync(password, user.password);
// };

module.exports = mongoose.model('surveys', SurveySchema);

// 1 - type:String gives you functions like trim, lowercase, uppercase
// 1 - lowercase converts all entries to lowercase so that 'Joe' and 'joe'
// 1 - are treated as identical and not as unique
