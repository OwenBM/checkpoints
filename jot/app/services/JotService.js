import { AppState } from "../AppState.js";
import { jotCardController, JotCardController } from "../controllers/JotCardController.js";
import { jotController } from "../controllers/JotController.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";
class JotService {
    addCreateCount() {
        console.log('bleh');
        AppState.jotCount++
        console.log(AppState.jotCount);

    }

    createJotCard(formData) {
        const jot = new Jot(
            formData.title,
            formData.body || 'Enter your jot here!',
            new Date().toLocaleString(),
            null,
            null,
            formData.color
        );
        // console.log('new jot card!');
        AppState.jots.push(jot)
        this.saveJots()
    }
    setActiveJot(jotId) {
        const selectedJot = AppState.jots.find(jot => jot.id == jotId)
        AppState.activeJot = selectedJot;
    }

    setActiveJotBody(newJotText) {
        const activeJot = AppState.activeJot
        activeJot.body = newJotText
        this.saveJots()
        console.log(AppState);

    }

    saveJots() {
        const jots = AppState.jots
        saveState('jots', jots)
    }

    loadJots() {
        let jots = loadState('jots', []);
        jots = jots.map(jot => new Jot(jot.title, jot.body, jot.CreatedAt, jot.UpdatedAt, jot.id, jot.color));
        AppState.jots = jots;
        // console.log('loaded jots', jots);
    }


    deleteActiveJot() {
        const activeJot = AppState.activeJot
        const deleteJot = AppState.jots.indexOf(activeJot)
        AppState.activeJot = null
        AppState.jots.splice(deleteJot, 1)
        jotService.saveJots()
        jotCardController.drawJot()
    }

    saveActiveJot() {
        event.preventDefault()
        // console.log('saving');
        const form = event.target
        const newJotText = form.body.value
        AppState.activeJot.UpdatedAt = new Date().toLocaleString()
        // console.log(newJotText);
        this.setActiveJotBody(newJotText)
        jotCardController.drawJot()
        jotController.drawActiveJot()
    }


}

export const jotService = new JotService()