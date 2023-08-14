const {PubSub} = require('@google-cloud/pubsub')
const createUser = require('../controllers/usersController')

const pubsub = new PubSub()

async function subscribe(
    data = 'Hello user',
    projectId = 'spatial-logic-394815',
    topicNameOrId = 'projects/spatial-logic-394815/topics/topicTestings',
    subscriptionName = 'projects/spatial-logic-394815/subscriptions/topicTestings-sub'

){
    const dataBuffer = Buffer.from(data);

    try {
        const messageId = await pubsub
                            .topic(topicNameOrId)
                            .publishMessage({ data: dataBuffer })
        console.log(`Message ${messageId} published.`);
    } catch (error) {
        console.error(`Received error while publishing: ${error.message}`);
        process.exitCode = 1;
    }
}

module.exports = subscribe;