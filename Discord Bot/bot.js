const Discord = require('discord.js')

const { token } = require('./config/config.json')
const command_handler = require('./commands');
const event_handler = require('./events');

const client = new Discord.Client()

event_handler.performEvents(client)

client.login(token)