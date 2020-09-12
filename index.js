import { Client, Message }  from 'discord.js'
import { config } from './secrets.js'
import { includesAny } from './utils.js'
import { store, useCounter } from './redux.js'

const client = new Client()

client.once('ready', () => {
    console.log('https://discord.com/oauth2/authorize?client_id=' + config.clientId + '&scope=bot')
})

const prefix = config.config


client.on('message', ({ content, channel, member }) => {
    const [counter, increment] = useCounter()
    try {
        if (content === 'henlo') {
            channel.send(counter)
            increment()
        }

    } catch {
        channel.send('something went wrong')
    }
})

client.login(config.botToken)
