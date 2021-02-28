const Discord = require('discord.js')

const { prefix, token } = require('./config/config.json')
const command_handler = require('./commands');
const channel = require('./commands/createchannel');

const client = new Discord.Client()

client.once('ready', () => {
  console.log(`${client.user.username} is up and running!`);
  client.user.setActivity(`${prefix}h, ${prefix}-help`, {type: "WATCHING"})
  command_handler.initCommands(client)
});

client.on('message', async message => {
  if (message.author.bot) return
  console.log(`${message.author.tag} in '${message.guild.name}' at #${message.channel.name} sent: "${message.content}"`)

  if (!message.content.startsWith(prefix)) return
  const args = message.content.slice(prefix.length).split(' ')
  const name = args.shift().toLowerCase()
  command_handler.execute(name, message, args, client)
})

client.login(token)