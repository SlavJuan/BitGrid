const Discord = require('discord.js')
const fs = require('fs')

module.exports = {
    async initCommands(client) {
        client.commands = new Discord.Collection

        const commandFiles = (await fs.promises.readdir('./commands', {
            encoding: "utf-8"
        })).filter(file => file.endsWith('.js'))

        for (const file of commandFiles) {
            const command = require(`./commands/${file}`)
            try {
                client.commands.set(command.name, command)
            } catch(err) {
                console.error(err)
            }
        }   
    },
    async execute(name, message, args, client) {
        const command = client.commands.get(name) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(name))
        if (!command) return
        try {
            command.run(message, args, client)
        } catch(err) {
            console.error(err)

            message.channel.send("A Problem Occured, " + err)
        }
    }
}