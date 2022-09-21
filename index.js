const Discord = require("discord.js")
const {Client, GatewayIntentBits} = require('discord.js')
var Dotenv = require("dotenv")
Dotenv.config()

const client = new Discord.Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
 })

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
    if(message.content === 'ping') {
        message.reply({
            content: 'pong'
        })
    }
})

client.on('guildMemberAdd', (member) => {
    if(member.user.username.includes("ESC")){
        const role = member.guild.roles.cache.find(r => r.name === 'ESC 16 Staff')
        member.roles.add(role).catch(console.error)
    }
})

client.login(process.env.TOKEN)