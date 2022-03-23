const Discord = require('discord.js'),
    config = require('./config.json');
config.cfg.intents = new Discord.Intents(config.cfg.intents);

const bot = new Discord.Client(config.cfg);
bot.login(config.token);