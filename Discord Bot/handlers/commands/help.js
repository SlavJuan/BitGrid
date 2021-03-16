const Discord = require('discord.js')

module.exports = {
    name: "-help",
    aliases: ['h'],
    async run(message, args, client) {
        let helpEmbed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setThumbnail(client.displayAvatarURL)
            .addField('-a, --about', 'Learn everything about Bitgrid and Terminal', true)
            .addField('-b, --ban', 'Ban someone as Moderator', true)
            .addField('\u200B', '\u200B')
            .addField('-cc, --createchannel', 'Create a new TEXT/VOICE channel in your server', true)
            .addField('-dc, --deletechannel', 'Delete the current TEXT channel that you are in', true)
            .addField('\u200B', '\u200B')
            .addField('-k, --kick', 'Kick someone as Moderator', true)
            .addField('-msg, --message', 'Message someone anonymous', true)
            .addField('\u200B', '\u200B')
            .addField('-p, --ping', 'Check the latency between Bot and Server', true)
            //.addField('-u, --usage', 'See how you use a certain command', true)
            .setTimestamp()
            .setFooter(">_Terminal | In Development_<")
        message.channel.send(helpEmbed)
    }
}