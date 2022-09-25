import 'dotenv/config'
import App from './src/structures/App'

new App(process.env.TOKEN as string, {
    intents: ['all']
}).login()