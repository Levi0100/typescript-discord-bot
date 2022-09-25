import App from "./App"

export default class Listener {
    name: string
    client: App

    constructor(client: App) {
        this.name = ''
        this.client = client
    }
}