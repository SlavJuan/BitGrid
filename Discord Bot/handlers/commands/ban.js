const Discord = require('discord.js')

module.exports = {
    name: "-ban",
    aliases: ['b'],
    async run(message, args, client) {
        let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.member.cache.get(args[0]))
        if (!bannedUser) return message.channel.send("Provice a @username to ban the person.")
        let bannedReason = args.join(" ").slice(22)
        if (bannedReason == null) bannedReason = "You were banned"
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You cannot peform this command.")
        if(bannedUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`You cannot ban ${bannedUser}.`)

        message.guild.member(bannedUser).ban('You were banned because: ' + bannedReason)
        message.channel.send(`${bannedUser} has been banned.`)
    }
}