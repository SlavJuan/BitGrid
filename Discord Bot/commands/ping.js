const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
    name: "-ping",
    aliases: ['p'],
    async run(message, args, client) {
        message.channel.send('Calculating ping...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            resultMessage.edit(`Bot latency: ${ping}, API latency: ${client.ws.ping}`)
        })
    }
}
