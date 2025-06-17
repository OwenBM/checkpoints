import { AppState } from "../AppState.js";
import { api } from "../utils/Axios.js"


class BackgroundImageService {

    async getBackground() {
        const response = await api.get('api/images')
        // console.log('images incoming!!', response.data);
        const image = response.data.imgUrls.regular
        AppState.image = image
        const author = response.data.attribution
        // console.log('give me da author name', author);

        AppState.author = author
        // console.log('appstate author', AppState.author);


    }
}


export const backgroundImageService = new BackgroundImageService