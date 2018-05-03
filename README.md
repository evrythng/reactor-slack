# reactor-slack

A sample Reactor script allowing posting messages to Slack via EVRYTHNG actions. 
After setting the correct 
[Slack webhook URL](https://api.slack.com/incoming-webhooks), creating an action 
of the `_PostToSlack` type to a resource in the same project scope with the 
`channel` and `text` custom fields will send a message to that channel.


## Installation

1. Open the [Dashboard](https://dashboard.evrythng.com) and create a project and 
   application.
2. Create an action type called `_PostToSlack` in the same project.
3. Paste `main.js` into the application's Reactor script field.
4. Click 'Show dependencies' and set the `dependencies` in `package.json`.
5. Save the new script with the 'Update' button.


## Configuration

After creating a Slack webhook integration in your Slack team's dashboard, set 
the webhook's URL as the value of `WEBHOOK_URL` in the Reactor script.


## Usage

Create an action of type `_PostToSlack` with the correct values of `channel` and
`text` in the action's `customFields`. For example:

```json
{
  "type": "_PostToSlack",
  "customFields": {
    "channel": "#shipping_alerts",
    "text": "A package has been shipped to the wrong location!"
  }
}
```
