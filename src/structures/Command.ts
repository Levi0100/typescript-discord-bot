import App from './App'
import { CommandInteraction } from 'eris'

export interface CommandRun {
    interaction: CommandInteraction
}

export default class Command {
    type?: 1
    name: string
    client: App
    description: string
    options?: object[]

    constructor(client: App) {
        this.name = ''
        this.description = ''
        this.client = client
    }
    async run({}: CommandRun) {}
}