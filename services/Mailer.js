const keys = require('../config/keys');

const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

class Mailer extends helper.Mail {

    constructor({subject, recipients}, content ) {                         // 1
        super();
        this.sgAPI = sendgrid(keys.sendgridKey);
        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);                 // 2

        this.addContent(this.body);
        this.addClickTracking();                                            // 1a
        this.addRecipients();
    }

    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true,true);
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients(){
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        })
        this.addPersonalization(personalize);
    }

    formatAddresses(recipients){                                            // 2
        return recipients.map(({email}) => {
            return new helper.Email(email);
        })
    }

    async send(){
        const request = this.sgAPI.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });
        const response = await this.sgAPI.API(request);
        return response;
    }

}

module.exports = Mailer;

// use like

// const mailer = new Mailer(survey, surveyTemplate(survey));

// 1 -  this is called any time 'new Mailer' is called - set up the 4 required properties
// 1a - every email will have the same 'yes' and 'no' links -- nothing to tie the link to the email
//      recipient. This tells Sendgrid to add email identifiers to the 'yes' and 'no' links.
//      https://app.sendgrid.com/email_activity? shows you who clicked their responses.
// 2 -  convert array of {email: user1.email.com} objects to an array of helper.Email objects