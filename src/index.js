const Discord = require('discord.js'),
    config = require('./config.json');
config.cfg.intents = new Discord.Intents(config.cfg.intents);

const bot = new Discord.Client(config.cfg);
bot.login(config.token);

bot.on('ready', (Client)=>{
    console.log("succses!");

});
bot.on('messageCreate', (message)=>{
    if(message.author.bot) return;

    console.log(message.content);
    ctn = message.id;
    message.channel.threads
    .create({
    name: ctn,
    autoArchiveDuration: 60,
    reason: 'hmm',
    })

    
})