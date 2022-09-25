import App from '../structures/App'
import Listener from '../structures/Listener'

export default class ReadyListener extends Listener {
    constructor(client: App) {
        super(client)
        this.name = 'ready'
    }
    on() {
        console.log(`Eita nois, ${this.client.user.username}#${this.client.user.discriminator} funcionando em TypeScript`)

        this.client.commands.forEach(command => {
            this.client.createGuildCommand('786013941364424704', {
                type: command.type,
                name: command.name,
                description: command.description,
                options: command.options
            })
        })
    }
}