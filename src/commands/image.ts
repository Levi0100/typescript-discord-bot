import { createCanvas, loadImage } from 'canvas'
import App from '../structures/App'
import Command, { CommandRun } from '../structures/Command'

export default class ImageCommand extends Command {
    constructor(client: App) {
        super(client)
        this.name = 'image'
        this.description = 'Envia uma imagem no chat'
    }
    async run({ interaction }: CommandRun) {
        const canvas = createCanvas(750, 460)
        const ctx = canvas.getContext('2d')
        const bg = await loadImage('https://imgur.com/b6ZViKr.png')

        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

        interaction.createMessage('', {
            file: canvas.toBuffer(),
            name: 'image.png'
        })
    }
}