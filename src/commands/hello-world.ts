import Command, { CommandRun } from '../structures/Command'
import App from '../structures/App'

interface CommandOptions {
    value: string
    name: string
    type: number
}

export default class HelloWorldCommand extends Command {
    constructor(client: App) {
        super(client)
        this.name = 'helloworld'
        this.description = 'Envia "Hello, world!" ou "Olá, mundo!" dependendo do idioma escolhido'
        this.options = [
            {
                name: 'idioma',
                description: 'Selecione o idioma',
                type: 3,
                choices: [
                    {
                        name: 'Português',
                        value: 'pt'
                    },
                    {
                        name: "English",
                        value: 'en'
                    }
                ],
                required: true
            }
        ]
    }
    async run({ interaction }: CommandRun) {
        const args: any = {
            pt: () => {
                interaction.createMessage('Olá, mundo!')
            },
            en: () => {
                interaction.createMessage('Hello, world!')
            }
        }
        const index = interaction.data.options?.find(index => index) as CommandOptions
        args[index.value]()
    }
}