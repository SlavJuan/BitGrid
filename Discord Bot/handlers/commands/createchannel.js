const Discord = require('discord.js')

module.exports = {
    name: "-createchannel",
    aliases: ['cc'],
    async run(message, args, client) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`you don't have permission to perform this command.`)

        let name = args[1]
        let type = args[0]

        if (!args[0]) return message.channel.send("Please provide a channel type for the new channel.")
        if (!type === 'voice' || !type === 'text') return message.channel.send("Channels can only use type voice or text.")
        if (!args[1]) return message.channel.send("Please provide a name for the new channel.")

        message.guild.channels.create(name, { type: type })
    }
}