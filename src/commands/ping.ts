import Command, { CommandRun } from '../structures/Command'
import App from '../structures/App'

export default class PingCommand extends Command {
    constructor(client: App) {
        super(client)
        this.name = 'ping'
        this.description = 'Mostra o ping do bot'
    }
    async run({ interaction }: CommandRun) {
        const guild = this.client.guilds.get(interaction.guildID as string)

        interaction.createMessage(`Pong! \`${guild?.shard.latency}ms\``)
    }
}