
// idk if this needs its own controller, played it safe

export class ClockController {
    constructor() {
        this.setTime()
        setInterval(() => this.setTime(), 1000);
    }

    setTime() {
        const clock = document.getElementById('clock')
        clock.innerText = (new Date()).toLocaleTimeString();
    }
}