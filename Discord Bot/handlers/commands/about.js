const Discord = require('discord.js')

module.exports = {
    name: "-about",
    aliases: ['a'],
    async run(message, args, client) {
        message.author.send("LINK TBC")
        message.channel.send('**About**\nTerminal is a bot made by BitGrid.\nBitGrid was founded because of a small project for school and then Terminal was born.')
    }
}