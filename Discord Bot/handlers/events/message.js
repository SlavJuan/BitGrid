const Discord = require('discord.js')
const command_handler = require('../../commands');

const { prefix } = require('../../config/config.json')

module.exports = {
    type: "message",
    async run(client, message) {
        if (message.author.bot) return
        console.log(`${message.author.tag} in '${message.guild.name}' at #${message.channel.name} sent: "${message.content}"`)
      
        if (!message.content.startsWith(prefix)) return
        const args = message.content.slice(prefix.length).split(' ')
        const name = args.shift().toLowerCase()
        command_handler.execute(name, message, args, client)
    }
}