const Discord = require('discord.js')

module.exports = {
    name: "-clear",
    aliases: ['c'],
    async run(message, args, client) {
        return message.channel.send("This command is still getting worked on please donate to be beta tester https://bit.ly/3bGoDN3")
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.reply("you don't have permission to perform this command.")
        try {
            message.channel.messages.fetch().then((result) => {
                message.channel.bulkDelete(result)
                message.channel.send('I deleted as many messages as I could.').then(message => message.delete(5000))
            })
        } catch(err) {
            message.channel.send("Can't delete more messages")
        }
    }
}