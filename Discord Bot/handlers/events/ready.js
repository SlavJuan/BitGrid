const Discord = require('discord.js')
const command_handler = require('../../commands');

module.exports = {
    type = "ready",
    async run(client) {
        console.log(`${client.user.username} is up and running!`);
        client.user.setActivity(`${prefix}h, ${prefix}-help`, {type: "WATCHING"})
        command_handler.initCommands(client)
    }
}