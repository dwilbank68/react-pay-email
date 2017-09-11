const _ = require('lodash');
const pathParser = require('path-parser');
const {URL} = require('url');

const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

module.exports = (app) => {

    app.get(
        '/api/surveys',
        requireLogin,
        async (req,res) => {
            const surveys = await Survey
                                    .find({_user: req.user.id})
                                    .select({recipients:false});
            res.send(surveys);
        }
    )

    app.get('/api/surveys/:surveyId/:choice', (req,res) => {
        res.send('Thanks for voting!');
    })

    app.post(
        '/api/surveys',
        requireLogin, requireCredits,
        async (req, res) => {
            const {title, subject, body} = req.body;
            const recipients = req.body.recipients
                                            .split(',')
                                            .map( email => ({ email: email.trim() }) );
            const survey = new Survey({
                title, subject, body,
                recipients,
                _user: req.user.id,
                dateSent: Date.now()
            })

            const mailer = new Mailer(survey, surveyTemplate(survey));

            try {
                await mailer.send();
                await survey.save();
                req.user.credits -= 1;
                const user = await req.user.save();
                res.send(user);
            } catch(err) {
                res.status(422).send(err);
            }

        }
    )

    app.post(
        '/api/surveys/webhooks', (req,res) => {

            const pathTester = new pathParser('/api/surveys/:surveyId/:choice')

            _
                .chain(req.body)
                .map( ({email, url}) => {
                    const pathname = new URL(url).pathname;                             // 1
                    const matchObj = pathTester.test(pathname);                         // 3
                    if (matchObj) {
                        return {
                            surveyId: matchObj.surveyId,
                            choice: matchObj.choice,
                            email
                        };
                    }
                })
                .compact()
                .uniqBy('email','surveyId')
                .each( ({surveyId, email, choice}) => {

                    const queryObj = {
                        _id: surveyId,
                        recipients: {
                            $elemMatch: { email: email, responded: false }
                        }
                    };

                    const changeObj = {
                        $inc: { [choice]:1 },
                        $set: { 'recipients.$.responded': true },
                        lastResponded: new Date()
                    };

                    Survey.updateOne(queryObj, changeObj).exec();
                })
                .value();

            res.send({});                                                           // 4
        }
    )

}


// 1 -  returns just the fragment after the domain
// 3 -  {surveyId: 'foo', choice: 'bar'} or null
// 4 -  respond to sendgrid, otherwise it thinks its post has failed and it will repeat