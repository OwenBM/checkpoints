import { AppState } from "../AppState.js";
import { jotService } from "../services/JotService.js";
import { Jot } from "../models/Jot.js";
import { getFormData } from "../utils/FormHandler.js";
import { JotCardController, jotCardController } from "./JotCardController.js";

export class JotController {
    constructor() {
        // console.log('jot controller works');
        AppState.on('activeJot', this.drawActiveJot)
        AppState.on("jots", jotCardController.drawJot)
        AppState.on("jots", this.drawJotCount)
        jotService.loadJots()
        this.drawJotCount()
        this.drawActiveJot()

    }


    addCreateCount() {
        // console.log('bleh');
        jotService.addCreateCount()
        this.drawJotCount()
    }

    drawJotCount() {
        const clickElm = document.getElementById('Jot-Count')
        clickElm.innerText = `Jot Count: ${AppState.jots.length.toString()}`
    }
    createJotCard() {
        event.preventDefault()
        const form = event.target
        // console.log(form, form.title.value);
        const formData = new FormData(form)
        formData.forEach(value => console.log(value))
        const jotData = getFormData(form)
        jotService.createJotCard(jotData)
        jotCardController.drawJot()
        this.drawJotCount()

    }

    drawActiveJot() {
        const activeJot = AppState.activeJot
        const activeElm = document.getElementById('active-jot')
        if (activeJot) {
            const activeContent = activeJot.ActiveJot
            activeElm.innerHTML = activeContent
        } else {
            activeElm.innerHTML = ` <h2>Select your jot!</h2>`
        }
    }



    deleteActiveJot() {
        // console.log('deleting');
        const confirmed = confirm('Deleting a Jot is permanent, are you sure you want to delete?')
        if (confirmed == false) return
        jotService.deleteActiveJot()
        this.drawJotCount()
    }




}
export const jotController = new JotController();