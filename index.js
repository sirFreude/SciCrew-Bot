import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ],
  })

client.on('ready', () => {
  console.log('help.SciBot is ready')
})
client.on('messageCreate', (msg) => {
  if (msg.content === 'help.SciBot') {
    msg.reply({
      content: '**SciBot Commands:** \n\n*help.SciBot:* will display this message. \n*info.SciBot:* will display information about the Minecraft Server and this Discord Bot. \n*coordinates.SciBot:* will display coordinates of some areas.',
    })
  }
})

client.on('ready', () => {
  console.log('coordinates.SciBot is ready')
})
client.on('messageCreate', (msg) => {
  if (msg.content === 'coordinates.SciBot') {
    msg.reply({
      content: '**SciBase:** x1800 z-2600 \n**SciDistrict:** x20000 z0 -> **Ice Farm:** x20000 z2000 --- **Witch Farm:** x19500 z2700)',
    })
  }
})

client.on('ready', () => {
  console.log('server.SciBot is ready')
})
client.on('messageCreate', (msg) => {
  if (msg.content === 'server.SciBot') {
    msg.reply({
      content: '**About Server:** Paper version git-Paper-18 **(MC: 1.18)** (Implementing API version 1.18-R0.1-SNAPSHOT) (GIT: 13a445c) \n**Seed:** -1171947030733164536',
    })
  }
})
  client.login(process.env.TOKEN)
// DM me on discord for the TOKEN: sirFreude#6330
