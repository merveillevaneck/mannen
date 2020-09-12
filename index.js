import { Client }  from 'discord.js'
import { config } from './secrets.js'

const client = new Client()

client.once('ready', () => {
    console.log('https://discord.com/oauth2/authorize?client_id=' + config.clientId + '&scope=bot')
})

const prefix = config.config

const includesAny = (msg, subs) => {
    let includes = false
    subs.forEach(sub => {
        if (msg.toLowerCase().includes(sub)) includes = true
    })

    return includes
}

var count = 0

client.on('message', message => {
    if (message.member.id === '571378564210098196') message.channel.send(message.member.toString() + ' hållkäftenhållkäftenhållkäftenhållkäften')
    if (message.member.id === '729818880771358749') {
        if (includesAny(message.content, ['old', '28', 'Carly', 'california']))
            message.channel.send(message.member.toString() + ' :musical_note: "Oh, a sweet old lady, need help across the road?"')
    }
    if (includesAny(message.content, ['swedish', 'swede', 'sweden', 'scandie', 'scandy', 'simp']))
        message.channel.send(' :bee: Vi, i byn. Min by..')
    if (count > 0 && count%47 === 0) {
        message.channel.send('i cant even with you guys')
    }
    if (message.content.toLowerCase().includes('anna')) message.channel.send('en gang for alltid :heart: min aelskade')
    if (includesAny(message.content.toLowerCase(), ['scania', 'scanian'])) {
        if (count%2 === 0) message.channel.send(message.member.toString() + ' uuhh...don\'t you mean McDanmark?!')
    }
    if (message.content === '!fs') message.channel.send('ABUSE OF POWERRRRRRRRR...AAAHHHHH!!!!!')
    count++;
})

client.login(config.botToken)
