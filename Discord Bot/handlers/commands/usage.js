const Discord = require('discord.js')

module.exports = {
    name: "-usage",
    aliases: ['u'],
    async run(message, args, client) {
        let firstUsageEmbed = new Discord.MessageEmbed()
            .setTitle('Usage')
            .setDescription('From which command do you want to see the usage:\nban,\nkick,\ncreatechannel,\nmessage,')
            .setTimestampt()
            .setFooter(">_Terminal | In Development_<")
        message.channel.send(firstUsageEmbed).then(message => {
            let collector = await message.author.awaitMessages(filter, {max: 1})
            let answer = collector.first().content
            if (answer) message.delete()
            continue
        })
        
        let description = "This command doesn't exist"
        switch (answer) {
            case 'ban':
                description = "-b/--ban '@username' reason(optional)"
                continue
            case 'kick':
                description = "-k/--kick '@username' reason(optional)"
                continue
            case 'createchannel':
                description = "-c/--createchannel TYPE('TEXT' or 'VOICE') NAME(spaces with -)"
                continue
            case 'message':
                description = "-msg/--message '@username' 'message'"
                continue
        }
        
        let secondUsageEmbed = new Discord.MessageEmbed()
            .setTitle(`Usage of ${command}`)
            .addTimestamp()
            .setDescription(description)
            .setFooter(">_Terminal | In Development_<")
        message.channel.send(secondUsageEmbed)
    }
}
