import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ],
  })

  // Listen for when the bot is ready
client.on('ready', () => {
  console.log('The bot is ready!')
})
// Listen for new messages
client.on('messageCreate', (msg) => {
  // Was the message "ping"?
  if (msg.content === 'coordinates.SciBot') {
    // Reply with "pong"
    msg.reply({
      content: '**SciBase:** x1800 z-2600 \n**SciDistrict:** x20000 z0 (**Ice Farm:** x20000 z2000 --- **Witch Farm:** x19500 z2700)',
    })
  }
})

// Listen for when the bot is ready
client.on('ready', () => {
  console.log('The bot is ready!')
})
// Listen for new messages
client.on('messageCreate', (msg) => {
  // Was the message "ping"?
  if (msg.content === 'server.SciBot') {
    // Reply with "pong"
    msg.reply({
      content: '**About Server:** Paper version git-Paper-18 **(MC: 1.18)** (Implementing API version 1.18-R0.1-SNAPSHOT) (GIT: 13a445c) \n**Seed:** -1171947030733164536',
    })
  }
})
  client.login(process.env.TOKEN)