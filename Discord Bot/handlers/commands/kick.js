const Discord = require('discord.js')

module.exports = {
    name: "-kick",
    aliases: ['k'],
    async run(message, args, client) {
        let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.member.cache.get(args[0]))
        if (!kickedUser) return message.channel.send("Provice a @username to kick the person.")
        let kickedReason = args.join(" ").slice(22)
        if (kickedReason == null) kickedReason = "You were banned"
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot peform this command.")
        if(kickedUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`You cannot kick ${kickedUser}.`)

        message.guild.member(kickedUser).kick('You were kicked because: ' + kickedReason)
        message.channel.send(`${kickedUser} has been kicked.`)
    }
}