const request = require('request');

const WEBHOOK_URL = '';

const validate = ({ customFields }) => {
    const { channel, text } = customFields;
    if (!channel) throw new Error('channel not specified!');
    if (!text) throw new Error('text not specified!');
    
    return Promise.resolve(customFields);
};

const postToSlack = json => new Promise((resolve) => {
  request.post({ url: WEBHOOK_URL, json }, (err, response, body) => {
    if (err) throw err;

    resolve(body);
  });  
});

// @filter(onActionCreated) action.type=_PostToSlack
function onActionCreated(event) {
  validate(event.action)
    .then(postToSlack)
    .then(body => logger.info(`Response from Slack: ${body}`))
    .catch(err => logger.error(err))
    .then(done);
}
