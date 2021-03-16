const Discord = require('discord.js')

module.exports = {
    name: "-message",
    aliases: ['msg'],
    async run(message, args, client) {
        message.delete()

        let receiver = message.guild.member(message.mentions.users.first() || message.guild.member.cache.get(args[0]))
        if (!receiver) return message.channel.send("Provice a @username to message the person.")

        let sendtMessage = args.join(" ").slice(22)
        if (sendtMessage == null) return message.channel.send("Provide a message to send to the user")

        let sender = "Anonymous"

        receiver.send(`${sender} in '${message.guild.name}' sent you: "${sendtMessage}"`)
        message.channel.send(`Message has been sendt to ${receiver.user.tag}`)
    }
}
