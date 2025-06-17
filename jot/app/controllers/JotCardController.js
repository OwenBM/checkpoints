import { AppState } from "../AppState.js";

export class JotCardController {
    constructor() {
        // console.log("jot card con", AppState.jots);
        this.drawJot()
    }

    drawJot() {
        const jotElm = document.getElementById('left-jot-cards')
        let jotContent = ''
        const jots = AppState.jots
        jots.forEach((jot) => jotContent += jot.jotCard())
        jotElm.innerHTML = jotContent
    }

}
export const jotCardController = new JotCardController();