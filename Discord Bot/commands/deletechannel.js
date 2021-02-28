const Discord = require('discord.js')

module.exports = {
    name: "-deletechannel",
    aliases: ['dc'],
    async run(message, args, client) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`you don't have permission to perform this command.`)
        message.channel.delete()
    }
}
