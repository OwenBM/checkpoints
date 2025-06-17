import { AppState } from "../AppState.js";
import { backgroundImageService } from "../services/BackgroundImageService.js";
import { Pop } from "../utils/Pop.js";


export class BackgroundImageController {
    constructor() {
        console.log('image controller works')
        this.getBackground()
        AppState.on('image', this.drawImage)
        AppState.on('author', this.drawAuthor)
    }

    async getBackground() {
        try {
            await backgroundImageService.getBackground()
        } catch (error) {
            console.error('could not get image', error);
            Pop.error(error, 'Image could not be retrieved', 'bummer')
        }
    }

    drawImage() {
        const Image = AppState.image
        const Author = AppState.author
        // AppState.image = backgroundImageService.image
        // console.log('image test', AppState.image);
        // console.log('author test', AppState.author);

        const imageElm = document.getElementById('background-image')
        document.body.style.backgroundImage = `url('${AppState.image}')`;

    }

    drawAuthor() {
        const authorElm = document.getElementById('img-author')
        // console.log('author elm', authorElm);
        // console.log('Setting author to:', AppState.author);
        authorElm.innerText = "Author: " + AppState.author || "Unknown Author"
    }

}