const Discord = require('discord.js'); 
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS,
  Discord.Intents.FLAGS.GUILD_VOICE_STATES,
  Discord.Intents.FLAGS.GUILD_MESSAGES,
  Discord.Intents.FLAGS.GUILD_MEMBERS,
  Discord.Intents.FLAGS.GUILD_PRESENCES
] });
client.login(env.API_KEY);
client.on('ready',readyDiscord)
 
 
 
async function readyDiscord()
{
    console.log('<3');
   // console.log(client)
   client.user.setUsername('OBot')  


}
const commandHandler = require("./commands");

 
client.on('messageCreate', msg => {

 commandHandler(msg,client)
});



//client.on('message', commandHandler(Discord.Message))


/*

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');*/