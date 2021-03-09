const Discord = require('discord.js')

module.exports = {
    name: "-help",
    aliases: ['h'],
    async run(message, args, client) {
        message.channel.send('**HELP**\n-h, --help: Provides Help information for Terminal commands\n-p, --ping: Provides Latency between bot and api')
    }
}