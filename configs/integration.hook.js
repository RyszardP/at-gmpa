const { IncomingWebhook } = require('@slack/webhook');
import { tokens } from './tokens';

const url = tokens.slack_token.token;

const webhook = new IncomingWebhook(url);

module.exports = {
  async reportToSlack(message) {
    await webhook.send({
      text: message,
    });
  },
};
