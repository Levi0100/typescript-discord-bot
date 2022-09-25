import Listener from '../structures/Listener'
import { CommandInteraction } from 'eris'
import App from '../structures/App'
export default class InteractionCreateListener extends Listener {
    constructor(client: App) {
        super(client)
        this.name = 'interactionCreate'
    }
    async on(interaction: CommandInteraction) {
        const command = this.client.commands.get(interaction.data.name)

        if (!command) return
        
        await interaction.defer()
        command.run({ interaction })
    }
}