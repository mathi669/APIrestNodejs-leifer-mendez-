const {PubSub} = require('@google-cloud/pubsub')
require('dotenv').config()

const pubsub = new PubSub()

async function subscribe(
    userData = 'new user:',
    topicNameOrId = process.env.TOPIC_NAME
){
    
    try {
        
        const dataBuffer = Buffer.from(JSON.stringify(userData));

        const messageId = await pubsub
                            .topic(topicNameOrId)
                            .publishMessage({ data: dataBuffer })
        console.log(`Message ${messageId} published.`);

        //Desconectando subscripcion despues de publicar mensaje
        const subscriptionId = process.env.SUBSCRIPTION
        const subscription = pubsub.subscription(subscriptionId);
        subscription.removeListener('message', messageHandler)
        console.log('Subscripcion detenida');

        // subscription.on('message', messageHandler)
    } catch (error) {
        console.error(`Received error while publishing: ${error.message}`);
        process.exitCode = 1;
    }
}

function messageHandler(message) {

    const userDataJSON = message.data.toString();
    const userData = JSON.parse(userDataJSON)

    console.log(`Received message: ${userData}`);
    message.ack();
}

module.exports = subscribe;