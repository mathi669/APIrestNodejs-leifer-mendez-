const {PubSub} = require('@google-cloud/pubsub')
const createUser = require('../controllers/usersController')
require('dotenv').config()

const pubsub = new PubSub()

const project_id = process.env.PROJECT_ID
const topic_name = process.env.TOPIC_NAME
const subscription= process.env.SUBSCRIPTION

async function subscribe(
    data = 'Hello user',
    projectId = project_id,
    topicNameOrId = topic_name,
    subscriptionName = subscription

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