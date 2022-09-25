import { Client, ClientOptions, InteractionDataOptions } from 'eris'
import { readdirSync } from 'fs'

export default class App extends Client {
    commands: Map<string, any>

    constructor(token: string, options: ClientOptions) {
        super(token, options)
        this.commands = new Map()
    }
    login () {
        var listeners = readdirSync('src/listeners')

        listeners.forEach(async listen => {
            const Listener = await import(`../listeners/${listen}`)
            const listener = new Listener.default(this)

            this.on(listener.name, (...args) => listener.on(...args))
        })

        var commands = readdirSync('src/commands')

        commands.forEach(async cmd => {
            const Command = await import(`../commands/${cmd}`)
            const command = new Command.default(this)

            this.commands.set(command.name, command)
        })

        this.connect()
    }
}